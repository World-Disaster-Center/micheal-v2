import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notfound';
import StartingPage from '../pages/start';
import WelcomePage from '../pages/welcome';
import Language from '../pages/language';
import Blog from '../pages/blog';
import MichaelMap from '../pages/map';
import SignIn from '../pages/signIn';
import Register from '../pages/register';;

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/language" element={<Language />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/map" element={<MichaelMap />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default MainRoutes
