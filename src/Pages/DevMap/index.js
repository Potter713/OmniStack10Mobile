import React, { useEffect, useState } from 'react';

import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Keyboard, AsyncStorage } from 'react-native'

import MapView, { Marker, Callout } from 'react-native-maps';

import { MaterialIcons } from '@expo/vector-icons'

import api from '../../services/api'

import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import {
  Avatar,
  DevName,
  DevBio,
  DevTechs,
  SearchForm,
  SearchInput,
  SearchButton,
} from './styles'

function DevMap({ navigation }) {

  const [devs, setDevs] = useState([]);

  const [techs, setTechs] = useState('');

  const [currentRegion, setCurrentRegion] = useState(null);

  const [keyboardShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardShow(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardShow(false));

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow', () =>
        setKeyboardShow(true)
      );
      Keyboard.removeAllListeners('keyboardDidHide', () =>
        setKeyboardShow(false)
      );
    };
  }, [])

  function closeKeyboard() {
    Keyboard.dismiss();
  }

  useEffect(() => {
    async function loadInitialPosition() {

      const _id = await AsyncStorage.getItem('@DevMap:_id')
      const { granted } = await requestPermissionsAsync()

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        })

        await api.put(`/devs/${_id}`, {
          latitude,
          longitude,
          type: "system"
        })

        const response = await api.get('/devs/search', {
          params: {
            latitude,
            longitude,
            techs
          }
        })
        setDevs(response.data.devs)

      }

    }
    loadInitialPosition();
  }, [])

  async function loadDevs() {

    const { latitude, longitude } = currentRegion;

    const response = await api.get('/devs/search', {
      params: {
        latitude,
        longitude,
        techs
      }
    })
    setDevs(response.data.devs)
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  const styles = StyleSheet.create({
    map: {
      flex: 1
    },
    callout: {
      width: 260,
    }
  })

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        style={styles.map}
        onPress={closeKeyboard}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              longitude: dev.location.coordinates[0],
              latitude: dev.location.coordinates[1]
            }}
          >
            <Avatar source={{ uri: dev.avatar_url }} />
            <Callout onPress={() => {
              navigation.navigate('Github', { github_username: dev.github_username })
            }}>
              <View style={styles.callout}>

                <DevName>
                  {dev.name}
                </DevName>
                <DevBio>
                  {dev.bio}
                </DevBio>
                <DevTechs>
                  {dev.techs.join(', ')}
                </DevTechs>

              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <SearchForm keyboard={keyboardShow}>
        <SearchInput
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />
        <SearchButton
          onPress={loadDevs}
        >
          <MaterialIcons name="my-location" color="#fff" size={20} />
        </SearchButton>
      </SearchForm>

    </>
  )
}

export default DevMap;