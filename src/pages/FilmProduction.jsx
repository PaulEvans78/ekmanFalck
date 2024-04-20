import React from 'react';
import styled from "styled-components";
import Contents from '../components/FilmProductionCards/contents/Contents';
import Digest from '../components/FilmDigest/digest/Digest';
import ButtonPrimary from '../components/ButtonPrimary/buttonprimary/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSeconday/buttonsecondary/ButtonSecondary';

const StyledFilmProductionContainer = styled.div`
grid-area: main;
max-width: 100vw;
display: flex;
flex-direction: row;
justify-items: center;
justify-content: center;
gap: 0.5em;
flex-wrap: wrap;
padding-top: 1.25em;
padding-bottom: 4em;
  /* grid-area: main;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 12em;*/
  /* background-color: green;  */

  @media screen and (max-width: 767px) {
    gap: 0em;
    padding-top: 0em;
    padding-bottom: 3em;
  }
`;

const StyledButtonContainer = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* column-gap: 0.25em; */
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "phone mail"; */
  width: 100%;
  height: 100px;
  margin-bottom: 3em;
  /* padding-left: 12em;
  padding-right: 12em; */
  /* justify-items: center; */
  /* background-color: red; */
`;

const FilmProduction = () => {

  return (
    
     <StyledFilmProductionContainer >

        <Digest />

        <StyledButtonContainer>
        <ButtonPrimary />
        <ButtonSecondary />
        </StyledButtonContainer>

        <Contents />

       

    </StyledFilmProductionContainer >
  
  );
}


export default FilmProduction;
