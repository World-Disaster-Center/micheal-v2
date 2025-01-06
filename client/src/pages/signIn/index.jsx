import React, { useState } from 'react';
import bgImage from '../../assets/welcomeImg.jpeg';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const validUsername = "drc_workshop";
        const validPassword = "drc_123";

        if (username === validUsername && password === validPassword) {
            window.location.href = 'https://wdc-app.vercel.app/';
        } else {
            setError('Username or password is incorrect');
        }
    };

    return (
        <div className='h-[100vh] flex'>

            <div className="relative bg-cover bg-center w-[50%]" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='absolute flex justify-center items-center inset-0 bg-michael_dark_red_75'>
                    <p className='uppercase text-4xl font-bold text-white text-center'>welcome back!</p>
                </div>
            </div>

            <div className='bg-white w-[50%] p-28 flex flex-col gap-3 justify-center'>
                <h1 className='font-bold text-3xl text-michael_red_100'>Login</h1>
                <p className='text-michael_gray_5 text-[15px]'>Please enter your details to login</p>
                
                <input
                    type="text"
                    placeholder='Username'
                    required
                    className='border border-michael_red_50 placeholder:text-[14px] text-michael_red_50 placeholder:text-michael_gray_4 p-2 rounded-lg outline-none'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <input
                    type="password"
                    placeholder='Password'
                    required
                    className='border border-michael_red_50 placeholder:text-[14px] text-michael_red_50 placeholder:text-michael_gray_4 p-2 rounded-lg outline-none mt-3'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                {error && <p className='text-red-500 text-[13px]'>{error}</p>}
                
                <p className='self-end underline text-[13px] text-michael_gray_5 mb-2 -mt-2 cursor-pointer'>Forgot password?</p>
                
                <button
                    className='text-white text-[15px] font-semibold p-2 rounded-lg bg-michael_red_100 border border-michael_red_100 hover:text-michael_red_100 hover:bg-white'
                    onClick={handleLogin}
                >
                    Login
                </button>
                
                <p className='text-[14px] text-michael_black_1 text-center'>
                    Don't have an account yet? 
                    <span
                        className='text-michael_red_100 cursor-pointer hover:underline'
                        onClick={() => navigate('/register')}
                    >
                        Create an account
                    </span>
                </p>
                
                <div className='flex justify-center mt-3 items-center gap-4'>
                    <hr className='border-spacing-0 border-michael_gray_2 w-[20%]' />
                    <p className='text-[13px] text-michael_gray_1'>Or continue with</p>
                    <hr className='border-spacing-0 border-michael_gray_2 w-[20%]' />
                </div>
                
                <button className='flex items-center border border-michael_gray_4 justify-center mt-2 gap-2 p-2 rounded-lg'>
                    <FcGoogle />
                    <span>Google</span>
                </button>
            </div>
        </div>
    );
}

export default SignIn;
