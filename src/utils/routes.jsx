import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notfound';
import StartingPage from '../pages/start';
import WelcomePage from '../pages/welcome';
import Language from '../pages/language';
import Blog from '../pages/blog';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<StartingPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/language" element={<Language />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default MainRoutes
