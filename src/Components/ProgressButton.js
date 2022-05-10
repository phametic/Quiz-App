import React from 'react';

export default function ProgressButton(props) {
    return(
        <section 
            className="flex items-center justify-center mx-auto text-center border-slate-900 border-2 bg-white hover:bg-lime-400 w-2/4 md:w-1/4 p-3 md:p-6 text-lg md:text-xl lg:text-3xl rounded-xl cursor-pointer"
            onClick={props.handleClick}
        >
            <button className="font-bold">
                {props.gameStatus ? "Home" : "Next Question"}
            </button>
        </section>
    )
}