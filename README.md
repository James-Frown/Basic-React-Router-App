# Basic-React-Router-App
 My First React Router app that has multiple screens

## Source Controll
    - git add .
    - git commit -m "Update & Changes Made"
    - git push

##  Create a Vite/React App
    - npm create vite@latest
    - Project Name : vite-porject
    - Framework : React
    - Variant : Javascript

## Build a Vite/React app
    - cd vite-project
    - npm install
            
## Start a local Server
    - npm run dev

## Remove Template Data
    - delete all the template data

## Install React Router
    - cd vite-project
    - npm install react-router-dom

## Creating App component
    - Make sure all components are like this to start
        const App = () => {
            return (
                <>
                </>
            );
        };
        export default App;
        
## Adding Route's elements in App.jsx
    - Add import's to App.jsx
        + import { BrowserRouter, Route, Routes } from "react-router-dom";
        + import Navbar from "./components/NavBar";
        + import Landing from "./pages/Landing/Landing";
        + import About from "./pages/About/About";
        + import Skills from "./pages/Skills/Skills";
        + import Projects from "./pages/Projects/Projects";
        + import Contact from "./pages/Contact/Contact";

## Implimenting Browser Router in App.jsx
    - Wrap Navigation & Routes, then Wrap Route in Routes
        + <BrowserRouter>
            + <Navbar />
            + <Routes>
                + <Route />
                + <Route />
                + <Route />
                + <Route />
                + <Route />
            + </Routes>
        + </BrowserRouter>

## Adding Routes props
    - Each Route has:
        + path='/page'
        + element={<component />}

    - The landing Route has:
        + exact="true"
        + path='/'
        + element={<component />}

## Added a cool logo to go back to landing screen
    - Just did this to make the template file a little more detailed





    

