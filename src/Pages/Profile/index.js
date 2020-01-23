import React, { useState, useEffect } from 'react';

import { StatusBar, Keyboard, AsyncStorage } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Modal,
  ModalView,
  ModalViewBox,
  ModalMessage,
  ModalBoxButtons,
  ModalButton,
  ModalButtonText,
  Space,
  Photo,
  Input,
  Button,
  ButtonText,
} from './styles';

function SignIn({ navigation }) {

  const [mounted, setMounted] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('')
  const [bio, setBio] = useState('');
  const [techs, setTechs] = useState('');

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

  useEffect(() => {

    async function getData() {

      const _id = await AsyncStorage.getItem('@DevMap:_id')

      const response = await api.get(`/devs/${_id}`);

      const { avatar_url, name, bio, techs } = response.data;

      setAvatar(avatar_url);
      setName(name);
      setBio(bio);
      setTechs(techs.join(', '));

    }
    getData();

    setTimeout(() => {
      setMounted(true)
    }, 500)

  }, [])

  async function handleSave() {

    try {

      const _id = await AsyncStorage.getItem('@DevMap:_id');

      await api.put(`/devs/${_id}`, {
        type: "user",
        name,
        bio,
        techs,
        avatar_url: avatar
      })

      navigation.navigate('Main');

    } catch (err) {
      // console.log(err)
    }

  }

  async function handleDel() {
    try {

      const _id = await AsyncStorage.getItem('@DevMap:_id');
      await api.delete(`/devs/${_id}`)

      await AsyncStorage.multiRemove([
        '@DevMap:token',
        '@DevMap:_id',
        '@DevMap:github_username',
        '@DevMap:password'
      ])

      setModalOpen(false);

      navigation.navigate('SignIn');

    } catch (err) {
      console.log(err)
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <>

      <Modal
        visible={modalOpen}
        transparent
        animationType="fade"
      >
        <ModalView>
          <ModalViewBox>
            <ModalMessage>
              Deseja mesmo apagar sua conta?
        </ModalMessage>

            <ModalBoxButtons>

              <ModalButton onPress={handleDel}>
                <ModalButtonText>Sim</ModalButtonText>
              </ModalButton>

              <ModalButton onPress={() => setModalOpen(false)}>
                <ModalButtonText>Não</ModalButtonText>
              </ModalButton>


            </ModalBoxButtons>
          </ModalViewBox>
        </ModalView>
      </Modal>

      <Container keyboard={keyboardShow}>
        <StatusBar hidden />

        {keyboardShow ? <Space /> : null}

        <Photo keyboard={keyboardShow} source={{ uri: avatar }} resizeMode="contain" />
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Biografia"
          value={bio}
          onChangeText={setBio}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Tecnologias"
          value={techs}
          onChangeText={setTechs}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button secundary={true} onPress={() => setModalOpen(true)}>
          <ButtonText>Apagar conta</ButtonText>
        </Button>

        <Button onPress={handleSave}>
          <ButtonText>Salvar</ButtonText>
        </Button>

      </Container>
    </>
  );
}

export default SignIn;
