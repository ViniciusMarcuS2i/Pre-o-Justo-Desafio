import { Sora_400Regular, Sora_600SemiBold } from "@expo-google-fonts/sora";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SplashScreen } from "./src/screens/SplashScreen";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/index";
import { Routes } from "./src/routes/Routes";
import { AuthProvider } from "./src/context/Auth";
import Toast from 'react-native-toast-message'

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_400Regular,
    Sora_600SemiBold,
  });

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar style="light" />
        {fontsLoaded ? <Routes /> : <SplashScreen />}
      </AuthProvider>
      <Toast />
    </ThemeProvider>
  );
}
