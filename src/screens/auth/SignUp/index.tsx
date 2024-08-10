import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Entrar,
  ErrorMessage,
  FormContainer,
  Input,
  LoginButton,
  LoginContainer,
  LoginText,
  SignUpContainer,
} from "./styles";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { api } from "../../../lib/axios";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const signUpSchema = z.object({
  nome: z.string().min(1, "Digite seu nome"),
  email: z.string().email("Digite um email válido").min(1, "Digite um email"),
  senha: z.string().min(8, "No mínimo oito dígitos"),
  confirmar: z.string().min(1, "Confirme a senha"),
}).refine(data => data.senha === data.confirmar, {
  message: "As senhas devem ser iguais",
  path: ["confirmar"],
});

interface FormValues {
  nome: string;
  email: string;
  senha: string;
  confirmar: string;
  saldo: string;
  imgUrl: string;
  data: string;
}

export function SignUp() {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmitHandler: SubmitHandler<FormValues> = async ({nome, email, senha, imgUrl, data, saldo}) => {
    const response = await api.post("/usuarios", {
      nome,
      email,
      senha,
      imgUrl: imgUrl ?? "",
      data: new Date().toISOString(),
      saldo: saldo ?? ""
    })
    response
    reset();
    Alert.alert("Cadastro concluido!")
    navigation.navigate("sign-in" as never)
  };

  const navigation = useNavigation()

  return (
    <SignUpContainer>
      <LoginContainer>
        <FormContainer>
          <LoginText>Cadastro</LoginText>
          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  style={{ elevation: 6 }}
                />
                {errors.nome && (
                  <ErrorMessage>{errors.nome.message}</ErrorMessage>
                )}
              </>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="Email"
                  onChangeText={onChange}
                  value={value}
                  style={{ elevation: 6 }}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="senha"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="Senha"
                  onChangeText={onChange}
                  value={value}
                  style={{ elevation: 6 }}
                />
                {errors.email && (
                  <ErrorMessage>{errors.senha?.message}</ErrorMessage>
                )}
              </>
            )}
          />
          <Controller
            control={control}
            name="confirmar"
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder="Confirmar Senha"
                  onChangeText={onChange}
                  value={value}
                  style={{ elevation: 6 }}
                />
                {errors.email && (
                  <ErrorMessage>{errors.confirmar?.message}</ErrorMessage>
                )}
              </>
            )}
          />
        </FormContainer>
        <LoginButton onPress={handleSubmit(onSubmitHandler)}>
          <Entrar>Criar conta</Entrar>
        </LoginButton>
      </LoginContainer>
    </SignUpContainer>
  );
}
