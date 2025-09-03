import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '@/src/theme';

export const Container = styled(TouchableOpacity)`
  width: 90%;
  height: 56px;
  background-color: transparent;
  
  border-radius: 6px;
  border-width: 2px;
  border-color: ${theme.COLORS.GRAY_100};
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.MD};
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Icon = styled(FontAwesome).attrs({
  size: 24,
  color: '#E1E1E6',
})`
  margin-right: 12px;
`;
