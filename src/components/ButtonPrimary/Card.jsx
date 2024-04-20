import React from 'react';
import { StyledButtonCard, StyledButton, StyledCta } from './styles';
import { MdOutlineEmail } from "react-icons/md";
import { IconContext } from "react-icons";






function Card (props) {

    return (

       
                <StyledButtonCard>
                <a href={props.buttonLink}>
                <StyledButton>
                <IconContext.Provider value={{ size: "2.5em", className: "global-class-name" }}>
                <MdOutlineEmail />
                </IconContext.Provider>
                <StyledCta>{props.cta}</StyledCta>
                </StyledButton></a>
                </StyledButtonCard>
               
                                
    )
}

export default Card;



