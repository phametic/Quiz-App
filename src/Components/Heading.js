import React from 'react';
import MuteButton from './MuteButton';
import { IoChevronBackCircleOutline } from 'react-icons/io5'

export default function Heading(props) {
    return(
        <section className="mt-8 h-16">
                <div className="flex flex-row justify-center items-center gap-5 md:gap-32">
                    <div className="flex justify-center items-center">
                        <button 
                            className="w-10 text-2xl md:text-4xl text-white hover:text-lime-400"
                            onClick={props.handleBackButton}
                        >
                            <IoChevronBackCircleOutline/>
                        </button>
                    </div>
                    <h2 className="text-lg md:w-80 md:text-3xl text-white tracking-wider text-center font-bold">{
                        decodeURIComponent(props.topic)}
                    </h2>
                    <MuteButton handleMuteButton={props.handleMuteButton} playSfx={props.playSfx}/>
                </div>
        </section>
    )
}