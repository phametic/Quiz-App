import React from 'react';

export default function SelectionScreen() {

    const titleStyle = "text-3xl text-white tracking-wider text-center"
    return(
        <section className="flex items-center container mx-auto min-h-[100vh]">
            <div className="h-1/5 bg-[#6A5BE2] rounded-3xl w-full items-start">
                <h2 className={titleStyle}>Choose Your Topic!</h2>        
            </div>
            <div className="h-1/5 bg-[#6A5BE2] rounded-3xl w-full items-start">
                <h2 className={titleStyle}>Choose Your Topic!</h2>        
            </div>
        </section>
    )
}