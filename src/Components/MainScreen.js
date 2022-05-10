import React from 'react';
import useSound from 'use-sound';
import hoverSfx from '../Assets/Sounds/hover_sound.mp3';

export default function MainScreen(props) {

    const [play] = useSound(hoverSfx);

    function onEnterHandle() {
    if(props.playSfx)
        play();
    }

    return(
        
        <div className="flex container items-center mx-auto min-h-[100vh]">
            <div className="relative flex flex-col justify-center items-center gradientBg min-h-[50vh] w-full rounded-3xl overflow-hidden">
                <h1 className="text-6xl lg:text-7xl my-4 font-bold text-white">Trivio</h1>
                <span className="text-lg md:text-3xl lg:text-4xl my-4 font-bold text-white text-center">Test your knowledge with Trivio!</span>
                <button 
                    className="bg-[#F5F7FB] hover:bg-[#4D5B9E] hover:text-[#F5F7FB] text-[#7060E1]} px-12 py-6 rounded-full my-4 text-lg md:text-2xl lg:text-3xl font-bold"
                    onClick={props.clickHandler}
                    onMouseEnter={() => onEnterHandle()}
                >
                    GET STARTED</button>
                <div className="blob-1 bg-[#FFFAD1] w-32 h-32 ml-[100%] mb-[500px] lg:mb-[70%] md:w-80 md:h-80 lg:w-96 lg:h-96 absolute rotate-45"></div>
                <div className="blob-2 bg-[#DEEBF8] w-32 h-32 mr-[100%] mt-[500px] lg:mt-[70%] md:w-80 md:h-80 lg:w-96 lg:h-96 absolute rotate-12"></div>
            </div>
        </div>
    )
        
        
}