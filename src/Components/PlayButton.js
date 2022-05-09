import React from 'react';

export default function PlayButton(props) {
    return(
        <section 
            className="my-12 flex justify-center mx-auto text-center border-slate-900 border-2 bg-white hover:bg-[#2FCC71] hover:text-white w-2/4 py-4 text-lg md:w-1/4 md:py-6 md:text-xl lg:text-2xl rounded-xl cursor-pointer"
            onClick={props.onClick}
        >
            <button className="font-bold">Play</button>
        </section>
    )
}