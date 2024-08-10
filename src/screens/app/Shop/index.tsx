import { TouchableOpacity } from "react-native";
import {
  LeftArrowIcon,
  ShopContainer,
  ShopText,
  Voltar,
  VoltarText,
  WhiteContainer,
} from "./styles";
import { ProductList } from "../../../components/ProductList";
import { useNavigation } from "@react-navigation/native";

export function Shop() {
  const navigate = useNavigation();

  return (
    <ShopContainer>
      <TouchableOpacity onPress={() => navigate.navigate("home" as never)}>
        <Voltar>
          <LeftArrowIcon
            source={require("../../../../assets/Arrow---Left-Square.png")}
          />
          <VoltarText>Voltar</VoltarText>
        </Voltar>
      </TouchableOpacity>
      <WhiteContainer>
        <ShopText>Shop</ShopText>
        <ProductList />
      </WhiteContainer>
    </ShopContainer>
  );
}
