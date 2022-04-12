import React, { useState } from 'react';
import Heading from './Heading';
import StatusBar from './StatusBar';
import ProgressBar from './ProgressBar';
import Question from './Question';
import AnswerCard from './AnswerCard';
import ProgressButton from './ProgressButton';

/*
1) Design 4 Sections of Interface
    - Top (Back button, Topic, Sound Button, Help Button)
    - QUestion Counter && Timer
    - Progress Bar (Optional)
    - Question Card 
        - Question, 4 buttons for answers for selection
*/
export default function GameScreen() {
    const [answerCard, setAnswerCard] = useState([]);

    const answerCards = answerCard.map(answer => {
        return (
            <AnswerCard 
                answer="Answer 1"
            />
        )
    })
    
    return(
        <main className="flex items-center container mx-auto min-h-[100vh]">
            <div className="h-3/6 bg-[#6A5BE2] rounded-3xl w-full items-start">
                <section className="h-2/5">
                    <Heading />
                    <StatusBar />
                    <ProgressBar />
                    <Question />
                </section>
                <section className="h-2/5 grid grid-cols-2 grid-rows-2 justify-items-center my-8">
                    <AnswerCard answer="ANSWER 1"/>
                    <AnswerCard answer="ANSWER 1"/>
                    <AnswerCard answer="ANSWER 1"/>
                    <AnswerCard answer="ANSWER 1"/>
                </section>
                <section className="h-1/5 mb-8">
                    <ProgressButton />
                </section>
                
            </div>
            
        </main>
    )
}