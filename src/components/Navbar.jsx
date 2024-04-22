import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Spin as Hamburger } from 'hamburger-react'
import { Link, useLocation } from "react-router-dom";
import ef_logo from '../assets/ef_logo.png';


const StyledNav = styled.nav`
    grid-area: top;
    width: 100%;
    /* max-width: 100vw; */
    /* min-width: 100vw; */
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 100;
    display: flex;
    /* align-self: center; */
    flex-direction: row;
    justify-content: space-between;
    /* column-gap: 14em; */
    /* margin-left: 6em;  */
    /* margin-right: 6em; */
    padding-bottom: 1em;
    padding-left: 1em;
    /* padding-right: 1em; */
    background-color: whitesmoke;

    position: fixed;
    top: ${({ visible }) => (visible ? '0' : '-120px')}; /* Adjust according to your navbar height */
    transition: top 0.6s;

    @media screen and (max-width: 960px) {
        font-size: 16px;
    }

    @media screen and (max-width: 767px) {
        justify-items: flex-end;
        justify-content: space-between;
        margin-top: 0;
        padding-top: 0.5em;
        padding-left: 0em;
  }

    `;

const StyledImageandName = styled.div `
        width: 180px;
        height: 100%;
        padding-left: 1.5em;

    @media screen and (max-width: 960px) {
        /* width: 60%; */
  }

    @media screen and (max-width: 355px) {
        /* width: 80%;  */
  }
`;

const StyledImgContainer = styled.div `
    display: none;

    @media screen and (max-width: 969px) {
        width: 100%;
        display: flex;
        justify-content: center;
  }
       
`;

