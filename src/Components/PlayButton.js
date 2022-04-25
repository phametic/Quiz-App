import React from 'react';

export default function PlayButton(props) {
    return(
        <section 
            className="my-12 h-1/10 flex justify-center mx-auto text-center border-slate-900 border-2 bg-white hover:bg-[#2FCC71] hover:text-[#6A5BE2] w-1/4 h-16 rounded-xl cursor-pointer"
            onClick={props.onClick}
        >
            <button className="font-bold">Play</button>
        </section>
    )
}