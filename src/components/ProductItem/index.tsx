import { View } from "react-native";
import {
  CartButton,
  Lc,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductValue,
  ShoppingCartIcon,
} from "./styles";
import { currencyFormatter } from "../../helpers/currency-formatter";
import Toast from "react-native-toast-message";
import { useState } from "react";

export interface ProductsProps {
  nome: string;
  ImgUrl: string;
  quantidade: number;
  preco: string;
}

interface ProductItemProps {
  product: ProductsProps;
}

export function ProductItem({ product }: ProductItemProps) {
  const [disabled, setDisabled] = useState(false)

  const handleBuyItem = () => {
    setDisabled(!disabled)
    Toast.show({
      type: "success",
      text1: `O ${product.nome} está à caminho!`,
      text2: "🎉 Parabéns, sua compra foi confirmada!",
      position: "bottom",
    });
  };

  return (
    <Product
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
      }}
    >
      <ProductImage source={{ uri: product.ImgUrl }} resizeMode="contain" />
      <ProductName numberOfLines={1}>{product.nome}</ProductName>
      <ProductQuantity>{product.quantidade} unidades</ProductQuantity>
      <ProductPrice>
        <View>
          <Lc>Lc</Lc>
          <ProductValue>
            {currencyFormatter(Number(product.preco))}
          </ProductValue>
        </View>
        <CartButton disabled={disabled} onPress={handleBuyItem} style={disabled && {opacity: 0.5}}>
          <ShoppingCartIcon
            source={require("../../../assets/shopping-cart.png")}
          />
        </CartButton>
      </ProductPrice>
    </Product>
  );
}
