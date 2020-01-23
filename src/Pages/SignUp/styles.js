import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  alignItems: center;
  justifyContent: ${props => props.keyboard ? 'flex-start' : 'center'};
  backgroundColor: #F5F5F5;
`;

export const Logo = styled.Image`
  width: ${props => props.keyboard ? '100px' : '200px'};
  height: ${props => props.keyboard ? '100px' : '200px'};
  marginBottom: ${props => props.keyboard ? '20px' : '30px'};
  marginTop: ${props => props.keyboard ? '20px' : '0px'};
`;

export const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

export const ErrorMessage = styled.Text`
  textAlign: center;
  color: #ce2029;
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

export const Button = styled.TouchableHighlight`
  padding: 18px;
  borderRadius: 5px;
  backgroundColor: #8E4DFF;
  alignSelf: stretch;
  margin-top: 5px;
  marginHorizontal: 20px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;

export const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  marginTop: 20px;
`;

export const SignUpLinkText = styled.Text`
  color: #999;
  fontWeight: bold;
  fontSize: 16px;
  textAlign: center;
`;
