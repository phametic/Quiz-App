import React from 'react';

export default function AnswerCard(props) {
    return(
        <div 
            className="flex justify-center items-center h-14 w-28 md:h-28 md:w-72 text-sm md:text-xl text-black font-bold bg-white my-2 md:my-4 rounded-2xl md:rounded-3xl text-center cursor-pointer border-2 border-slate-900 hover:bg-[#2FCC71]"
            onClick={props.handleClick}
        >
            {<div>{props.answer}</div>}
        </div>
    )
}