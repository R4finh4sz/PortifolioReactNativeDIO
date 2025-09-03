import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: transparent; 
`;

export const ProfileImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border-width: 4px;
  border-color: #FFFFFF;
  margin-bottom: 24px;
`;

export const ProfileName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 32px;
`;

