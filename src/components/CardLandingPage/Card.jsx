import React from 'react';
import { StyledFrontCard, StyledFrontCardImg, StyledButton, StyledInfoContainer, StyledCardp, StyledHeader } from './styles';






function Card (props) {

        
                  
    return (
        
    
        
        <StyledFrontCard>
                {/* <StyledHoverContainer> */}
                {/* <StyledGreenScreen></StyledGreenScreen> */}
                <StyledFrontCardImg src={props.mainPic} alt="Category Image"/>
                {/* </StyledHoverContainer> */}
                    

                        <StyledInfoContainer>
                            
                                    <a href={props.buttonLink}><StyledButton>
                                        <StyledHeader>{props.headline}</StyledHeader>
                                <StyledCardp>{props.description}</StyledCardp>
                                <StyledCardp>{props.cta}</StyledCardp>
                                </StyledButton></a>

                        </StyledInfoContainer>

            </StyledFrontCard>
   
    )
}

export default Card;



