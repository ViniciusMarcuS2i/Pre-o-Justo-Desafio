import styled from "styled-components/native"
import theme from "../../theme"

export const ProfileDetailsButton = styled.TouchableOpacity`
  width: 330px;
  height: 80px;
  border-radius: 24px;
  justify-content: space-between;
  padding: 1px 24px;
  background-color: ${theme.COLORS.WHITE};
  flex-direction: row;
  align-items: center;

`

export const ProfileIcon = styled.Image`
  height: 28px;
  width: 28px;
`

export const NameBox = styled.View`
  flex-direction: row;
  gap: 16px;
`

export const ArrowIcon = styled.Image`
  width: 9px;
  height: 16px;
`

export const ProfileText = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: 18px;
`