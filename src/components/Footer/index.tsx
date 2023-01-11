import React from 'react'
import * as S from './styles';
import GPfooter from '../../assets/getpower-footer.svg'
import youtubeLogo from '../../assets/youtube-logo.svg'
import linkedinLogo from '../../assets/linkedin-logo.svg'
import facebookLogo from '../../assets/facebook-logo.svg'
import instagramLogo from '../../assets/instagram-logo.svg'

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.GetPowerFooter src={GPfooter}></S.GetPowerFooter>
      <S.YoutubeLogo src={youtubeLogo}></S.YoutubeLogo>
      <S.LinkedinLogo src={linkedinLogo}></S.LinkedinLogo>
      <S.FacebookLogo src={facebookLogo}></S.FacebookLogo>
      <S.InstagramLogo src={instagramLogo}></S.InstagramLogo>
      <S.FooterBackground></S.FooterBackground>
      <S.LineBar></S.LineBar>
      <S.EndFraseContainer>
      <S.EndFooterFrase1>Acelerada pela</S.EndFooterFrase1>
      <S.EndFooterFrase2>Turbo Partners</S.EndFooterFrase2>
      </S.EndFraseContainer>
      <S.ContainerFooterSobre>
        <h2>Sobre a GetPower</h2>
        <p>Conheça a GetPower</p>
        <p>Trabalhe Conosco</p>
        <p>Politica de Privacidade</p>
      </S.ContainerFooterSobre>
      <S.ContainerFooterMateriais>
        <h2>Materiais</h2>
        <p>Academia do sol</p>
        <p>Top 10 painéis Solares</p>
        <p>Top 10 painéis Solares</p>
        <p>Top 10 painéis Solares</p>
      </S.ContainerFooterMateriais>
      <S.ContainerFooterProdutos>
        <h2>Produtos</h2>
        <p>Energia Solar</p>
        <p>Franquias</p>
      </S.ContainerFooterProdutos>
      <S.ContainerFooterFaleConosco>
      <h2>Fale Conosco</h2>
      <p>Contato</p>
      <p>Faça sua simulação</p>
      </S.ContainerFooterFaleConosco>
      <S.ContainerFooterReconhecimento>
        <h2>Reconhecimento</h2>
        <p>Conhecça a GetPower</p>
        <p>Trabalhe Conosco</p>
        <p>Política de Privacidade</p>
      </S.ContainerFooterReconhecimento>
    </S.FooterContainer>
  )
}

