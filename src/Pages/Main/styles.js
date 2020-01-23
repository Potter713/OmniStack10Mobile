import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: #8E4DFF;
`;

export const Top = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #FFF;
  font-weight: bold;
`;

export const Box = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  width: 80%;
  height: 30%;
  border: 5px;
  border-radius: 10px;
  border-color: #fff;
  background: rgba(0,0,0,0.15)
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
`;

