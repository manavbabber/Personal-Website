import React from 'react';
import TypeWriter from '../UI/Typewriter/Typewriter';
import Aboutscreen from './Aboutscreen';
import Projectscreen from './Projectscreen';
import Skillscreen from './Skillscreen';
import KeepInTouch from './KeepinTouch';

const Homescreen = (props) => {
    return(
        <div>
            <div style ={ { backgroundImage: "url('https://images.unsplash.com/photo-1546433968-f61d844450fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')" , filter:'blur(0px)'  } } class='h-screen'>
                <div class=' absolute flex flex-col items-center w-full justify-center opacity-100 '>
                    <div className='mt-20'>
                        <img class='ml-32 h-28 mt-9 w-28' src='/images/avatar.png' alt='Manav Babber'></img>
                        <div>
                            <h1 class='text-4xl mt-16 mb-3 text-center text-white font-hc'>Hi There!</h1>
                            <h1 class='text-5xl text-white font-serif'>I am <span class='font-bold'>Manav Babber</span></h1>              
                        </div>
                    </div>
                    <TypeWriter/>
                    <button class='mt-14 p-2 rounded-full text-white border-4 hover:bg-white hover:text-black hover:border-white border-gray-700 font-bold'>Download Resume</button>
                </div>
            </div>
            <div class='bg-black'>
                <div class='mb-20'>
                    <Aboutscreen />
                </div>
                <div class='bg-black'>
                    <Skillscreen />
                </div>
                <div class='bg-black'>
                    <div class='mb-10'>
                        <Projectscreen />
                    </div>
                </div>
                <div class='bg-black'>
                    <KeepInTouch />
                </div>
            </div>

        </div>
        
    );
}

export default Homescreen;
