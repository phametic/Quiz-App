import React, { useState } from 'react';

export default function Category(props) {
    const style = {
        backgroundColor: props.isSelected ? "#2FCC71" : "white",
        color: props.isSelected ? "white" : "black",
    }

    return(
        <div 
            className="border-2 border-black bg-white h-36 w-36 flex justify-center items-center text-center font-bold rounded-xl cursor-pointer hover:bg-slate-200 hover:text-[#6A5BE2] has-tooltip"
            onClick={props.onClick}
            style={style}
        >
            {props.invalidChoice && props.isSelected &&
            <span 
                className="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8"
            >
                There are no questions or not enough questions in this category! ): Please choose a new one.
            </span>}
            <h2 className="">{props.category}</h2>
        </div>
    )
}