import React, { useState} from 'react';
import { StyledModal, StyledVideoContainer, StyledFrontCardImg, StyledInfoContainer, StyledCardp, StyledCloseModal } from './styles';
import { MdOutlineClear } from "react-icons/md";
import { IconContext } from "react-icons";
import homeFilmTwo from '../../assets/film2.mp4';
// import { Spin as Hamburger } from 'hamburger-react';
// import CloseButtonComponent from './CloseButton';





function Card (props) {

        const [modalOpen, setModalOpen] = useState(false); // Set modalOpen to true initially

        // const openModal = () => {
        //   setModalOpen(true); // Function to open the modal
        // };

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
                        
               
                <StyledFrontCardImg controls autostart autoPlay src={homeFilmTwo} type="film2/.mp4" />
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



