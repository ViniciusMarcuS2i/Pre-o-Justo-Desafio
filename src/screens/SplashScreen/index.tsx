import { LogoShoppingCoins } from "../../components/LogoShoppingCoins";
import { ImageBackground, SplashContainer } from "./styles";

export function SplashScreen() {
  return (
    <SplashContainer>
      <ImageBackground
        source={require("../../../assets/splash-bg.png")}
        resizeMode="cover"
      >
        <LogoShoppingCoins opacity={1} />
      </ImageBackground>
    </SplashContainer>
  );
}
