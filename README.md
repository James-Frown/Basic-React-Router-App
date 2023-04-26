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

## Learning Animations
starting to learn the animations for the react/vite app

## AOS | Animate On Scroll
    - on the website there are examples to use for your own animations
    - npm install AOS
    - go to app.jsx add aos imports and init it
    - remember to have imports in app.jsx

## Framer Motion | Installation
    - npm install framer-motion

## Framer Motion | Importing
    - import { motion } from "framer-motion"
    - import { useAnimation } from "framer-motion"

## Framer Motion | Use
When using the wrapper divs are motion component
    - <motion.div></motion.div>
    - divs go from blue to green
    - they all have props & the props are before the classname
        + give it an initial value (    initial={{ x: "-100rem" }}   )
        + give it an animation of ( animate={{ x: "0" }})
        + give it a transition of ( transition={{ duration: 1 }} )
    - initial and animate are like key frames
    - the way to add life to them is with the duration prop

## Framer Motion | Extra
    - transition has many props
        + add them like how you do the duration

## UseEffect | About
Use effect allows you to controll animations

## UseEffect | Import
    - import { useEffect } from "react"
    - also add the framer motion useEffect to framer motion import

## UseEffect | Use
    - initialize it above the return statement of the react component
        + const controls = useAnimation();
    - set the animated div/image to have an animate prop
    - have the value be the controls const
    

    







    

