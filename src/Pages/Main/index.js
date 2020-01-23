import React from 'react';
import { View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

import { Container, Top, Title, Box, SubTitle } from './styles';

export default function Main({navigation}) {
  return (
    <Container>

      <Top>
        <Title>
          Dev Radar
        </Title>
      </Top>

      <Box onPress={() => navigation.navigate('DevMap')}>
        <MaterialIcons name="map" color="#fff" size={100} />
        <SubTitle>Mapa</SubTitle>
      </Box>

      <Box onPress={() => navigation.navigate('Profile')}>
        <MaterialIcons name="account-box" color="#fff" size={100} />
        <SubTitle>Perfil</SubTitle>
      </Box>

    </Container>
  );
}
