import React from 'react';

const KeepInTouch = () => {
    return(
        <div class='h-60' style={{backgroundColor:'#3498DB'}}>
            <div class='grid sm:grid-cols-3 md:grid-cols-2 justify-evenly gap-9'>
                <h1 class='sm:col-span-1 md:col-span-1 gap-0 my-auto font-keep text-center text-6xl'>Keep in Touch</h1>
                <div class='sm:col-span-2 md:col-span-1'>
                    <div>
                        <input type='email' class='mt-9 mb-7 rounded-md p-2 sm:w-96 ' style={{backgroundColor:'#1D6FA5'}} placeholder='Email Address'></input>
                    </div>
                    <div>
                        <textarea placeholder='Message' class='sm:w-96 p-2' style={{backgroundColor:'#1D6FA5'}}></textarea>
                    </div>
                    <div>
                        <button class='mt-6 bg-white rounded-full sm:w-96 '>
                            Send Message
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default KeepInTouch;