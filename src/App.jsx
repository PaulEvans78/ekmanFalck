import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";





// import {

//   BrowserRouter as Routes,
//   Route,
// } from "react-router-dom";

import {
  HashRouter,
  // BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


const GridContainer = styled.div`
overflow-x: hidden;
min-height: 100%;
max-width: 100vw;
display: grid;
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(3, 1fr);
grid-template-areas:
"main main main"
"main main main"
"footer footer footer";

@media screen and (max-width: 960px) {
  /* grid-template-rows: repeat(2, 1fr); */
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
  "top top"
  "main main"
  "main main"
  "footer footer";
          
    }

    @media screen and (max-width: 767px) {
      grid-template-rows: Auto;
      grid-template-columns: 1fr;
      grid-template-areas:
      "top"
      "main"
      "main"
      "footer";
    }
`;



function App() {
  
  
  return (
    <HashRouter>
      
        

          <GridContainer >

              <Navbar />
                        
                  <Switch>

                    <Route exact path="/">
                      <Home />
                    </Route>

                      
                  </Switch>

                  

              <Footer />
                    
          </GridContainer>
          
      
          
      
          
      </HashRouter>
  );
}

export default App;
