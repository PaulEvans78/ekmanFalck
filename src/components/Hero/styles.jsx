import styled from "styled-components";
// import { GoArrowDownRight } from "react-icons/go";


export const StyledFrontCard = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 0%;
    aspect-ratio: 16 / 9;
    font-size: 1.2rem;
    overflow: hidden;
    animation-name: slidedown;
    animation-duration: 1s;
    animation-delay: 0s;

    @keyframes slidedown {
  0%   {top:-1000px;}
  100% {top:0px;}
}


@media screen and (max-width: 960px) {
    /* margin-top: 2em;  */
    /* width: 40%; */
    
    @keyframes slidedown {
  0%   {bottom:-1000px;}
  100% {bottom:0px;}
  }
}

@media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 1em; 
    margin-bottom: 0em;
    aspect-ratio: 3 / 4;
}
`;

   
export const StyledFrontCardImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    position: relative;
    align-self: center;
    object-fit: cover;
 `; 



export const StyledInfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: 100%;

    /* &:hover{
        @media screen and (min-width: 961px) {
        opacity: 0;
    }
} */

    /* @media screen and (max-width: 960px) {
       
    
    } */
`;

// export const StyledSecondaryImg = styled.img`
//     width: 100%;
//     position: absolute;
//     align-self: center;
//     object-fit: cover;
//  `; 

export const StyledButton = styled.button`
    position: absolute;
    height: 100%;
    width: 100%;
    padding-left: 4em;
    background-color: #01010128;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding-bottom: 2em; */
    border: none;
    /* color: #f8f8f8; */
    /* cursor: pointer; */


    @media screen and (max-width: 960px) {
        padding-bottom: 1em;
}

@media screen and (max-width: 767px) {
    padding-left: 2em;
}
`;

export const StyledHeaderContainer = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;

`;

export const StyledHeader = styled.h3`
    display: flex;
    align-self: flex-start;
    margin-top: 0em;
    margin-bottom: 0em;
    /* margin-left: 1em; */
    margin-right: 1em;
    white-space: pre-wrap;
    color: #ffffff;
    font-size: 65px;
    font-weight: 700;
    font-style: normal;
    text-align: left;

    @media screen and (max-width: 960px) {
        font-size: 56px;
}

    @media screen and (max-width: 767px) {
        /* margin-bottom: 0.5em; */
        font-size: 62px;
}

@media screen and (max-width: 575px) {
        /* margin-bottom: 0.5em; */
        font-size: 56px;
}

@media screen and (max-width: 420px) {
        /* margin-bottom: 0.5em; */
        font-size: 32px;
}
`;

export const StyledCardp = styled.p`
    display: flex;
    align-self: flex-start;
    color: #ffffff;
    font-size: 24px;
    font-weight: 500;
    font-style: italic;
    /* margin-left: 1.75em; */
    margin-right: 1em;
    padding-bottom: 1em;
    text-align: left;
    line-height: 0.25em;

    @media screen and (max-width: 960px) {
        font-size: 20px;
}

    @media screen and (max-width: 767px) {
        /* margin-bottom: 1em; */
        font-size: 24px;
        line-height: 0em;
}

@media screen and (max-width: 575px) {
        /* margin-bottom: 0.5em; */
        font-size: 20px;
}

@media screen and (max-width: 420px) {
        /* margin-bottom: 0.5em; */
        font-size: 16px;
}
`;

// export const StyledIcon = styled.a`

// `;



