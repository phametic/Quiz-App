import React from 'react';

export default function AnswerCard(props) {
    return(
        <div 
            className="flex justify-center items-center h-28 w-72 text-xl text-black font-bold bg-white my-4 rounded-3xl text-center cursor-pointer border-2 border-slate-900 hover:bg-[#2FCC71]"
            onClick={props.handleClick}
        >
            {<div>{props.answer}</div>}
        </div>
    )
}