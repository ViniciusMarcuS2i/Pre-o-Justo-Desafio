import styled from "styled-components/native";
import theme from "../../../theme";
import { FlatList } from "react-native";

export const ShopContainer = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  flex-direction: column;

`

export const Voltar = styled.View`
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
  gap: 8;
`

export const LeftArrowIcon = styled.Image`

`

export const VoltarText = styled.Text`
  font-size: 12px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
`

export const WhiteContainer = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GREY_50};
  margin-top: 16px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;

`

export const ShopText = styled.Text`
  font-size: 24px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.GREY_900};
  margin-left: 32px;
  margin-top: 24px;
`

export const ScrollView = styled.ScrollView`
  width: 100%;
`

export const ProductsBox = styled(FlatList)`

  margin: 16px 24px 40px;
  gap: 16px;
`
