import styled from "styled-components/native";
import theme from "../../../theme";

export const SignInContainer = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  display: flex;
  flex-direction: column;
  padding-top: 92px;
`

export const LoginContainer = styled.View`
  margin-top: 48px;
  height: 100%;
  width: 100%;
  background-color: ${theme.COLORS.GREY_50};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  align-items: center;
  padding: 32px 24px 0 24px;
`
export const FormContainer = styled.View`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const LoginText = styled.Text`
  font-size: 24px;
  line-height: 30.24px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`

export const Input = styled.TextInput`
  width: 328px;
  height: 80px;
  border-radius: 24px;
  background-color: ${theme.COLORS.WHITE};
  padding: 28px 22px 28px 24px;
  font-size: 18px;
  font-weight: 600;
`

export const LoginButton = styled.TouchableOpacity`

  height: 48px;
  border-radius: 24px;
  padding: 8px 24px;
  margin-top: 32px;
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;

`

export const Entrar = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
  line-height: 22.68px;
  font-size: 18px;
`

export const SignUp = styled.Text`
  font-size: 10px;
  line-height: 12.6px;
  color: ${theme.COLORS.GREY_100};
  font-family: ${theme.FONT_FAMILY.REGULAR};
`