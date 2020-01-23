import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: ${props => props.keyboard ? 'flex-start' : 'center'};
  backgroundColor: #F5F5F5;
`;

const Logo = styled.Image`
  width: ${props => props.keyboard ? '150px' : '200px'};
  height: ${props => props.keyboard ? '150px' : '200px'};
  marginBottom: 30px;
  marginTop: ${props => props.keyboard ? '30px' : '0px'};
`;

const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const Button = styled.TouchableHighlight`
  padding: 18px;
  borderRadius: 5px;
  backgroundColor: #8E4DFF;
  alignSelf: stretch;
  margin-top: 5px;
  marginHorizontal: 20px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

const SignUpLinkText = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export { Container, Logo, Input, ErrorMessage, Button, ButtonText, SignUpLink, SignUpLinkText };