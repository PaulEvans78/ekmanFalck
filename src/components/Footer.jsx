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
  height: 140px;
  max-width: 100vw;
  z-index: 100;
  bottom: 0;
  /* display: flex;
  flex-direction: row;
  column-gap: 6em;
  justify-items: center;
  align-items: flex-end; */
  display: grid;
/* grid-template-rows: 7rem repeat(2, 1fr) 7rem; */
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
  "logo copyright contact";
  font-size: 14px;
  line-height: 24px;
  color: whitesmoke;
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: 0;
  /* padding-bottom: 1em; */
  @media screen and (max-width: 767px) {
    background-image: none;
    background-color: whitesmoke;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImageandName = styled.div `
        grid-area: logo;
        width: 180px;
        height: 100%;
        padding-left: 2.5em;
        /* padding-bottom: 1em; */

    @media screen and (max-width: 960px) {
        /* width: 60%; */
  }

    @media screen and (max-width: 355px) {
        /* width: 80%;  */
  }
`;

// const StyledImgContainer = styled.div `
//         float: left;
// `;

// const StyledImg = styled.img`
//         text-align: center;
//         width: 65px; 
//         margin-left: 1em;
//         margin-right: 1em;
//         margin-top: 0.75em;
//         padding-bottom: 0.75em;

   

//     @media screen and (max-width: 960px) {
//         margin-right: 0.5em;
//         margin-top: 1em;
//   }

//   @media screen and (max-width: 767px) {
//         width: 50px; 
//         margin-top: 0.5em;
//   }

//   @media screen and (max-width: 355px) {
//         display: none;
//   }
// `;

const StyledIdent = styled.div `
    float: left;
    width: 200px; 
    height: 100%; 
    padding-left: 0.5em;
    text-align: left;
    /* background-color: red; */

    /* &:hover{
        border-bottom: 1px solid white;
    }  */

    /* @media screen and (max-width: 960px) {
        width: 200px; 
    } */

    @media screen and (max-width: 767px) {
        /* width: 110px;  */
    }

    /* @media screen and (max-width: 355px) {
        width: 100px; 
  }  */

`;

const StyledName = styled.h1 `
   
    /* font-family: 'Delicious Handrawn', cursive; */
    font-size: 52px;
    line-height: 50px;
    letter-spacing: 0em;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0;
    margin-top: 0.5em;
    /* text-shadow: 1px 1px 5px #2f2f2f; */

    @media screen and (max-width: 1030px) {
        font-size: 48px;
    }

    @media screen and (max-width: 767px) {
        font-size: 32px;
        line-height: 30px;
    }

    @media screen and (max-width: 355px) {
        margin-left: 0.5em
  }

    
    `;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* row-gap: 2em; */
  justify-content: space-around;
  text-align: left;
  padding-right: 2em;
  /* margin-bottom: 1em; */
  /* align-content: flex-end; */

  @media screen and (max-width: 767px) {
        text-align: center;
    }
`;

const StyledContactSweden = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* text-align: left; */
`;

const StyledContactSouthAfrica = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* text-align: left; */
`;

const Styledp = styled.p`
  /* margin-left: 2em; */
  margin-bottom: -0.25em;
  color: black;
  font-weight: 800;
  font-size: 24px;
  /* text-shadow: 2px 2px 4px black; */

  @media screen and (max-width: 767px) {
    margin-left: 0em;
  }

`;

const StyledMailLink = styled.p`
  display: flex;
  flex-direction: column;
  /* color: whitesmoke; */
  /* margin-left: 2em; */
  margin-bottom: -0.75em;
  /* text-shadow: 2px 2px 4px black; */

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
  /* color: whitesmoke; */
  /* margin-left: 2em; */
  /* text-shadow: 2px 2px 4px black; */

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
  /* width: 30%; */
  grid-area: copyright;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  /* margin-right: 1em; */
  margin-bottom: 1em;

  @media screen and (max-width: 767px) {
    display: none;
    flex-direction: row;
    }
`;

const StyledCopyRight = styled.div`
  line-height: 26px;
  /* font-family: 'Lexend'; */
  color: #000000;
  /* text-shadow: 2px 2px 4px black; */

  @media screen and (max-width: 767px) {
    font-size: 8px;
    margin-left: 1em;
    margin-right: 1em;
    margin-top: 2em;
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











