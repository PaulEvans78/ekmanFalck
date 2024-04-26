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
  background-color: #40cf00;
  width: 100%;
  max-width: 100%;
  height: 200px;
  z-index: 50;
  bottom: 0;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 1fr;
  grid-template-areas:
  "logo countries contact"
  "copyright copyright copyright";
  font-size: 14px;
  line-height: 24px;
  color: whitesmoke;
  padding-left: 4em;
  /* padding-right: 4em; */
  margin-bottom: 0;

  @media screen and (max-width: 960px) {
    height: 200px;
    padding-left: 0em;
    padding-right: 0em;
    /* grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr); */
    /* grid-template-areas:
    "logo contact"
    "copyright copyright" ; */
    /* background-image: none;
    background-color: whitesmoke;
    flex-direction: column;
    align-items: center; */
  }
  
  @media screen and (max-width: 767px) {
    height: 500px;
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr); 
    grid-template-areas:
    "logo"
    "contact"
    "copyright" ;
    /* background-image: none;
    background-color: whitesmoke;
    flex-direction: column;
    align-items: center; */
  }
`;

const StyledImageandName = styled.div `
        grid-area: logo;
        width: 180px;
        height: 100%;
        /* padding-left: 2.5em; */

    @media screen and (max-width: 960px) {
        width: 100%;
        max-width: 100%;
        /* width: 60%; */
        display: flex;
        justify-content: flex-start;
        padding-left: 5em;
  }

  @media screen and (max-width: 767px) {
        width: 100%;
        max-width: 100%;
        /* width: 60%; */
        display: flex;
        justify-content: center;
        padding-left: 0em;
  }

    @media screen and (max-width: 355px) {
        /* width: 80%;  */
  }
`;


const StyledIdent = styled.div `
    float: left;
    display: flex;
    align-items: center;
    padding-top: 2em;
    width: 170px; 
    /* height: 100%;  */
    /* padding-left: 0.5em; */
    text-align: left;
    
    @media screen and (max-width: 960px) {
    display: flex;
    justify-self: center;
    }

    @media screen and (max-width: 767px) {
        /* width: 110px;  */
    }

`;

const StyledImg = styled.img`
        text-align: center;
        width: 50px; 
        /* margin-left: 1em;
        margin-right: 1em; */
        /* margin-top: 8em; */
        /* padding-bottom: 0.75em; */

   

    /* @media screen and (max-width: 960px) {
        margin-right: 0.5em;
        margin-top: 1em;
  }

  @media screen and (max-width: 767px) {
        width: 50px; 
        margin-top: 0.5em;
  }

  @media screen and (max-width: 355px) {
        display: none;
  } */
`;


const StyledCountriesContainer = styled.div`
  grid-area: countries;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* 
  justify-content: space-evenly; */
  /* align-content: space-around; */
  /* justify-items: flex-start; */
  /* text-align: center; */
  /* padding-right: 4em; */
  /* padding-top: 1em; */
  /* padding-left: 8em; */

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
        /* margin-right: 4em; */
    }

  @media screen and (max-width: 767px) {
      flex-direction: column;
    
    }
`;




const StyledContactContainer = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  /* justify-items: flex-start; */
  /* text-align: center; */
  /* padding-right: 4em; */
  /* padding-top: 1em; */
  /* padding-left: 8em; */

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
        /* margin-right: 4em; */
    }

  @media screen and (max-width: 767px) {
      flex-direction: column;
    
    }
`;

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* justify-content: flex-end; */
  /* align-content: flex-start; */

  /* @media screen and (max-width: 960px) {
    justify-content: center;
  } */
`;



const Styledp = styled.p`
  margin-bottom: -0.25em;
  color: black;
  font-weight: 800;
  font-size: 28px;

  @media screen and (max-width: 960px) {
    margin-top: 0%;
    /* font-size: 18px;
    line-height: 10px;
    margin-left: 0em; */
  }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }

`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  margin-bottom: -0.75em;
  font-size: 20px;

  &:hover{
        text-decoration: underline;
    }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

    &:hover{
        text-decoration: none;
    }

  }
`;

const StyledTelLink = styled.p`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
  font-size: 20px;

  &:hover{
        text-decoration: underline;
    }

  @media screen and (max-width: 767px) {
    margin-left: 0em;

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

// const StyledCopyRightContainer = styled.div`
//   grid-area: copyright;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: left;
//   margin-bottom: 1em;

//   @media screen and (max-width: 960px) {
//     width: 100%;
//     max-width: 100%;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-start;
//     padding-top: 1em;
    
//     }

//   @media screen and (max-width: 767px) {
//     padding-top: 1em;
//     align-items: center;
//     }
// `;

// const StyledCopyRight = styled.div`
//   line-height: 26px;
//   color: #000000;

//   @media screen and (max-width: 960px) {
//     font-size: 12;
//     margin-left: 5em;
//     }

//   @media screen and (max-width: 767px) {
//     margin-left: 0em;
//     }
// `;

const Footer = () => {
    return (
      
        <StyledFooter>

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
                              <StyledTelLink><a href="tel:+46732551434">+46 73 255 14 34</a></StyledTelLink>
                            </StyledContact>

                  

                    </StyledContactContainer>

        
              

          
          {/* <Icons /> */}

   

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











