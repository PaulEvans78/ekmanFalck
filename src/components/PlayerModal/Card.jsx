import React, { useState} from 'react';
import { StyledModal, StyledVideoContainer, StyledFrontCardImg, StyledInfoContainer, StyledCardp, StyledHeader, StyledCloseModal } from './styles';
import { MdOutlineClear } from "react-icons/md";
import { IconContext } from "react-icons";
// import { Spin as Hamburger } from 'hamburger-react';
// import CloseButtonComponent from './CloseButton';





function Card (props) {

        const [modalOpen, setModalOpen] = useState(true); // Set modalOpen to true initially

  const closeModal = () => {
    setModalOpen(false); // Function to close the modal
  };
      
  

    return (
        
    
        <>
      {/* Button to toggle the modal */}
      {/* <StyledBtnModal onClick={toggleModal}>Open Modal</StyledBtnModal> */}

      {/* Modal content */}
      {modalOpen && (
        <StyledModal>

              
                
                {/* <StyledHoverContainer> */}
                {/* <StyledGreenScreen></StyledGreenScreen> */}

                <StyledVideoContainer>
                
                <StyledCloseModal onClick={closeModal}>
                        <IconContext.Provider value={{ size: "1em", className: "global-class-name" }}>
                        <MdOutlineClear/>
                        </IconContext.Provider>
                </StyledCloseModal>
                        
               
                <StyledFrontCardImg src={props.mainPic} alt="Category Image"/>
                {/* </StyledHoverContainer> */}
                    
                </StyledVideoContainer>

                        <StyledInfoContainer>
                            
                                    {/* <a href={props.buttonLink}><StyledButton> */}
                                        
                                {/* <StyledCardp>{props.description}</StyledCardp> */}
                                {/* <StyledCardp>{props.cta}</StyledCardp> */}
                                {/* </StyledButton></a> */}

                        
                        <StyledHeader>{props.headline}</StyledHeader>
                        <StyledCardp>{props.description}</StyledCardp>
                        </StyledInfoContainer>

                       

            </StyledModal>
        )}
        </>
    )
}

export default Card;



