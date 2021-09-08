import React from 'react';
import Footer from '../components/Footer';

const KeepInTouch = () => {
    return(
        <div class='h-60 bg-black text-yellow-400'>
            <hr />
            <div class='grid sm:grid-cols-3 md:grid-cols-2 justify-evenly gap-9'>
                <div>
                    <h1 class='sm:mt-12 md:mt-12 sm:col-span-1 md:col-span-1 gap-0 my-auto text-center text-3xl'>Keep in Touch</h1>
                    <div>
                        <Footer />
                    </div>
                </div>
                
                <div class='sm:col-span-2 md:col-span-1'>
                    <div>
                        <input type='email' class='mt-9 mb-7 rounded-md p-2 sm:w-96 bg-gray-900 '  placeholder='Email Address'></input>
                    </div>
                    <div>
                        <textarea placeholder='Message' class='sm:w-96 p-2 bg-gray-900'></textarea>
                    </div>
                    <div>
                        <button class='mt-6 rounded-full sm:w-96 bg-gray-900'>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeepInTouch;
