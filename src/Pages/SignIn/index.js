import React, { useState, useEffect } from 'react';

import { StatusBar, Keyboard, AsyncStorage } from 'react-native';


import api from '../../services/api';

import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  Button,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

function SignIn({navigation}) {

  const [ github_username, setGithub_username] = useState('')

  const [ password, setPassword] = useState('');

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
    async function getData(){

      const github_username = await AsyncStorage.getItem('@DevMap:github_username')
      const password = await AsyncStorage.getItem('@DevMap:password')

      setGithub_username(github_username);
      setPassword(password);

    }
    getData();
  },[])

  async function handleSignIn(){
    if(github_username !== "" && password !== ""){

      try {
        const response = await api.post('/auth/signIn', {
          github_username,
          password,
        })
  
        const { token } = response.data;
        const { _id } = response.data.dev;
  
        await AsyncStorage.multiSet([
          ['@DevMap:token', token],
          ['@DevMap:_id', _id],
          ['@DevMap:github_username', github_username],
          ['@DevMap:password', password]
        ])

        navigation.navigate('Main');

      } catch (err) {
        console.log(err)
      }
    }
    else{
      console.log('Not user name or password')
    }
  }

  return (
    <Container keyboard={keyboardShow}>
      <StatusBar hidden />

      <Logo keyboard={keyboardShow} source={require('../../images/logo.png')} resizeMode="contain" />
      
      <Input
        placeholder="Nome de usuario no Github"
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

      {/* {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>} */}

      <Button onPress={handleSignIn}>
        <ButtonText>Entrar</ButtonText>
      </Button>

      <SignUpLink onPress={() => {
        navigation.navigate('SignUp')
      }}>
        <SignUpLinkText>Criar conta grátis</SignUpLinkText>
      </SignUpLink>
    </Container>
  );
}

export default SignIn;