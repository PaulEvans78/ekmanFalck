import React from 'react';
import { StyledFrontCard, StyledFrontCardImg, StyledButton, StyledInfoContainer, StyledHeaderContainer, StyledCardp, StyledHeader } from './styles';






function Card (props) {


    return (
        
        <StyledFrontCard>
               
                <StyledFrontCardImg src={props.mainPic} alt="Category Image"/>
                
                    

                        <StyledInfoContainer>
                                
                                {/* <StyledSecondaryImg src={props.secondaryPic} alt="Category Image"/> */}

                                    <a href={props.buttonLink}><StyledButton>
                                        {/* <StyledHeader>{props.headline}</StyledHeader> */}
                                        <StyledHeaderContainer>
                                <StyledCardp>{props.subheader}</StyledCardp>
                                <StyledHeader>{props.headline}</StyledHeader>
                                <StyledCardp>{props.cta}</StyledCardp>
                                </StyledHeaderContainer>
                                </StyledButton></a>
                                
                        </StyledInfoContainer>

            </StyledFrontCard>
   
    )
}

export default Card;



