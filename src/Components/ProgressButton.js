import React from 'react';

export default function ProgressButton(props) {
    return(
        <section className="mx-auto text-center border-slate-900 border-2 bg-white hover:bg-[#FEB1BD] w-1/3 px-4 py-4 rounded-xl">
            <button
                onClick={props.handleClick}
            >
                Next Question
            </button>
        </section>
    )
}