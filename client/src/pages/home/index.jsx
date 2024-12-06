import React from 'react';
import ThemeSwitcher from '../../components/features/themeSwitcher';

function HomePage() {

    return (
        <div>            
            <div className='h-screen bg-white dark:bg-black flex justify-center items-center'>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}

export default HomePage
