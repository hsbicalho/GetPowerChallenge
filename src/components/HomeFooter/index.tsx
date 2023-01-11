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
    </S.FooterContainer>
  )
}

