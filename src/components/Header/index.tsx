import {} from "react"
import * as S from "./styles";
import logo from "../../assets/logo-header.svg"

export default function Header() {
  return (
    <S.HeaderHomeContainer>
        <S.LogoContainer><img src={logo} alt="" /></S.LogoContainer>
        <S.GetPowerName>getpower</S.GetPowerName>
        <S.Options href="https://getpowersolar.com.br/energia-solar/" target="_blank">Energia Solar +</S.Options>
        <S.Options2 href="https://getpowersolar.com.br/energia-solar/" target="_blank">Sobre</S.Options2>
        <S.Options3 href="https://getpowersolar.com.br/energia-solar/" target="_blank">Soluções</S.Options3>
        <S.Options4 href="https://getpowersolar.com.br/blog/" target="_blank">Blog</S.Options4>
        <S.Options5 href="https://getpowersolar.com.br/franquia-getpower/lp3/" target="_blank"></S.Options5>
        <S.SejaFranqueado href="https://getpowersolar.com.br/franquia-getpower/lp3/" target="_blank">Seja um franqueado</S.SejaFranqueado>
        <S.Options6 href="https://getpowersolar.com.br/orcamento-energia-solar/" target="_blank"></S.Options6>
        <S.Simulação href="https://getpowersolar.com.br/orcamento-energia-solar/" target="_blank">Simulação</S.Simulação>
    </S.HeaderHomeContainer>
  );
}
//https://getpowersolar.com.br/franquia-getpower/lp3/