import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  width: 90%;
  height: 56px;
  background-color: transparent;
  
  border-radius: 6px;
  border-width: 2px;
  border-color: #333;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const Icon = styled(FontAwesome).attrs({
  size: 24,
  color: '#333',
})`
  margin-right: 12px;
`;
