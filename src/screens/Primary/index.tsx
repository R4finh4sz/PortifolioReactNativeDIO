import React from 'react';
import { StatusBar, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SocialButton } from '../../Components/SocialButton';
import {
  Container,
  ProfileImage,
  ProfileName
} from './styles';

const profileImage = require('../../img/Perfil.jpeg');

export function ProfileScreen() {
  const navigation = useNavigation<any>(); 

  const handleOpenLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Não foi possível carregar a página", err));
  };

  const handleSendEmail = () => {
    Linking.openURL('mailto:rafael.souza6657@gmail.com.com?subject=Contato via App');
  };

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['#2c65b9', '#071d3b']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Container>
        <ProfileImage source={profileImage} />

        <ProfileName>Rafael Souza Santana</ProfileName>

        <SocialButton
          title="LINKEDIN"
          icon="linkedin-square"
          onPress={() => handleOpenLink('https://www.linkedin.com/in/R4finh4sz')}
        />

        <SocialButton
          title="GITHUB"
          icon="github"
          onPress={() => handleOpenLink('https://github.com/R4finh4sz')}
        />

        <SocialButton
          title="E-MAIL"
          icon="envelope"
          onPress={handleSendEmail}
        />

        <SocialButton
          title="Habilidades"
          icon="address-book"
          onPress={() => navigation.navigate('Skills')} 
        />
      </Container>
    </LinearGradient>
  );
}

