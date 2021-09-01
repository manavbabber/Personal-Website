import React from 'react';
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
    return (
        <div class='mt-6 text-left text-4xl text-gray-800'>
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