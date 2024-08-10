import { useContext, useState } from "react";
import { LogoShoppingCoins } from "../../../components/LogoShoppingCoins";
import {
  Entrar,
  FormContainer,
  Input,
  LoginButton,
  LoginContainer,
  LoginText,
  SignInContainer,
  SignUp,
} from "./styles";
import { AuthContext } from "../../../context/Auth";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function SignIn() {
  const navigation = useNavigation();

  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const authData = await signIn(email, password);
      if (authData) {
        navigation.navigate("home" as never);
      }
    } catch (error) {
      setError("Usuário ou senha incorretos");
    }
  };

  return (
    <SignInContainer>
      <LogoShoppingCoins opacity={0.5} />
      <LoginContainer>
        <FormContainer>
          <LoginText>Login</LoginText>
          <Input
            style={{ elevation: 6 }}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            secureTextEntry
            style={{ elevation: 6 }}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
          />
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
        </FormContainer>
        <LoginButton onPress={handleLogin}>
          <Entrar>Entrar</Entrar>
        </LoginButton>
        <SignUp onPress={() => navigation.navigate("sign-up" as never)}>
          Registrar
        </SignUp>
      </LoginContainer>
    </SignInContainer>
  );
}
