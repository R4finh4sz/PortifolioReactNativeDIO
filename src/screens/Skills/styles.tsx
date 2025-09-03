import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: transparent;
`;

export const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-width: 4px;
  border-color: #FFFFFF;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 32px;
`;

export const SkillsContainer = styled.View`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 32px;
`;

export const SkillRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
`;

export const SkillName = styled.Text`
  font-size: 18px;
  color: #FFFFFF;
  font-weight: 500;
`;

export const StarsContainer = styled.View`
  flex-direction: row;
  gap: 5px;
`;
