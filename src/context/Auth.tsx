import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ReactFCProps {
  children: React.ReactNode;
}

interface AuthProps {
  id: string;
  token: string;
  email: string;
  nome: string;
  senha: string;
  saldo: string;
  imgUrl: string;
  data: string;
}

interface AuthContextProps {
  authProps?: AuthProps;
  signIn: (email: string, password: string) => Promise<AuthProps>;
  signOut: () => Promise<void>;
  setAuthProps: React.Dispatch<React.SetStateAction<AuthProps | undefined>>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider: React.FC<ReactFCProps> = ({ children }) => {
  const [authProps, setAuth] = useState<AuthProps>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFromStorage();
  }, []);

  async function loadFromStorage() {
    try {
      const auth = await AsyncStorage.getItem("@AuthProps");
      if (auth) {
        setAuth(JSON.parse(auth) as AuthProps);
      }
    } catch (error) {
      console.error("Erro ao carregar dados do armazenamento:", error);
    } finally {
      setLoading(false);
    }
  }

  async function signIn(email: string, password: string): Promise<AuthProps> {
    try {
      const response = await api.get("/usuarios", {
        params: {
          email: email,
        },
      });

      if (response.data.length > 0) {
        const user = response.data[0];

        if (user.senha === password) {
          const auth: AuthProps = {
            id: user.id,
            token: "fake-jwt-token",
            email: user.email,
            nome: user.nome,
            saldo: user.saldo,
            senha: user.senha,
            imgUrl: user.imgUrl,
            data: user.data,
          };

          await AsyncStorage.setItem("@AuthProps", JSON.stringify(auth));
          setAuth(auth);
          return auth;
        } else {
          throw new Error("Usuário ou senha incorretos");
        }
      } else {
        throw new Error("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw new Error("Erro ao fazer login");
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined);
    await AsyncStorage.removeItem("@AuthProps");
  }

  return (
    <AuthContext.Provider
      value={{ authProps, signIn, signOut, setAuthProps: setAuth, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
