import React from 'react';


export default function MainScreen(props) {
    return(
        <div className="flex container items-center mx-auto min-h-[100vh]">
            <div className="relative flex flex-col justify-center items-center bg-[#6A5BE2] min-h-[50vh] w-full rounded-3xl">
                <h1 className="text-6xl my-4">Trivio</h1>
                <span className="text-3xl my-4">Test your knowledge with Trivio!</span>
                <button 
                    className="bg-[#F5F7FB] hover:bg-[#4D5B9E] hover:text-[#F5F7FB] text-[#7060E1]} px-12 py-6 rounded-full my-4 text-2xl"
                    onClick={props.clickHandler}
                >
                    GET STARTED</button>
                
            </div>
                
        </div>
    )
        
        
}