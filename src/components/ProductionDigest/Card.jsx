import React from 'react';
import { StyledFrontCard, StyledInfoContainer, StyledCardp } from './styles';
// import Buttons from '../ButtonsContact/button';






function Card (props) {

    return (
        
    
        
        <StyledFrontCard>
                
                        <StyledInfoContainer>
                            
                                <StyledCardp>{props.description}</StyledCardp>

                        </StyledInfoContainer>

                        {/* <StyledButtonContainer>

                                <Buttons />

                        </StyledButtonContainer> */}

        </StyledFrontCard>
   

   
    )
}

export default Card;



