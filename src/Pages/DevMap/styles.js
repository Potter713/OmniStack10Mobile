import styled from 'styled-components/native';

export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const DevTechs = styled.Text`
  margin-top: 5px;
`;

export const SearchForm = styled.View`
  position: absolute;
  bottom: ${props => props.keyboard ? '50px' : '30px'};
  left: 12px;
  right: 12px;
  z-index: 5;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  border-radius: 20px;
  padding: 10px 0px 10px 20px;
  /* padding-left: 10px;
  padding-right: 10px; */
  font-size: 16px;
  elevation: 5;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #8E4DFF;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
