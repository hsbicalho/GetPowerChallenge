import React from "react";
import * as S from "./styles";
import BGroundImage from '../../assets/e5d4df0eaa08ac256abc453a62875f44.png';

export default function DefaultBackground() {
  return (
    <div>
        <S.BackgroundImage src={BGroundImage}></S.BackgroundImage>
        <S.MainPageTitle>Economia e sustentabilidade</S.MainPageTitle>
        <S.MainPageSubTitle>na palma da sua mão</S.MainPageSubTitle>
    </div>
  )
}
