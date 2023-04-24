# Basic-React-Router-App
 My First React Router app

    My Steps:

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

        ## Source Controll
            - git add .
            - git commit -m "Update & Changes Made"
            - git push

        ## Connecting react router
            - Add import to main.jsx
                + import { BrowserRouter } from 'react-router-dom'
            - Wrap App component in Browser Router
                + <BrowserRouter> <App /> </BrowserRouter>

        ## Adding Routing
            - Add import to App.jsx
                + import { Routes, Route } from 'react-router-dom'
            - Add import to components to be routed
                + import {homePage} from './components/homePage'
            - Wrap Route in Routes
                + <Routes> <Route></Route> </Routes>
            - Add Props to <Route  ></Route>
                + path='/'
                + element={<home />}




    

