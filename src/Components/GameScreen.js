import React from 'react'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

/*
1) Design 4 Sections of Interface
    - Top (Back button, Topic, Sound Button, Help Button)
    - QUestion Counter && Timer
    - Progress Bar (Optional)
    - Question Card 
        - Question, 4 buttons for answers for selection
*/

export default function GameScreen() {
    return(
        <section className="flex container items-center mx-auto min-h-[100vh]">
            <div className="bg-[#6A5BE2] min-h-[50vh] w-full rounded-3xl">
                <div className="grid grid-cols-3 justify-items-center">
                    <button className="w-16 bg-red-400"><IoChevronBackCircleOutline/></button>
                    <h2 className="w-32 bg-red-400">Topic</h2>
                    <div>
                        <button className="w-16 bg-red-400">Mute Button</button>
                        <button className="w-16 bg-red-400">Help Button</button>
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}