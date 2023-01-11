import { useState } from 'react';
import * as S from './styles';
import HomeLogo from '../../assets/logo.svg'
import FirstLoading from"../../assets/firstLoadingBar.png";
import { NavLink } from 'react-router-dom';

const States = ['Estado', 'AC', 'AL', 'AP',
'AM', 'BA', 'CE', 'DF','ES', 'GO', 'MA',' MT',
'MS', 'MG', 'PA','PB', 'PR', 'PE', 'PI', 'RJ',
'RN', 'RS', 'RO', 'RR','SC', 'SP', 'SE', 'TO' ]

export default function HomeForms() {
  const [cities, setCities] = useState([]);

  const renderCities = async  (state: any) => {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`);
 }
  return (
    <S.HomeFormsContainer>
      <S.LoadingBar src={FirstLoading}></S.LoadingBar>
        <S.HomeFormsLogo>
            <img src={HomeLogo}></img>
        </S.HomeFormsLogo>
        <S.OndeMora>Onde você mora?</S.OndeMora>
        <S.HomeFormsInputState name="State" onChange={ e => renderCities(e.target.value)}>
          {States.map((state, index) => <S.Teste key={index}>{state}</S.Teste>)}
        </S.HomeFormsInputState >
        <S.HomeFormsInputCity placeholder='Cidade' title='Cidade'>
          <option>Cidade</option>
          <option>opção2</option>
          <option>opção3</option>
          <option>opção4</option>
          <option>opção5</option>
          <option>opção6</option>
        </S.HomeFormsInputCity>
        <S.Telhado>Qual o tipo de telhado</S.Telhado>
        <S.HomeFormsInputSelect placeholder='Selecione' title='Selecione'>
          <option>Selecione</option>
          <option>opção2</option>
          <option>opção3</option>
          <option>opção4</option>
          <option>opção5</option>
          <option>opção6</option>
        </S.HomeFormsInputSelect>
        <NavLink to="/simulation2">
        <S.Page1FormsButton>Avançar</S.Page1FormsButton>
        </NavLink>
    </S.HomeFormsContainer>
  )
}
