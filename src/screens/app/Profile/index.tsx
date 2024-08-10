import {
  ButtonBox,
  EditProfileButton,
  EditProfileText,
  LogoutButton,
  LogoutButtonText,
  ProfileBox,
  ProfileContainer,
  ProfileImg,
  ProfileName,
  WhiteContainer,
} from "./styles";
import { ProfileButton } from "../../../components/ProfileButton";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import * as ImagePicker from "expo-image-picker";
import { api } from "../../../lib/axios";
import { TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Profile() {
  const { signOut, authProps, setAuthProps } = useContext(AuthContext);

  const handleChangeProfilePicture = async () => {
    const response = await ImagePicker.launchImageLibraryAsync({
      aspect: [1, 1],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!response.canceled && authProps) {
      const userId = authProps.id;

      try {
        await api.patch(`/usuarios/${userId}`, {
          imgUrl: response.assets[0].uri,
        });

        setAuthProps((prevState) => ({
          ...prevState!,
          imgUrl: response.assets[0].uri,
        }));
        console.log("Imagem atualizada com sucesso!");
      } catch (error) {
        console.error("Erro ao atualizar a imagem:", error);
      }
    }
  };

  return (
    <ProfileContainer>
      <ProfileBox>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ProfileImg
            source={{
              uri: authProps?.imgUrl,
            }}
          />
          <TouchableOpacity
            onPress={handleChangeProfilePicture}
            style={{
              borderRadius: 100,
              backgroundColor: "white",
              paddingVertical: 6,
              paddingHorizontal: 6,
              marginTop: -15,
            }}
          >
            <Ionicons name="camera-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <ProfileName>{authProps?.nome}</ProfileName>
        <EditProfileButton>
          <EditProfileText>Editar Perfil</EditProfileText>
        </EditProfileButton>
      </ProfileBox>
      <WhiteContainer contentContainerStyle={{ alignItems: "center" }}>
        <ButtonBox>
          <ProfileButton
            text="Detalhes do Perfil"
            imgUrl={require("../../../../assets/profileround.png")}
          />
          <ProfileButton
            text="Detalhes da Conta"
            imgUrl={require("../../../../assets/building.png")}
          />
          <ProfileButton
            text="Histórico"
            imgUrl={require("../../../../assets/history.png")}
          />
        </ButtonBox>
        <LogoutButton onPress={signOut}>
          <LogoutButtonText>Sair</LogoutButtonText>
        </LogoutButton>
      </WhiteContainer>
    </ProfileContainer>
  );
}
