import { ProductItem, type ProductsProps } from "../ProductItem";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { ProductsContainer } from "./styles";
import { api } from "../../lib/axios";

interface ProductListProps {
  numberOfItems?: number | undefined;
}

export function ProductList({ numberOfItems }: ProductListProps) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  async function getProducts() {
    try {
      const response = await api.get("/produtos");
      const products = response.data;
      setProducts(products);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProductsContainer>
        {products.slice(0, numberOfItems).map((product) => {
          return <ProductItem key={product.nome} product={product} />;
        })}
      </ProductsContainer>
    </ScrollView>
  );
}
