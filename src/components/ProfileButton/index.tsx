import {
  ArrowIcon,
  NameBox,
  ProfileDetailsButton,
  ProfileIcon,
  ProfileText,
} from "./styles";

interface Props {
  imgUrl: () => void;
  text: string;
}

export function ProfileButton({ imgUrl, text }: Props) {
  return (
    <ProfileDetailsButton style={{ elevation: 7 }}>
      <NameBox>
        <ProfileIcon
          // @ts-ignore
          source={imgUrl}
        />
        <ProfileText>{text}</ProfileText>
      </NameBox>
      <ArrowIcon source={require("../../../assets/right-arrow.png")} />
    </ProfileDetailsButton>
  );
}
