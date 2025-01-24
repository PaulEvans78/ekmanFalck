import React from 'react';
import styled from "styled-components";
import Film from '../assets/film1.mp4';
import { MdOutlineClear } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';


const StyledMainContainer = styled.div`
    position: fixed; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #0a0a0a;
    font-size: 1.2rem;
    overflow: hidden;
    z-index: 100;
    margin: 0;
    padding-top: 1em;
   

@media screen and (max-width: 960px) {
   
}

@media screen and (max-width: 767px) {
   
}
`;

const StyledVideoContainer = styled.div`
    position: relative;
    width: 85%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 960px) {
        width: 100%;
}
`;

const StyledCloseModalButton = styled.p`
    position: absolute;
    display: flex;
    align-self: flex-end;
    z-index: 100;
    right: 10px;
    padding: 0.25em 0.25em;
    margin-right: 1em;
    border-radius: 50px;
    background-color: #212020;
    color: whitesmoke;
    font-size: 18;
    font-weight: 600;
    cursor: pointer;
`;


   
const StyledFrontCardImg = styled.video`
    width: 100%;
    position: relative;
    align-self: center;
    object-fit: cover;

    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
   
 `; 



const StyledInfoContainer = styled.div`
  
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 85%;
    padding: 1em 1em 1em 1em;

    @media screen and (max-width: 969px) {
        width: 100%;
}

@media screen and (max-width: 575px) {
    flex-direction: column;
}

`;


const StyledCardp = styled.p`
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    margin-right: 1em;
    margin-top: 0;
    margin-bottom: 0em;
    text-align: left;

    @media screen and (max-width: 960px) {
        
        padding-left: 1em;
}


`;




function FilmOne() {


return (
  
  <StyledMainContainer>

          <StyledVideoContainer>
          
          <Link to="/">
          <StyledCloseModalButton>
                  <IconContext.Provider value={{ size: "1em", className: "global-class-name" }}>
                  <MdOutlineClear/>
                  </IconContext.Provider>
          </StyledCloseModalButton>
          </Link>
         
          <StyledFrontCardImg controls autostart autoPlay src={Film} type="film1/.mp4" />
         
              
          </StyledVideoContainer>

                  <StyledInfoContainer>
                      
                  <StyledCardp>Grandisoa - Hempizza</StyledCardp>
                  <StyledCardp>Director: Fredrik Falck</StyledCardp>
                  <StyledCardp>Agency: xxxxx</StyledCardp>

                  </StyledInfoContainer>

                 

      </StyledMainContainer>
  
  );
}

export default FilmOne;