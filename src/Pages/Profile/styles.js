import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: ${props => props.keyboard ? 'flex-start' : 'center'};
  background-color: #F5F5F5;
`;

export const Modal = styled.Modal`

`;

export const ModalView = styled.View`
  flex: 1;
  background-color: rgba(0,0,0, 0.7);  
  justify-content: center;
  align-items: center;
`;

export const ModalViewBox = styled.View`
  width: 85%;
  padding: 20px;
  background-color: #FFF;  
  justify-content: center;
  align-items: center;
`;

export const ModalMessage = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const ModalBoxButtons = styled.View`
  width: 100%;
  margin-top: 18px;
  flex-direction: row;
  justify-content: space-around;
`;


export const ModalButton = styled.TouchableHighlight`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;
  background-color: ${ props => props.secundary ? '#CC0000' : '#8E4DFF'};
  margin-top: 10px;
`;

export const ModalButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const Space = styled.View`
  height: 10px;
`;

export const Photo = styled.Image`
  width: ${props => props.keyboard ? '100px' : '150px'};
  height: ${props => props.keyboard ? '100px' : '150px'};
  margin-bottom: ${props => props.keyboard ? '25px' : '45px'};
  margin-top: ${props => props.keyboard ? '25px' : '0px'};
  border-color: #8E4DFF;
  border-radius: 20px;
`;

export const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  border-radius: 5px;
  background-color: #FFF;
  align-self: stretch;
  margin-bottom: 15px;
  marginHorizontal: 20px;
  font-size: 16px;
`;

export const Button = styled.TouchableHighlight`
  padding: 18px;
  border-radius: 5px;
  background-color: ${ props => props.secundary ? '#CC0000' : '#8E4DFF'};
  align-self: stretch;
  margin-top: ${ props => props.secundary ? '10px' : '25px'};
  margin-Horizontal: 20px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;


