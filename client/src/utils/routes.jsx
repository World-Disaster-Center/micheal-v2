import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from '../pages/blog';
import HomePage from '../pages/home';
import Language from '../pages/language';
import MichaelMap from '../pages/map';
import NotFoundPage from '../pages/notfound';
import Register from '../pages/register';
import SignIn from '../pages/signIn';
import StartingPage from '../pages/start';
import Videos from '../pages/videos';
import WelcomePage from '../pages/welcome';
;

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/language" element={<Language />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/map" element={<MichaelMap />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default MainRoutes
