import { useState } from 'react';
import * as S from './styles';
import FirstLoading from"../../assets/firstLoadingBar.png";
import SecondLoading from"../../assets/secondLoading.png";
import ThirdLoading from"../../assets/thirdLoading.png";
import BigLogo from "../../assets/bigLogo.svg"

export default function HomeForms() {
  return (
    <S.HomeFormsContainer>
      <S.BigLogoContainer><img src={BigLogo}></img></S.BigLogoContainer>
      <S.LoadingBar src={FirstLoading}></S.LoadingBar>
      <S.LoadingBar2 src={SecondLoading}></S.LoadingBar2>
      <S.LoadingBar3 src={ThirdLoading}></S.LoadingBar3>
      
    </S.HomeFormsContainer>
  )
}
