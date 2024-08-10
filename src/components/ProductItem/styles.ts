import styled from "styled-components/native"
import theme from "../../theme"

export const Product = styled.View`
  flex-direction: column;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  min-width: 157px;
  flex: 1;
`

export const ProductImage = styled.Image`
  width: 100%;
  height: 111px;
  margin-bottom: 16px;
  object-fit: cover;
`
export const ProductName = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: 16px;
  margin-bottom: 4px;
  width: 150px;
`

export const ProductQuantity = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: 10px;
  color: ${theme.COLORS.GREY_100};
  margin-bottom: 16px;
`

export const ProductPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Lc = styled.Text`
  color: ${theme.COLORS.PRIMARY_ROXO};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: 12px;
`

export const ProductValue = styled.Text`
  color: ${theme.COLORS.PRIMARY_ROXO};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: 16px;
`
export const CartButton = styled.TouchableOpacity`
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  padding: 8px;
  border-radius: 10px;
`

export const ShoppingCartIcon = styled.Image`
  
  height: 16px;
  width: 16px;
`