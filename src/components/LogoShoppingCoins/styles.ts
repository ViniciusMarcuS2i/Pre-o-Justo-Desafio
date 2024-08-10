import styled from "styled-components/native"
import theme from "../../theme"

interface ContentBoxProps {
  opacity?: number;
}

export const ContentBox = styled.View<ContentBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  opacity: ${({ opacity }) => opacity || 1};
`

export const WalletIcon = styled.Image``

export const Title = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
  font-size: 24px;
  line-height: 30.24px;
  padding: 8px 24px;
  background-color: ${theme.COLORS.GREY_900};
  border-radius: 24px;
`