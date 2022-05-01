import React from 'react';
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { AiOutlineSound } from 'react-icons/ai'

export default function Heading(props) {
    return(
        <section className="mt-8 h-16">
                <div className="flex flex-row justify-center gap-32">
                    <div>
                        <button 
                            className="w-10 text-4xl text-white hover:text-lime-400"
                            onClick={props.handleBackButton}
                        >
                            <IoChevronBackCircleOutline/>
                        </button>
                    </div>
                    <h2 className="w-80 text-3xl text-white tracking-wider text-center ml-8 font-bold">{
                        decodeURIComponent(props.topic)}
                    </h2>
                    <div className="">
                        <button className="w-10 text-4xl text-white hover:text-lime-400"><AiOutlineSound/></button>
                    </div>
                </div>
        </section>
    )
}