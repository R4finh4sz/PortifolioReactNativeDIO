import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, Title, Icon } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

export function SocialButton({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  );
}
