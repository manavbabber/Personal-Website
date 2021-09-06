import React from 'react';
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
    return (
        <div class='mt-6 text-left text-2xl text-gray-500'>
            <Typewriter
                    options={{
                        strings: [
                            "MERN Stack Developer",
                            "Competitive Programmer",
                            "ML Enthusiast",
                            "Open Source Contributor",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />    
        </div>
    );
}

export default TypeWriter;