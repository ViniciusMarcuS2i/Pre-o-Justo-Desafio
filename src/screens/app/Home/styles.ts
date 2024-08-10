import styled from "styled-components/native";
import theme from "../../../theme";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  flex-direction: column;
`

export const ProfileInfo = styled.View`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  flex-direction: column;
  margin-left: 32px;
  margin-right: 32px;
  gap: 16px;
`

export const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
`

export const LogoName = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 3px 8px;
  background-color: ${theme.COLORS.GREY_900};
  color: ${theme.COLORS.WHITE};
  border-radius: 24px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`

export const BellIcon = styled.Image`
  width: 24.32px;
  height: 24px;
`

export const OlaNome = styled.Text`
  font-size: 14px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};

`

export const SaldoContainer = styled.View`
  margin-top: 24px;
  margin-left: 24px;
  margin-right: 24px;
  height: 62px;
  background-color: ${theme.COLORS.WHITE};
  border-radius: 16px;
  display: flex;
  padding: 1px 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  z-index: 2;
`
export const WalletIcon = styled.Image`
  width: 24px;
  height: 20px;
`

export const Saldo = styled.Text`
  font-size: 16px;
  line-height: 20.16px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`

export const BagIcon = styled.Image`
    width: 24px;
    height: 20px;
`

export const Shop = styled.Text`
  font-size: 16px;
  line-height: 20.16px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
`

export const WhiteContainer = styled.ScrollView`
  flex: 1;
  background-color: ${theme.COLORS.GREY_50};
  margin-top: -30px;
  border-top-right-radius:24px ;
  border-top-left-radius:24px ;
  padding-top: 71px;
`

export const BannerContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  padding: 0 24px;
`

export const BannerContent = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 300px;
  height: 95px;
  border-radius: 16px;
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  gap: 18px;
  margin-bottom: 40px;
  padding: 0 25px;
`

export const BannerImage = styled.Image`
  width: 111px;
  height: 91px;
`

export const PackageContainer = styled.View`
  gap: 4px;
`

export const PackageName = styled.Text`
  font-size: 12px;
  color: ${theme.COLORS.WHITE};
`
export const TextHighlight = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
`

export const Packagelocation = styled.Text`
   font-size: 12px;
   color: ${theme.COLORS.WHITE};
`

export const PackagePrice= styled.Text`
  font-size: 10px;
  color: ${theme.COLORS.WHITE};
`

export const TextPriceHighlight = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: 28px;
`

export const ProductsBox = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: space-between;

  border-radius: 16px;
`

export const Product = styled.View`
  flex-direction: column;
  background-color: ${theme.COLORS.WHITE};
  width: 157px;
  border-radius: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
`

export const ProductImage = styled.Image`
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: 16px;
`
export const ProductName = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: 16px;
  margin-bottom: 4px;
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

export const SeeAll = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  border-radius: 24px;
  font-size: 16px;
  background-color: ${theme.COLORS.PRIMARY_ROXO};
  line-height: 20.16px;
  margin-top: 32px;
  color: ${theme.COLORS.WHITE};
  margin-bottom: 16px;
  padding: 8px 24px;
  align-self: center;
  height: 40px;
`
