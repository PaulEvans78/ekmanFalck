import styled from "styled-components";


export const StyledFrontCard = styled.div`
    /* position: relative;  */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0em 3em 0em 3em;
    padding: 2em 2em 0em 2em;
    /* margin-top: 3em;  */
    /* margin-bottom: 2em; */
    width: 100vw;
    /* height: 200px; */
    /* min-width: 0%; */
    /* aspect-ratio: 4 / 3; */
    /* background-color: #40cf00; */
    /* font-family: 'Poppins'; */
    font-size: 1.2rem;
    overflow: hidden;
    animation-name: slidedown;
    animation-duration: 2s;
    animation-delay: 0s;

    @keyframes slidedown {
  0%   {top:-1000px;}
  100% {top:0px;}
}

/* &:hover{
        background-color: none;
    } */

@media screen and (max-width: 960px) {
    margin: 0em 2em 0em 2em;
    padding: 2em 0em 0em 0em; 
    /* width: 40%; */
    
    @keyframes slidedown {
  0%   {bottom:-1000px;}
  100% {bottom:0px;}
  }
}

@media screen and (max-width: 767px) {
    width: 100%;
    margin: 0em 1em 0em 1em;
    padding: 2em 0em 0em 0em;
}
`;

// export const StyledHoverContainer = styled.div`
// width: 100%;
// position: relative;
// `; 

// export const StyledGreenScreen = styled.div`
// width: 100%;
// position: absolute;
// background-color: #1fc61f62;
// align-self: center;
// object-fit: cover;
// z-index: 20;

/* &:hover{
        visibility: none;
    } */
// `; 
   
// export const StyledFrontCardImg = styled.img`
//     width: 100%;
//     position: relative;
//     align-self: center;
//     object-fit: cover;   
//  `; 



export const StyledInfoContainer = styled.div`
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    /* height: 100%; */
    /* padding-left: 2em;
    padding-right: 2em; */
    /* background-color: #42cf00b8; */

    /* &:hover{
        opacity: 0;
    } */
`;

export const StyledCardp = styled.p`
    /* position: absolute; */
    color: #000000;
    font-size: 24px;
    font-weight: 600;
    /* margin-left: 4em;
    margin-right: 4em; */
    /* margin-bottom: 1.5em; */
    text-align: center;
    /* line-height: 0.25em; */

    @media screen and (max-width: 960px) {
        font-size: 16px;
}

    /* @media screen and (max-width: 400px) {
        margin-bottom: 1em;
} */
`;






export const StyledHeader = styled.h2`
    text-align: center;
    /* margin-top: 2em; */
    margin-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
    white-space: pre-wrap;
    color: #000000;
    font-size: 48px;
    font-weight: 600;
    /* line-height: 1em; */

    @media screen and (max-width: 960px) {
        font-size: 28px;
}

    @media screen and (max-width: 400px) {
        margin-bottom: 0.5em;
}
`;





