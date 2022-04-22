import React from 'react';

export default function Category(props) {
    return(
        <div className="bg-white h-32 w-32 flex justify-center items-center text-center font-bold rounded-xl cursor-pointer hover:bg-slate-200 hover:text-[#6A5BE2]">
            <h2>{props.category}</h2>
        </div>
    )
}