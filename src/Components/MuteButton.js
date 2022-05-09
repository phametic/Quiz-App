import React from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi'

export default function MuteButton(props) {

    return(
        <div className="flex justify-center items-center">
            <button 
                className="w-10 text-2xl md:text-4xl text-white hover:text-lime-400"
                onClick={props.handleMuteButton}
            >
                {props.playSfx ? <FiVolume2 /> : <FiVolumeX />}
            </button>
        </div>
    )
}