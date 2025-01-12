import React from "react";
import Typewriter from 'typewriter-effect';

const TypingText = () => {
  return (
    <h2 className='pt-5 pr-2 text-4xl font-medium text-red-500 md:text-5xl animate-jump' style={{ fontFamily: 'Anton, sans-serif' }}>
    <Typewriter
    options={{
        strings: [
            'Graphic Designer',
            'Video Editor',
        ],
        autoStart: true,
        loop: true,
    }}
    />
    </h2>
  );
};

export default TypingText;