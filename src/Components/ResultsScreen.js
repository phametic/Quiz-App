import React from 'react'
import ProgressButton from './ProgressButton'

export default function ResultsScreen(props) {
    return(
        <div className="h-3/6 bg-[#6A5BE2] rounded-3xl w-full items-start">
            <section className="h-2/6 py-8 ">
                <h2 className="text-4xl text-white tracking-wider text-center ml-8 font-bold">Results</h2>
                <hr className="w-8/12 mx-auto mt-4 border-2" />
                <h2 className="text-5xl text-[#2FCC71] tracking-wider text-center mt-8 font-bold">Excellent Job!</h2>
            </section>
            <div className="w-11/12 mx-auto">
                <section className="h-2/6 py-4 grid grid-cols-3 justify-items-center text-center">
                    <h2 className="w-48 text-3xl text-[#2FCC71] font-bold">Correct Answers</h2>
                    <h2 className="w-48 text-3xl text-red-500 font-bold">Incorrect Answers</h2>
                    <h2 className="text-3xl text-white font-bold">Total</h2>
                </section>
                <section className="h-2/6 py-4 grid grid-cols-3 justify-items-center">
                    <h2 className="text-3xl text-white font-bold">{props.correctCounter}</h2>
                    <h2 className="text-3xl text-white font-bold">{props.incorrectCounter}</h2>
                    <h2 className="text-3xl text-white font-bold">{((props.correctCounter/props.questionCounter)*100).toFixed(1)} %</h2>
                </section>
            </div>
            
            <section className="h-2/6 my-8">
                <ProgressButton handleClick={props.handleClick} gameStatus={props.resultsScreen}/>
            </section>
                
        </div> 
    )
}