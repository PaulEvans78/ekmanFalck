import styled from "styled-components";


export const StyledFrontCard = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    min-width: 0%;
    aspect-ratio: 4 / 3;
    /* background-color: #43cf02; */
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
    width: 40%;
    
    @keyframes slidedown {
  0%   {bottom:-1000px;}
  100% {bottom:0px;}
  }
}

@media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 1em; 
    margin-bottom: 0em;
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
    width: 100%;
    height: 100%;
    /* background-color: #51ff00b8; // #42cf00b8 */

    &:hover{
        opacity: 0;
    }

    @media screen and (max-width: 960px) {
       
    
    }
`;

export const StyledSecondaryImg = styled.img`
    width: 100%;
    position: absolute;
    align-self: center;
    object-fit: cover;
 `; 

export const StyledButton = styled.button`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #01010128;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 2em;
    border: none;
    color: #f8f8f8;
    cursor: pointer;

    @media screen and (max-width: 960px) {
        padding-bottom: 1em;
}
`;

export const StyledHeader = styled.h3`
    display: flex;
    align-self: center;
    margin-top: 2em;
    margin-bottom: 0em;
    margin-left: 1em;
    margin-right: 1em;
    white-space: pre-wrap;
    color: #ffffff;
    font-size: 32px;
    font-weight: 900;

    @media screen and (max-width: 960px) {
        font-size: 28px;
}

    @media screen and (max-width: 767px) {
        /* margin-bottom: 0.5em; */
        font-size: 32px;
}
`;

export const StyledCardp = styled.p`
    display: flex;
    align-self: center;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin-left: 1.75em;
    margin-right: 1em;
    padding-bottom: 1em;
    text-align: left;
    line-height: 0.25em;

    @media screen and (max-width: 960px) {
        font-size: 16px;
}

    @media screen and (max-width: 767px) {
        /* margin-bottom: 1em; */
        font-size: 18px;
        line-height: 0em;
}
`;



