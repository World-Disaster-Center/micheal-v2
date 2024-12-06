import React from 'react'
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notfound';

function MainRoutes() {
    return (
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default MainRoutes
