import React, { useState} from 'react';
import { StyledModal, StyledVideoContainer, StyledFrontCardImg, StyledInfoContainer, StyledCardp, StyledCloseModal } from './styles';
import { MdOutlineClear } from "react-icons/md";
import { IconContext } from "react-icons";
import homeFilmOne from '../../assets/film1.mp4';






function Card (props) {

        const [modalOpen, setModalOpen] = useState(false); // Set modalOpen to true initially

       

        const closeModal = () => {
          setModalOpen(false); // Function to close the modal
        };
            

    return (
        
    
        <>
    

      {/* Modal content */}
      {modalOpen && (
        <StyledModal>

              

                <StyledVideoContainer>
                
                <StyledCloseModal onClick={closeModal}>
                        <IconContext.Provider value={{ size: "1em", className: "global-class-name" }}>
                        <MdOutlineClear/>
                        </IconContext.Provider>
                </StyledCloseModal>
                        
               
                <StyledFrontCardImg controls autostart autoPlay src={homeFilmOne} type="film1/.mp4" />
                {/* </StyledHoverContainer> */}
                    
                </StyledVideoContainer>

                        <StyledInfoContainer>
                            
                                    {/* <a href={props.buttonLink}><StyledButton> */}
                                        
                                {/* <StyledCardp>{props.description}</StyledCardp> */}
                                {/* <StyledCardp>{props.cta}</StyledCardp> */}
                                {/* </StyledButton></a> */}

                        
                        {/* <StyledHeader>{props.headline}</StyledHeader> */}
                        <StyledCardp>{props.title}</StyledCardp>
                        <StyledCardp>{props.director}</StyledCardp>
                        <StyledCardp>{props.agency}</StyledCardp>
                        </StyledInfoContainer>

                       

            </StyledModal>
        )}
        </>
    )
}

export default Card;



