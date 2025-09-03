import React from 'react';
import { StatusBar, Linking, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SocialButton } from '../../Components/SocialButton';
import { 
  Container, 
  ProfileImage, 
  ProfileName 
} from './styles';
const profileImage = require('../../assets/img/Perfil.jpeg');

export function ProfileScreen() {

  const handleOpenLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Não foi possível carregar a página", err));
  };

  const handleSendEmail = () => {
    Linking.openURL('mailto:rafael.souza@gmail.com.com?subject=Contato via App');
  };

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={['#2B518A', '#1D3557']}
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
      </Container>
    </LinearGradient>
  );
}

