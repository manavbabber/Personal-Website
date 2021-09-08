import React from "react";

const Aboutscreen = () => {
  return (
  <div id='about'>
    <div class='md:ml-72 grid grid-cols-6 gap-2 text-white'>
        <div class='w-max mx-auto col-span-5 md:col-span-4 text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 sm:w-80 sm:mt-20 md:w-max md:mt-32'>
            <h1 class=' flex justify-center text-4xl font-black mb-8  font-head '>About Me !!! </h1>
            <p class='text-lg flex justify-center leading-15 '>Hi Everyone, I am Manav Babber from Fazilka, India.</p>
            <p class='text-lg flex justify-center leading-15 '>I am a Third year undergraduate Student pursuing BTech in CSE from IIIT UNA.</p>
            <p class='text-lg flex justify-center leading-15 mt-8 '>Apart from coding, some other activities that I love to do!</p>
            <div class='mt-6 flex justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
            </div>
          <ul class='mt-6 mb-12 text-white'>
            <li>
              <p class='text-lg'> /--- Travelling ---\</p>
            </li>
            <li>
              <p class='text-lg'>  /--- Playing Games ---\</p>
            </li>
            <li>
              <p class='text-lg'> /--- Watching Web Series ---\</p>
            </li>
            <li>
              <p class='text-lg'>/--- Listening to Music ---\</p>
            </li>
          </ul>

          <p class='text-2xl font-serif'>"Love to build things that make a difference!"</p>
        </div>
        {/* <div>
          <img class='sm:hidden h-96 mt-36 w-96 ml-12' src='/images/index.jpeg'></img>
        </div> */}
        {/* <div class=' md:mr-48 col-span-1 sm:flex sm:justify-center sm:mt-6 md:mt-20 md:hidden'>
          <img src='/images/p4r.png' alt='PImage'></img>
        </div>
        <div class=' col-span-2 md:flex md:justify-center md:mt-20 sm:hidden'>
          <img src='/images/p3r.png' alt='PImage'></img>
        </div>     */}
    </div>
  </div>
  );
}

export default Aboutscreen;
