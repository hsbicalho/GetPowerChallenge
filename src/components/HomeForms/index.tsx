import React from 'react';
import * as S from './styles';
import HomeLogo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';
export default function HomeForms() {
  return (
    <S.HomeFormsContainer>
        <S.HomeFormsLogo>
            <img src={HomeLogo}></img>
        </S.HomeFormsLogo>
        <S.HomeFormsFrase>Olá! Vamos começar a dimensionar o seu sistema de energia solar.</S.HomeFormsFrase>
        <S.HomeFormsInputText>Qual o valor médio da sua conta de energia?</S.HomeFormsInputText>
        <S.HomeFormsInput placeholder='ex: R$300,00'></S.HomeFormsInput>
        <NavLink to="/simulation1" title="simulation1">
            <S.HomeFormsButton>Avançar</S.HomeFormsButton>
        </NavLink>
        
    </S.HomeFormsContainer>
  )
}
