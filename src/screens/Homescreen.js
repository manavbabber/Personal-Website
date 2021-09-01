import React from 'react';
import Footer from '../components/Footer';
import TypeWriter from '../UI/Typewriter/Typewriter';
import Aboutscreen from './Aboutscreen';
import Projectscreen from './Projectscreen';
import Skillscreen from './Skillscreen';
import KeepInTouch from './KeepinTouch';

const Homescreen = (props) => {
    return(
        <div>
            <div style ={ { backgroundImage: "url('https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80')" , filter:'blur(0px)'  } } class='h-screen'>
                <div class=' absolute flex flex-col items-center w-full justify-center opacity-100 '>
                    <div className='mt-20'>
                        <img class='ml-32 h-28 mt-9 w-28' src='/images/avatar.png' alt='Manav Babber'></img>
                        <div>
                            <h1 class='text-5xl mt-16 text-black font-hc font-semibold'>Hi There!</h1>
                            <h1 class='text-5xl  text-black font-serif'>I am <span class='font-bold'>Manav Babber</span></h1>              
                        </div>
                    </div>
                    <TypeWriter/>
                    <button class='mt-14 p-2 rounded-full border-4 hover:bg-black hover:text-white hover:border-green-300 border-gray-700 font-medium'>Download Resume</button>
                </div>
            </div>
            <div class='bg-gray-400'>
                <div class='mb-20'>
                    <Aboutscreen />
                </div>
                <div class='bg-purple-900'>
                    <Skillscreen />
                </div>
                <div class='bg-gray-400'>
                    <div class='mb-10'>
                        <Projectscreen />
                    </div>
                </div>
                <div>
                    <KeepInTouch />
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default Homescreen;