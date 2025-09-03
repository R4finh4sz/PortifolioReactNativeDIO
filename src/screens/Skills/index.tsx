import React from 'react';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { SocialButton } from '../../Components/SocialButton';

import {
  Container,
  ProfileImage,
  Title,
  SkillsContainer,
  SkillRow,
  SkillName,
  StarsContainer,
} from './styles';

const profileImage = require('../../img/Perfil.jpeg');

const skills = [
  { name: 'React Native', level: 5 },
  { name: 'TypeScript', level: 4 },
  { name: 'Styled Components', level: 5 },
  { name: 'JavaScript ES6+', level: 5 },
  { name: 'React Navigation', level: 4 },
  { name: 'Context API / Redux', level: 4 },
  { name: 'Git & GitHub', level: 4 },
];

const SkillRating = ({ name, level }: { name: string; level: number }) => {
  const stars = Array(5).fill(0); 

  return (
    <SkillRow>
      <SkillName>{name}:</SkillName>
      <StarsContainer>
        {stars.map((_, index) => (
          <FontAwesome
            key={index}
            name="star"
            size={22}
            color={index < level ? '#FFD700' : '#CCCCCC'} 
          />
        ))}
      </StarsContainer>
    </SkillRow>
  );
};

export function SkillsScreen() {
  const navigation = useNavigation();

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

        <Title>Minhas Habilidades</Title>

        <SkillsContainer>
          {skills.map(skill => (
            <SkillRating key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </SkillsContainer>

        <SocialButton
          title="FALA COMIGO"
          icon="arrow-left"
          onPress={() => navigation.goBack()}
        />
      </Container>
    </LinearGradient>
  );
}
