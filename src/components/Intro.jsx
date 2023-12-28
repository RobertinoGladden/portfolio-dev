import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Robertino Gladden Narendra</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Front End Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I was a college student relaxing while crafting a program to solve real-life problems in an easy way.
            All the way down if you are curious about me you can come to my{' '}
            <a
               href="https://www.linkedin.com/in/robertinogladdennarendra/"
               target="_blank"
               className="text-red-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               LinkedIn
            </a>{' '}
            for exploring more my journey.
         </p>
         <a
            href="https://drive.google.com/file/d/1_tjbsE1YDlJDladQyp2UCt1jDm8MTSdm/view"
            target="_blank"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            rel="noreferrer noopener"
         >
            My Resume
         </a>
      </div>
   )
}

export default Intro;