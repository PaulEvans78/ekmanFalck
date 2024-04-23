import styled from "styled-components";

export const StyledButtonCard = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-top: 3em;  */
    /* margin-bottom: 2em; */
    width: 30%;
    /* min-width: 0%; */
    /* aspect-ratio: 4 / 3; */
    /* background-color: #40cf00; */
    /* font-family: 'Poppins'; */
    /* font-size: 1.2rem; */
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

export const StyledButton = styled.button`
    /* position: absolute; */
    /* height: 80px; */
    width: 240px;
    background-color: #40cf00;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.25em;
    padding-top: 0.25em;
    border: 2px solid whitesmoke;
    border-radius: 50px; 
    box-shadow: 3px 3px 12px 6px #d8d8d7; //horizontal vertical blur spread
    /* color: #f8f8f8; */
    cursor: pointer;

    &:hover{
        background-color: #fdfdfd;
        border: 2px solid #40cf00;
    }

    @media screen and (max-width: 960px) {
        padding-bottom: 1em;
}
`;

export const StyledCta = styled.p`
    /* position: absolute; */
    color: #000000;
    font-size: 16px;
    font-weight: 600;
    margin-left: 1em;
    /* margin-right: 2em; */
    /* margin-bottom: 1.5em; */
    text-align: center;
    /* line-height: 0.25em; */

    @media screen and (max-width: 960px) {
        font-size: 16px;
}

    @media screen and (max-width: 400px) {
        margin-bottom: 1em;
}
`;



