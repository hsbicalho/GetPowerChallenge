import styled from "styled-components";
export const HomeFormsContainer = styled.div`
position: absolute;
width: 495px;
height: 562px;
left: 888px;
top: 159px;

background: rgba(236, 240, 243, 0.8);
box-shadow: 18px 18px 30px #D1D9E6, -18px -18px 30px #FFFFFF;
border-radius: 10px;
display:flex;
justify-content:center;

`;

export const HomeFormsLogo = styled.div`
  margin-top:20px;
`;

export const HomeFormsInputState = styled.select`

position: absolute;
width: 355px;
height: 50px;
left: 15%;
top: 40%;

background: #CFCFCF;
border-radius: 10px;

`;
export const HomeFormsInputCity = styled.select`
position: absolute;
width: 355px;
height: 50px;
left: 15%;
top: 52%;

background: #CFCFCF;
border-radius: 10px;

`;

export const HomeFormsInputSelect = styled.select`

position: absolute;
width: 355px;
height: 50px;
left: 15%;
top: 70%;

background: #CFCFCF;
border-radius: 10px;

`;

export const LoadingBar = styled.img`

position: absolute;
width: 165px;
height: 8px;
left: 0%;
top: 0%;

`;

export const Teste = styled.option`
::placeholder {
  position:relative;
  left:20px;
  color: #13201B;
}
`;

export const OndeMora = styled.div`

position: absolute;
width: 141px;
height: 17px;
left: 15%;
top: 34%;

font-family: 'Articulat CF';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 95.9%;

color: #13201B;

opacity: 0.8;
z-index:9999;

`
export const Telhado = styled.div`

/* Qual o seu tipo de telhado? */

position: absolute;
width: 214px;
height: 17px;
left: 15%;
top: 64%;

font-family: 'Articulat CF';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 95.9%;
/* or 17px */

color: #13201B;

opacity: 0.8;
z-index:9999;
`
export const Page1FormsButton = styled.button`

position: absolute;
width: 151px;
height: 50px;
left: 55%;
top: 85%;

background: #00DD87;
box-shadow: 0px 15px 50px rgba(0, 221, 135, 0.38);
border-radius: 8px;
border:none;
color: #FFFFFF;
`;
