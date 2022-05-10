import React from 'react';

export default function Category(props) {
    const style = {
        backgroundColor: props.isSelected ? "#2FCC71" : "white",
        color: props.isSelected ? "white" : "black",
    }

    return(
        <div 
            className="relative border-2 border-black bg-white h-28 w-28 md:h-36 md:w-36 text-sm md:text-lg flex justify-center items-center text-center font-bold rounded-xl cursor-pointer hover:bg-slate-200 hover:text-[#6A5BE2] has-tooltip overflow-visible"
            onClick={props.onClick}
            style={style}
        >
            {(props.invalidChoice && props.isSelected) &&
            <span 
                className="absolute tooltip rounded shadow-lg p-2 bg-gray-100/75 text-red-500 w-40 z-50"
            >
                Not enough questions in this category! ): Please choose a new one.
            </span>}
            <h2 className="">{props.category}</h2>
        </div>
    )
}