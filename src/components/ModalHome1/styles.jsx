import styled from "styled-components";


export const StyledModal = styled.div`
    position: fixed; 
    /* top:0; */
    display: flex;
    /* visibility: hidden; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #272727;
    font-size: 1.2rem;
    overflow: hidden;
    z-index: 100;
    margin: 0;
   
    /* scroll-behavior: none; */
   

    /* @keyframes slideright {
  0%   {left:-1500px;}
  100% {left:0px;}
} */

/* &:hover{
        background-color: none;
    } */

@media screen and (max-width: 960px) {
    /* margin-top: 2em;  */
    
    
    @keyframes slidedown {
  0%   {bottom:-1000px;}
  100% {bottom:0px;}
  }
}

@media screen and (max-width: 767px) {
    /* width: 100%; */
    /* margin-top: 2em; 
    margin-bottom: 0em; */
}
`;

export const StyledVideoContainer = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    /* background-color: green; */
    /* position: absolute; */
    /* display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 80%; */
    /* height: 100%; */

`;

export const StyledCloseModal = styled.p`
    position: absolute;
    display: flex;
    align-self: flex-end;
    /* width: 40px; */
    /* top: 100px; */
    z-index: 100;
    right: 10px;
    padding: 0.25em 0.25em;
    margin-right: 1em;
    /* margin-block-start: 0; */
    /* margin-top: 2em; */
    border-radius: 50px;
    background-color: #212020;
    color: whitesmoke;
    font-size: 18;
    font-weight: 600;
    cursor: pointer;
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
   
export const StyledFrontCardImg = styled.video`
    width: 100%;
    position: relative;
    align-self: center;
    object-fit: cover;
    /* opacity: 50%; */

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



export const StyledInfoContainer = styled.div`
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* row-gap: -1em; */
    width: 80%;
    padding: 1em;
    /* height: 100%; */

`;

// export const StyledButton = styled.button`
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     background-color: #01010128;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     padding-bottom: 2em;
//     border: none;
//     color: #f8f8f8;
//     cursor: pointer;

//     @media screen and (max-width: 960px) {
//         padding-bottom: 1em;
// }
// `;

// export const StyledHeader = styled.h3`
//     text-align: left;
//     margin-top: 1em;
//     margin-bottom: 0em;
//     margin-right: 1em;
//     white-space: pre-wrap;
//     color: #ffffff;
//     font-size: 32px;
//     font-weight: 900;

//     @media screen and (max-width: 960px) {
//         font-size: 28px;
// }

//     @media screen and (max-width: 400px) {
//         margin-bottom: 0.5em;
// }
// `;

export const StyledCardp = styled.p`
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    /* margin-left: 1.75em; */
    margin-right: 1em;
    margin-top: 0;
    margin-bottom: 0em;
    text-align: left;
    /* line-height: 0.25em; */

    @media screen and (max-width: 960px) {
        font-size: 16px;
}

    @media screen and (max-width: 400px) {
        margin-bottom: 1em;
}
`;

// export const StyledBtnModal = styled.p`
//     padding: 10px 20px;
//     display: block;
//     margin: 100px auto 0;
//     font-size: 18px;
// `;






// export const StyledHamburger = styled.div`
//         /* display: none; */

//     @media screen and (max-width: 960px) {
//         display: flex;
//         justify-content: center;
//         margin-top: 2em;
//         margin-right: 6em;
// }

//     @media screen and (max-width: 767px) {
//         display: flex;
//         justify-content: center;
//         margin-top: 1em;
//         margin-right: 2em;
// }
// `;

