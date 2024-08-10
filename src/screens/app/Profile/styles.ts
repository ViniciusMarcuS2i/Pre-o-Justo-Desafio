import styled from "styled-components/native";
import theme from "../../../theme";

export const ProfileContainer = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  flex-direction: column;
`
export const ProfileBox = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  align-items: center;
  gap: 16px;
`

export const ProfileImg = styled.Image`
  width: 96px;
  height: 96px;
  border-radius: 24px;
  border: 4px solid rgba(255, 255, 255, 0.4);
`

export const ProfileName = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: 16px;
  color: ${theme.COLORS.GREY_50};
`
export const EditProfileButton = styled.TouchableOpacity`
  background-color: ${theme.COLORS.GREY_900};
  padding: 11px 24px;
  border-radius: 24px;
`

export const EditProfileText = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  color: ${theme.COLORS.GREY_50};
  line-height: 17.64px;
`

export const WhiteContainer = styled.ScrollView`
  flex: 1;
  background-color: ${theme.COLORS.GREY_50};
  margin-top: 32px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`
export const ButtonBox = styled.View`
  margin-top: 32px;
  gap: 24px;
`

export const LogoutButton = styled.TouchableOpacity`
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  padding: 8px 24px;
  border-radius: 24px;
  margin-top: 55px;
  margin-bottom: 20px;
`

export const LogoutButtonText = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
  font-size: 16px;
  line-height: 20.16px;
`