import React from "react";
import styled from "styled-components";
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
  grid-template-columns: 40% 60%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
  "logo contact"
  "copyright copyright";
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
    width: 170px; 
    height: 100%; 
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

const StyledName = styled.h1 `
    font-size: 48px;
    line-height: 50px;
    letter-spacing: 0em;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0;
    margin-top: 0.5em;

    @media screen and (max-width: 1030px) {
        font-size: 48px;
    }

    @media screen and (max-width: 960px) {
      /* display: flex;
      justify-self:center; */
        font-size: 48px;
        /* margin-top: 1em; */
        /* margin-bottom: 1em; */
        /* line-height: 30px; */
    }

    @media screen and (max-width: 767px) {
        margin-bottom: 0em;
        margin-left: 0.15em;
        /* font-size: 32px; */
        
    }

    @media screen and (max-width: 355px) {
        /* margin-left: 0.5em */
  }

    
    `;

const StyledContactContainer = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-content: space-around; */
  /* justify-items: flex-start; */
  /* text-align: center; */
  padding-right: 4em;
  /* padding-top: 1em; */

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
        /* margin-right: 4em; */
    }

  @media screen and (max-width: 767px) {
      flex-direction: column;
    
    }
`;

const StyledContactSweden = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-end; */

  /* @media screen and (max-width: 960px) {
    justify-content: center;
  } */
`;

const StyledContactSouthAfrica = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  /* @media screen and (max-width: 960px) {
    justify-content: center;
  } */
`;

const Styledp = styled.p`
  margin-bottom: -0.25em;
  color: black;
  font-weight: 800;
  font-size: 24px;

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
  margin-bottom: -0.75em;

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
  /* justify-self: flex-end; */

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

const StyledCopyRightContainer = styled.div`
  grid-area: copyright;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-bottom: 1em;

  @media screen and (max-width: 960px) {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 1em;
    
    }

  @media screen and (max-width: 767px) {
    padding-top: 1em;
    /* justify-content: center; */
    align-items: center;
    /* display: none;
    flex-direction: row; */
    }
`;

const StyledCopyRight = styled.div`
  line-height: 26px;
  color: #000000;

  @media screen and (max-width: 960px) {
    font-size: 12;
    margin-left: 5em;
    /* margin-left: 1em;
    margin-right: 1em;
    margin-top: 2em; */
    }

  @media screen and (max-width: 767px) {
    margin-left: 0em;
    /* font-size: 8px;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 2em; */
    }
`;

const Footer = () => {
    return (
      
        <StyledFooter>

<StyledImageandName>
                {/* <Link to="/"> */}
                  
                    {/* <StyledImgContainer>
                        <StyledImg src={logoWhite_large} alt="Ekman & Falck" onClick={() => {setOpen(false);}} />
                    </StyledImgContainer> */}

                    <StyledIdent>
                        <StyledName>Ekman
                                    &Falck</StyledName>
                    </StyledIdent>
                    
                   

                        

                {/* </Link>   */}
            </StyledImageandName>      

            <StyledCopyRightContainer>

<StyledCopyRight>Copyright © 2024 Ekman & Falck AB</StyledCopyRight>

</StyledCopyRightContainer>

          <StyledContactContainer>

          <StyledContactSweden>

            <Styledp>Sweden</Styledp>
            <StyledMailLink><a href="mailto:mail@FirstAD.se">mail@xxxxx.se</a></StyledMailLink> 
            <StyledTelLink><a href="tel:+46739813969">+46739813969</a></StyledTelLink>

          </StyledContactSweden>

          <StyledContactSouthAfrica>

            <Styledp>South Africa</Styledp>
            <StyledMailLink><a href="mailto:mail@FirstAD.se">mail@xxxx.se</a></StyledMailLink> 
            <StyledTelLink><a href="tel:+46739813969">+46739813969</a></StyledTelLink>

          </StyledContactSouthAfrica>

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











