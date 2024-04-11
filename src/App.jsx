import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
// import Directors from "./pages/Directors";
// import Experience from "./pages/Experience";
// import About from "./pages/About";

// import {

//   BrowserRouter as Routes,
//   Route,
// } from "react-router-dom";

import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const GridContainer = styled.div`
min-height: 100%;
max-width: 100vw;
display: grid;
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(2, 1fr);
grid-template-areas:
"top top"
"main main"
"main main"
"footer footer";

/* min-width: 100%; */
/* overflow-x: hidden; */
    /* overflow-y: hidden; */
/* padding-left: 4em; */
/* padding-right: 4em; */
/* background-color: #b67f10; */
`;

// const MainContainer = styled.div`
// display: grid;
// grid-template-rows: repeat(2, 1fr);
// grid-template-columns: repeat(2, 1fr);
// grid-template-areas:
// "main main"
// "main main";
// width: 100%;
// max-width: 100%;
// `;

function App() {
  
  return (
    <HashRouter>
        {/* <Router> */}
        

          <GridContainer >

              <Navbar />
          
                {/* <MainContainer> */}

              
                  <Switch>

                    <Route exact path="/">
                      <Home />
                    </Route>

                    {/* <Route path="/directors">
                      <Directors />
                    </Route>

                    <Route path="/experience">
                      <Experience />
                    </Route>

                    <Route path="/about">
                      <About />
                    </Route> */}

                  </Switch>

                    {/* </MainContainer> */}

              <Footer />
                    
          </GridContainer>
          
      
          
      
          {/* </Router> */}
      </HashRouter>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
