import React from 'react';
import styled from "styled-components";
import Contents from '../components/ProductionService/contents/Contents';
import Digest from '../components/ProductionDigest/digest/Digest';
import ProductionText from '../components/ProductionText/productionText/ProductionText';

const StyledProductionServiceContainer = styled.div`
max-width: 100vw;
display: flex;
grid-area: main;
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


const ProductionService = () => {

  return (
    
     <StyledProductionServiceContainer >
        <Digest />
        <Contents />
        <ProductionText />

    </StyledProductionServiceContainer >
  
  );
}


export default ProductionService;
