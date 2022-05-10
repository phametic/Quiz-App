import React from 'react'
import ProgressButton from './ProgressButton'

export default function ResultsScreen(props) {

    
    const totalPercentage = ((props.correctCounter/props.questionCounter)*100).toFixed(1);
    function displayMessage(totalPercentage) {
        switch(true){
            case totalPercentage > 0 && totalPercentage < 25:
                return "Better Luck Next Time!"
            break;
            case totalPercentage > 25 && totalPercentage < 50:
                return "Could've Been Better!"
            break;
            case totalPercentage > 50 && totalPercentage < 75:
                return "Wow, Great Job!"
            break;
            case totalPercentage > 75 && totalPercentage < 100:
                return "Wow, You Are The Trivia Master!"
            break;
            default:
            return "Not Too Bad!"
        }
        
    }

    return(
        <div className="h-3/6 bg-[#6A5BE2] rounded-3xl w-full items-start">
            <section className="h-2/6 py-8 ">
                <h2 className="text-3xl md:text-4xl text-white tracking-wider text-center font-bold">
                    Results
                </h2>
                <hr className="w-9/12 mx-auto mt-4 border-2" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white tracking-wider text-center mt-8 font-bold">
                    {displayMessage(totalPercentage)}
                </h2>
            </section>
            <div className="w-11/12 mx-auto">
                <section className="h-2/6 py-4 grid grid-cols-3 justify-items-center text-center gap-3">
                    <h2 className="w-20 md:w-48 lg:w-56 text-xl md:text-2xl lg:text-4xl text-[#2FCC71] font-bold">
                        Correct Answers
                    </h2>
                    <h2 className="w-20 md:w-48 lg:w-56 text-xl md:text-2xl lg:text-4xl text-red-500 font-bold">
                        Incorrect Answers
                    </h2>
                    <h2 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
                        Total %
                    </h2>
                </section>
                <section className="h-2/6 py-4 grid grid-cols-3 justify-items-center gap-3">
                    <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-bold">{props.correctCounter}</h2>
                    <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-bold">{props.incorrectCounter}</h2>
                    <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-bold">{totalPercentage} %</h2>
                </section>
            </div>
            
            <section className="h-2/6 my-8">
                <ProgressButton handleClick={props.handleClick} gameStatus={props.resultsScreen}/>
            </section>
                
        </div> 
    )
}