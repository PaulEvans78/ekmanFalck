import React, { useState} from 'react';
import styled from "styled-components";
import Contents from '../components/CardLandingPage/contents';
// import PlayerModal from '../components/PlayerModal/player/Player';


const StyledHomeContainer = styled.div`
grid-area: main;
max-width: 100vw;
display: flex;
flex-direction: row;
justify-items: center;
justify-content: center;
gap: 0.5em;
flex-wrap: wrap;
padding-top: 2em;
padding-bottom: 4em;

  @media screen and (max-width: 767px) {
    gap: 0em;
    padding-top: 0em;
    padding-bottom: 3em;
  }
`;


const Home = () => {


  return (
    
     <StyledHomeContainer>

        <Contents/>

        {/* <PlayerModal/> */}

    </StyledHomeContainer>
  
  );
}


export default Home;
