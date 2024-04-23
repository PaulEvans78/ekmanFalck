import React from 'react';
import { StyledFrontCard, StyledInfoContainer, StyledCardp, StyledHeader } from './styles';
// import Buttons from '../ButtonsContact/button';






function Card (props) {

    return (
        
    
        
        <StyledFrontCard>
                
                        <StyledInfoContainer>

                                <StyledHeader>{props.headline}</StyledHeader>
                            
                                <StyledCardp>{props.description}</StyledCardp>

                        </StyledInfoContainer>

                        {/* <StyledButtonContainer>

                                <Buttons />

                        </StyledButtonContainer> */}

        </StyledFrontCard>
   

   
    )
}

export default Card;



