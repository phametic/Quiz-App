import React from 'react';


export default function MainScreen(props) {
    return(
        <div className="flex container items-center mx-auto min-h-[100vh]">
            <div className="relative flex flex-col justify-center items-center bg-[#6A5BE2] min-h-[50vh] w-full rounded-3xl overflow-hidden">
                <h1 className="text-6xl my-4 font-bold">Trivio</h1>
                <span className="text-3xl my-4 font-bold">Test your knowledge with Trivio!</span>
                <button 
                    className="bg-[#F5F7FB] hover:bg-[#4D5B9E] hover:text-[#F5F7FB] text-[#7060E1]} px-12 py-6 rounded-full my-4 text-2xl font-bold"
                    onClick={props.clickHandler}
                >
                    GET STARTED</button>
                <div className="blob-1 bg-[#FFFAD1] w-80 h-80 absolute rotate-45"></div>
                <div className="blob-2 bg-[#DEEBF8] w-80 h-80 absolute rotate-12"></div>
            </div>
                
        </div>
    )
        
        
}