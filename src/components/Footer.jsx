import React from "react";
import styled from "styled-components";
import ef_logo from '../assets/ef_logo_footer.png';
// import { FaImdb, FaInstagram, FaLinkedin  } from 'react-icons/fa';
// import { IconContext } from "react-icons";


// const footerData = [
//   {
//       id: 1,
//       href: "https://www.linkedin.com/in/tobias-reiner-64885645/",
//       icon: <FaLinkedin />,
//       des: "LinkedIn"
//   },
//   {
//       id: 2,
//       href: "https://www.instagram.com/1st_ad_tobias/",
//       icon: <FaInstagram />,
//       des: "Instagram"
//   },
//   {
//       id: 3,
//       href: "https://www.imdb.com/name/nm1639113/?ref_=fn_al_nm_1",
//       icon: <FaImdb />,
//       des: "Imdb"
//   },
  
// ];

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-self: center;
  background-color: whitesmoke;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  height: 160px;
  z-index: 50;
  bottom: 0;
  font-size: 14px;
  line-height: 24px;
  color: whitesmoke;
  margin-bottom: 0;

  @media screen and (max-width: 960px) {
    height: 200px;
    padding-left: 0em;
    padding-right: 0em;
  }
  
  @media screen and (max-width: 767px) {
    height: 450px;
  }
`;

const StyledContentsContainer = styled.div`
    width: 92%;
    height: 160px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas:
    "logo countries contact";
    align-self: center;
    background-color: #40cf00;

    @media screen and (max-width: 960px) {
  
  }
  
    @media screen and (max-width: 767px) {
    width: 100%;
    height: 450px;
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
        width: 180px;
        height: 100%;

    @media screen and (max-width: 960px) {
        width: 100%;
        max-width: 100%;
        /* display: flex; */
        /* justify-content: flex-start; */
        padding-left: 3em;
  }

  @media screen and (max-width: 767px) {
        width: 100%;
        max-width: 100%;
        /* display: flex;
        justify-content: center; */
        padding-left: 0em;
  }
`;


const StyledIdent = styled.div `
    float: left;
    display: flex;
    padding-top: 2em;
    width: 170px;
    padding-left: 4em;
    text-align: left;
    
    @media screen and (max-width: 960px) {
      padding-left: 0em;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        justify-content: center;
        padding-top: 4em;
        /* align-content: center; */
    }

`;

const StyledImg = styled.img`
        text-align: center;
        width: 50px; 

        @media screen and (max-width: 767px) {
          /* justify-self: center; */
    }
`;


const StyledCountriesContainer = styled.div`
  grid-area: countries;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 3em;
  padding-left: 2em;

  @media screen and (max-width: 1920px) {
    padding-right: 0em;
    }

  @media screen and (max-width: 960px) {
        width: 100%;
        max-width: 100%;
        justify-content: space-evenly;
        align-items: center;
        text-align: center; 
        padding-right: 0em;
        padding-bottom: 1em;
        padding-top: 3em;
        padding-left: 0em;
    }

  @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-content: flex-end;
      padding-bottom: 3em;
      padding-top: 0em;
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
        width: 100%;
        max-width: 100%;
        justify-content: space-evenly;
        align-items: center;
        text-align: center; 
        padding-right: 3em;
        padding-bottom: 1em;
        padding-top: 3em;
        padding-left: 0em;
    }

  @media screen and (max-width: 767px) {
      height: 80px;
      flex-direction: column;
      padding-top: 0em;
    }
`;

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 3em;

  @media screen and (max-width: 767px) {
    padding-left: 0em;
    }
`;



const Styledp = styled.p`
  margin-bottom: -0.25em;
  color: black;
  font-weight: 800;
  font-size: 24px;

  @media screen and (max-width: 960px) {
    margin-top: 0%;
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }

`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-bottom: -0.75em;
  font-size: 18px;
  font-weight: 700;

  &:hover{
        text-decoration: underline;
    }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
    align-self: center;

    &:hover{
        text-decoration: none;
    }

  }
`;

const StyledTelLink = styled.p`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-self: center;
  font-size: 18px;

  &:hover{
        text-decoration: underline;
    }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
    align-self: center;

    &:hover{
        text-decoration: none;
    }

  }
`;


// const IconContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   justify-items:center;
//   margin-right: 2em;

//   @media screen and (max-width: 960px) {
//         /* margin-right: 2em; */

//     }

    

// @media screen and (max-width: 767px) {
//   margin-right: 1em;
// }
// `;


// const StyledIcon = styled.a`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 1em 1em 0em 2em;
  
//   &:hover{
//         text-decoration: underline;
//     }

//     @media screen and (max-width: 767px) {
//     margin: 0em 2em 0em 2em;

//     &:hover{
//         text-decoration: none;
//     }
    
//   }
// `;

// const IconDes = styled.p`
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   font-family: 'Lexend';
//   font-size: 12px;
//   line-height: 24px;
//   color: #000000;
//   text-align: center;
//   margin-top: 0.5em;
// `;



const Footer = () => {
    return (
      
        <StyledFooter>

          <StyledContentsContainer>

            <StyledImageandName>
                
                    <StyledIdent>        
                        <StyledImg src={ef_logo} alt="the letters e and f merged together" />                  
                    </StyledIdent>
                                      
            </StyledImageandName>      

            

          <StyledCountriesContainer>
            <Styledp>Sweden | South Africa</Styledp>
          </StyledCountriesContainer>

                    <StyledContactContainer>

                            <StyledContact>                             
                              <StyledMailLink><a href="mailto:hello@ekmanfalck.se">mail@hello@ekmanfalck.se</a></StyledMailLink> 
                              <StyledTelLink><a href="tel:+46732551434">+ 46 73 255 14 34</a></StyledTelLink>
                            </StyledContact>

                  

                    </StyledContactContainer>

        
              

          
          {/* <Icons /> */}

          </StyledContentsContainer>

        </StyledFooter>

         
    );
}

// const Icons = () => {
  
//   return (
//     <IconContainer> 

//       <IconContext.Provider value={{ size: "2em"}}>
//         {footerData.map(Link => (
//           <StyledIcon href={Link.href} key={Link.id}>
//             {Link.icon}
          
//             <IconDes>{Link.des}</IconDes>
//         </StyledIcon>))}
        
//           </IconContext.Provider>

//     </IconContainer>
//   );
// }

 


export default Footer;











