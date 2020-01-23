import React, { useState, useEffect } from 'react';

import { StatusBar, Keyboard, AsyncStorage } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Logo,
  Input,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

function SignUp({ navigation }) {

  const [github_username, setGithub_username] = useState('')

  const [password, setPassword] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('');

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

  async function handleSignUp() {
    if (github_username.length && password.length && confirmPassword.length) {
      if (password === confirmPassword) {
        const response = await api.post('/auth/signUp', {
          github_username,
          password
        });

        const { token } = response.data;
        const { _id } = response.data.dev;

        await AsyncStorage.multiSet([
          ['@DevMap:token', token],
          ['@DevMap:_id', _id],
          ['@DevMap:github_username', github_username],
          ['@DevMap:password', password]
        ])

        navigation.navigate('Main');
      }
    }
  }

  return (
    <Container keyboard={keyboardShow}>
      <StatusBar hidden />
      <Logo keyboard={keyboardShow} source={require('../../images/logo.png')} resizeMode="contain" />

      <Input
        placeholder="Usuario no Github"
        value={github_username}
        onChangeText={setGithub_username}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      <Input
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />

      <Button onPress={handleSignUp}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpLink onPress={() => {
        navigation.navigate('SignIn')
      }}>
        <SignUpLinkText >Já tem uma conta?</SignUpLinkText>
      </SignUpLink>

    </Container>
  );
}

export default SignUp;