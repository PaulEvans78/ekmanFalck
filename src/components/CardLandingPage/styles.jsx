import styled from "styled-components";


export const StyledFrontCard = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 3em;  */
    /* margin-bottom: 2em; */
    width: 30%;
    min-width: 0%;
    aspect-ratio: 4 / 3;
    background-color: #40cf00;
    /* font-family: 'Poppins'; */
    font-size: 1.2rem;
    overflow: hidden;
    animation-name: slidedown;
    animation-duration: 3s;
    animation-delay: 0s;

    @keyframes slidedown {
  0%   {top:-1000px;}
  100% {top:0px;}
}

/* &:hover{
        background-color: none;
    } */

@media screen and (max-width: 960px) {
    margin-top: 2em; 
    width: 40%;
    
    @keyframes slidedown {
  0%   {bottom:-1000px;}
  100% {bottom:0px;}
  }
}

@media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 2em; 
    margin-bottom: 0em;
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
   
export const StyledFrontCardImg = styled.img`
    width: 100%;
    position: relative;
    align-self: center;
    object-fit: cover;
    /* opacity: 50%; */

   
 `; 



export const StyledInfoContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #42cf00b8;

    &:hover{
        opacity: 0;
    }
`;

export const StyledButton = styled.button`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #01010128;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 2em;
    border: none;
    color: #f8f8f8;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        padding-bottom: 1em;
}
`;

export const StyledHeader = styled.h3`
    text-align: left;
    margin-top: 2em;
    margin-bottom: 0em;
    margin-left: 1em;
    margin-right: 1em;
    white-space: pre-wrap;
    color: #ffffff;
    font-size: 32px;
    font-weight: 900;
    /* line-height: 1em; */

    @media screen and (max-width: 960px) {
        font-size: 28px;
}

    @media screen and (max-width: 400px) {
        margin-bottom: 0.5em;
}
`;

export const StyledCardp = styled.p`
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin-left: 1.75em;
    margin-right: 1em;
    /* margin-bottom: 1.5em; */
    text-align: left;
    line-height: 0.25em;

    @media screen and (max-width: 960px) {
        font-size: 16px;
}

    @media screen and (max-width: 400px) {
        margin-bottom: 1em;
}
`;



