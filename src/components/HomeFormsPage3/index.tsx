import { useState } from 'react';
import * as S from './styles';
import FirstLoading from"../../assets/firstLoadingBar.png";
import SecondLoading from"../../assets/secondLoading.png";
import { NavLink } from 'react-router-dom';


export default function HomeForms() {
  return (
    <S.HomeFormsContainer>
      <S.LoadingBar src={FirstLoading}></S.LoadingBar>
      <S.LoadingBar2 src={SecondLoading}></S.LoadingBar2>
      <S.NomeCompleto>Nome completo</S.NomeCompleto>
      <S.NomeCompletoInput></S.NomeCompletoInput>
      <S.Email>E-mail</S.Email>
      <S.EmailInput></S.EmailInput>
      <S.Telefone>Telefone</S.Telefone>
      <S.TelefoneInput></S.TelefoneInput>
      <S.Prazo>Para quando é o sistema?</S.Prazo>
      <S.PrazoInput></S.PrazoInput>
      <NavLink to="/simulation3">
        <S.Page2FormsButton>Gerar Proposta</S.Page2FormsButton>
      </NavLink>
    </S.HomeFormsContainer>
  )
}
