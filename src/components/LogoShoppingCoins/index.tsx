import { ContentBox, Title, WalletIcon } from "./styles";

interface ContentBoxProps {
  opacity: number;
}

export function LogoShoppingCoins({ opacity }: ContentBoxProps) {
  return (
    <ContentBox opacity={opacity}>
      <WalletIcon source={require("../../../assets/white-wallet.png")} />
      <Title>Shopping Coins</Title>
    </ContentBox>
  );
}
