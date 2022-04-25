import React from 'react';

export default function Category(props) {
    const style = {
        backgroundColor: props.isSelected ? "#2FCC71" : "white",
        color: props.isSelected ? "maroon" : "black",
    }
    return(
        <div 
            className="border-2 border-black bg-white h-36 w-36 flex justify-center items-center text-center font-bold rounded-xl cursor-pointer hover:bg-slate-200 hover:text-[#6A5BE2]"
            onClick={props.onClick}
            style={style}
        >
            <h2 className="">{props.category}</h2>
        </div>
    )
}