import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  BagIcon,
  BannerContainer,
  BannerContent,
  BannerImage,
  BellIcon,
  HomeContainer,
  LogoName,
  OlaNome,
  PackageContainer,
  Packagelocation,
  PackageName,
  PackagePrice,
  ProfileImg,
  ProfileInfo,
  Saldo,
  SaldoContainer,
  SeeAll,
  Shop,
  TextHighlight,
  TextPriceHighlight,
  WalletIcon,
  WhiteContainer,
} from "./styles";
import { ProductList } from "../../../components/ProductList";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import { currencyFormatter } from "../../../helpers/currency-formatter";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigate = useNavigation();

  const { authProps } = useContext(AuthContext);

  return (
    <HomeContainer>
      <ProfileInfo>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigate.navigate("profile" as never)}
          >
            <ProfileImg
              source={{
                uri: authProps?.imgUrl,
              }}
            />
          </TouchableOpacity>
          <LogoName>Shopping Coins</LogoName>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <OlaNome>Olá, {authProps?.nome || "Usuário"}</OlaNome>
          <BellIcon source={require("../../../../assets/Notification.png")} />
        </View>
      </ProfileInfo>
      <SaldoContainer style={{ elevation: 8 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          <WalletIcon source={require("../../../../assets/wallet.png")} />
          <Saldo>{currencyFormatter(Number(authProps?.saldo || "0.00"))}</Saldo>
        </View>
        <TouchableOpacity
          onPress={() => navigate.navigate("shop" as never)}
          style={{ display: "flex", flexDirection: "row", gap: 8 }}
        >
          <BagIcon source={require("../../../../assets/shopping-bag.png")} />
          <Shop>Shop</Shop>
        </TouchableOpacity>
      </SaldoContainer>
      <WhiteContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
        >
          <BannerContainer>
            <BannerContent>
              <BannerImage source={require("../../../../assets/imagem.png")} />
              <PackageContainer>
                <PackageName>
                  Pacote <TextHighlight>ACAPULCO</TextHighlight>
                </PackageName>
                <Packagelocation>Guerrero - México</Packagelocation>
                <PackagePrice>
                  Lc<TextPriceHighlight>50.000</TextPriceHighlight>
                </PackagePrice>
              </PackageContainer>
            </BannerContent>

            <BannerContent>
              <BannerImage source={require("../../../../assets/imagem.png")} />
              <PackageContainer>
                <PackageName>
                  Pacote <TextHighlight>ACAPULCO</TextHighlight>
                </PackageName>
                <Packagelocation>Guerrero - México</Packagelocation>
                <PackagePrice>
                  Lc<TextPriceHighlight>50.000</TextPriceHighlight>
                </PackagePrice>
              </PackageContainer>
            </BannerContent>
          </BannerContainer>
        </ScrollView>

        <ProductList numberOfItems={2} />

        <TouchableOpacity style={{ marginBottom: 70 }}>
          <SeeAll onPress={() => navigate.navigate("shop" as never)}>
            Ver todos os produtos
          </SeeAll>
        </TouchableOpacity>
      </WhiteContainer>
    </HomeContainer>
  );
}