const StyledImg = styled.img`
        text-align: center;
        width: 200px; 
        /* margin-left: 1em;
        margin-right: 1em; */
        margin-top: 8em;
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

const StyledIdent = styled.div `
    float: left;
    width: 200px; 
    height: 100%; 
    padding-left: 0.5em;
    text-align: left;
    /* background-color: red; */

   

    @media screen and (max-width: 960px) {
        padding-left: 3em;
    }

    @media screen and (max-width: 767px) {
        padding-left: 0em;
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
    &:hover {
        color: #59cf23;
    }

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

// const StyledTitle = styled.div `

//     font-size: 24px;
//     line-height: 40px;
//     letter-spacing: 0em;
//     color: whitesmoke;
//     margin-top: 0.5em;
//     margin-left: 0.5em;
//     text-shadow: 1px 1px 4px #2f2f2f;

//     @media screen and (max-width: 767px) {
//         font-size: 16px;
//         line-height: 20px;
//     }

//     @media screen and (max-width: 355px) {
//         margin-left: 1.5em
//     }
// `;

const StyledNavul = styled.ul`
    width: auto;
    display: flex;
    /* align-self: flex-end; */
    /* justify-content: flex-end;  */
    /* align-items: flex-end; */
    list-style-type: none;
    /* margin-right: 2em; */
    margin-left: 1em;
    padding-right: 1.5em;

    /* @media screen and (max-width: 960px) {
       
    } */

    @media screen and (max-width: 960px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        padding-top: 6em;
        /* justify-content: center; */
        /* align-content: center; */
        top: 140px;
        right: 0;
        height: 100vh;
        width: 100vw;
        background-color: #40cf00;
        /* text-align: center; */
        transform: translateY(1100px);
        -webkit-transform: translateY(1100px); /* Safari */
        -moz-transform: translateY(1100px); /* Firefox */
        transition: 0.5s ease-in-out; 
        -webkit-transition: transform 0.5s ease-in-out;
        -moz-transition: transform 0.5s ease-in-out;
        margin-top: 0;
        margin-right: 0;
        margin-bottom: 0em;
        margin-left: 0em;
        padding-right: 0em;
    }

    @media screen and (max-width: 767px) {
        top: 100px;
    }

    `;

const StyledLink = styled(Link)`
    display: flex; 
    justify-self: flex-end;
    align-self: flex-end;
    /* font-family: 'Neue Haas Grotesk Display Pro', sans-serif;  */
    font-weight: 600;
    color: #000000;
    text-decoration: none;
    text-align: right;
    margin: 0em 2em 0em 0em;
    /* text-shadow: 2px 2px 4px black; */
    
    &:hover{
        text-decoration: underline;
        color: #59cf23;
    }
    
    &.active {
    text-decoration: underline;
  }

    @media screen and (max-width: 960px) {
        justify-content: center;
        align-self: center;
        margin: 1em 0em 0em 0em;
        font-size: 32px;

    &:hover{
        text-decoration: none;
        color: whitesmoke;
    }
    
  }
    
`;

const ExternalStyledLink = styled.a`
    display: flex; 
    align-self: flex-end;
    color: #000000;
    text-decoration: none;
    text-align: right;
    /* margin: 0em 0em 0em 0em; */
    font-weight: 600;
    /* text-shadow: 2px 2px 4px black; */

    &:hover{
        text-decoration: underline;
    }

    &.active {
    text-decoration: underline;
  }

    @media screen and (max-width: 960px) {
        justify-content: center;
        align-self: center;
        font-size: 32px;
        margin-top:1em;
        margin-bottom:4em;

        &:hover{
        text-decoration: none;
    }
    
    }

    `;
    
    // HAMBURGER

const StyledHamburger = styled.div`
    display: none;

@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    margin-top: 2em;
    margin-right: 6em;
}

@media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-right: 2em;
}
`;


const Navbar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false); // Hamburger menu
    const [activePage, setActivePage] = useState(location.pathname);
    const [hamburgerActive, setHamburgerActive] = useState(false); // Hamburger menu
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setActivePage(location.pathname);

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname, prevScrollPos]);

    
const links = [
    
    {
        id: 1,
        to: "/",
        text: "Home",
        onClick: () => { setOpen(false); },
        isExternal: false
    },
    {
        id: 2,
        to: "/filmProduction",
        text: "Film Production",
        onClick: () => { setOpen(false); },
        isExternal: false
    },
    {
        id: 3,
        to: "/productionService",
        text: "Production Service",
        onClick: () => { setOpen(false); },
        isExternal: false
    },
    {
        id: 4,
        to: "/about",
        text: "About Us",
        onClick: () => { setOpen(false); },
        isExternal: false 
    }
];

    return (
        
        <StyledNav visible={visible}> 

            <StyledImageandName>
                <Link to="/">
                  
                    {/* <StyledImgContainer>
                        <StyledImg src={logoWhite_large} alt="Ekman & Falck" onClick={() => {setOpen(false);}} />
                    </StyledImgContainer> */}

                    <StyledIdent>
                        <StyledName>Ekman
                                    &Falck</StyledName>
                        {/* <StyledTitle>1st Assistant Director</StyledTitle> */}
                    </StyledIdent>
                    
                            

                        

                </Link>  
            </StyledImageandName>        



            <StyledNavul style={{transform: open ? "translateX(0px)" : ""}}>
                 {/* {links.map(link => link.isExternal ? <ExternalStyledLink key={link.id} href={link.href} className={activePage === link.to ? "active" : ""}>{link.text}</ExternalStyledLink> : <StyledLink onClick={() => {setOpen(false); setHamburgerActive(false); link.onClick();}} to={link.to} key={link.id} className={activePage === link.to ? "active" : ""}>{link.text}</StyledLink>)} */}
                 {links.map(link => link.isExternal ? <ExternalStyledLink key={link.id} href={link.href} className={activePage === link.to ? "active" : ""} onClick={() => { setOpen(false); setHamburgerActive(false); link.onClick(); }}> {link.text} </ExternalStyledLink> : <StyledLink onClick={() => {setOpen(false); setHamburgerActive(false); link.onClick();}} to={link.to} key={link.id} className={activePage === link.to ? "active" : ""}>{link.text}</StyledLink>)}
                

                    <StyledImgContainer>
                        <StyledImg src={ef_logo} alt="the letters e and f merged together" />
                    </StyledImgContainer>

            </StyledNavul>

            <StyledHamburger>
            <div onClick={() => { setOpen(!open); setHamburgerActive(!hamburgerActive); }}>
                <Hamburger toggled={hamburgerActive} />
                </div>
                </StyledHamburger>
            
            
        </StyledNav>
        

    );

                }
export default Navbar;