import React from "react";
import styled from "styled-components";
import logo from '../assets/logoVectorDark.avif';

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-self: center;
  background-color: whitesmoke;
  width: 100%;
  max-width: 100%;
  /* min-height: 100%; */
  /* height: 160px; */
  z-index: 50;
  bottom: 0;
  font-size: 14px;
  line-height: 24px;
  color: whitesmoke;
  margin-bottom: 0;

  @media screen and (max-width: 960px) {
    /* height: 200px; */
    padding-left: 0em;
    padding-right: 0em;
  }
  
  @media screen and (max-width: 767px) {
    /* height: 450px; */
  }
`;

const StyledContentsContainer = styled.div`
    width: 100%;
    /* height: 160px; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas:
    "logo countries contact";
    align-self: center;
    /* background-color: #40cf00; */

    @media screen and (max-width: 960px) {
  
  }
  
    @media screen and (max-width: 767px) {
    width: 100%;
    height: 500px;
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr); 
    grid-template-areas:
    "logo"
    "countries"
    "contact";
  }
`;

const StyledImageandName = styled.div `
        grid-area: logo;
        display: flex;
        flex-direction: columns;
        width: 100%;
        /* height: 100%; */

    /* @media screen and (max-width: 960px) {
        width: 100%;
        max-width: 100%;
        
        padding-left: 3em;
  }

  @media screen and (max-width: 767px) {
        width: 100%;
        max-width: 100%;
      
        padding-left: 0em;
  } */
`;


const StyledImgContainer = styled.div `
    float: left;
    display: flex;
    padding-top: 2em;
    padding-bottom: 2em;
    width: 20%;
    padding-left: 24px;
    text-align: left;
    cursor: pointer;
    
    @media screen and (max-width: 1024px) {
      margin-right: 2em;
 
}

    @media screen and (max-width: 960px) {
      margin-right: 3em;
    }

    /* @media screen and (max-width: 767px) {
        width: 100%;
        justify-content: center;
        padding-top: 4em;
        
    } */

`;

const StyledImg = styled.img`
        text-align: center;
        width: 51px;
        height: 63px;

        @media screen and (max-width: 767px) {
          /* justify-self: center; */
    }
`;



const StyledContactContainer = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  @media screen and (max-width: 1920px) {
    padding-right: 0em;
    }

  @media screen and (max-width: 960px) {
        /* width: 100%;
        max-width: 100%;
        justify-content: space-evenly;
        align-items: center;
        text-align: center; 
        padding-right: 3em;
        padding-bottom: 1em;
        padding-top: 3em;
        padding-left: 0em; */
    }

  /* @media screen and (max-width: 767px) {
      height: 80px;
      flex-direction: column;
      padding-top: 0em;
    } */
`;

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-content: center;
    margin-right: 24px;
    padding-right: 24px;
    padding-left: 24px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    

  @media screen and (max-width: 767px) {
    align-self: center;
    padding-left: 0em;
    padding-right: 0em;
    }
`;



// const Styledp = styled.p`
//   margin-bottom: -0.25em;
//   color: black;
//   font-weight: 800;
//   font-size: 24px;



// `;

const StyledCopyRightContainer = styled.div`
width: 50%;
align-content: flex-end;
justify-items: flex-start;

@media screen and (max-width: 960px) {
  width: 70%;
  }
`;

const StyledCopyRight = styled.p`
  font-family: "helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -4%;
  font-weight: light;
  color: #000000;
  margin-bottom: 2em;

  /* @media screen and (max-width: 960px) {
    margin-top: 0%;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  } */

`;

const StyledMailLink = styled.a`
color: #000000;
font-family: "helvetica Neue", sans-serif;
  font-size: 25px;
  line-height: 57px;
  letter-spacing: -4%;
  font-weight: light;
  text-decoration: none;

  &:hover{
    color: #59cf23;
    }

  /* @media screen and (max-width: 767px) {
    margin-left: 0em;
    align-self: center;

    &:hover{
        text-decoration: none;
    }

  } */
`;













const Footer = () => {
    return (
      
        <StyledFooter>

          <StyledContentsContainer>

            <StyledImageandName>
                
                    <StyledImgContainer onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>        
                        <StyledImg src={logo} alt="The letters E & F for Ekman and Falck." />                  
                    </StyledImgContainer>
                    <StyledCopyRightContainer>
                    <StyledCopyRight>© Ekman&Falck 2025</StyledCopyRight>
                    </StyledCopyRightContainer>
            </StyledImageandName>      

            

         
                    <StyledContactContainer>

                            <StyledContact>    
                       
                              <StyledMailLink><a href="mailto:hello@ekmanfalck.se">Contact</a></StyledMailLink> 
                   
                            </StyledContact>

                  

                    </StyledContactContainer>

        
          

          </StyledContentsContainer>

        </StyledFooter>

         
    );
}



 


export default Footer;












