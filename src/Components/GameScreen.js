import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import StatusBar from './StatusBar';
import ProgressBar from './ProgressBar';
import Question from './Question';
import AnswerCard from './AnswerCard';
import ProgressButton from './ProgressButton';
import { nanoid } from 'nanoid';

/*
1) Design 4 Sections of Interface
    - Top (Back button, Topic, Sound Button, Help Button)
    - QUestion Counter && Timer
    - Progress Bar (Optional)
    - Question Card 
        - Question, 4 buttons for answers for selection
*/
export default function GameScreen(props) {
    const [triviaQuestion, setTriviaQuestion] = useState({
        id: "",
        category: "",
        question: "",
        answers: []
      });

    function getTriviaQuestion() {
        const randomNumber = Math.floor(Math.random() * props.triviaData.length);
        setTriviaQuestion({
            category: props.triviaData[randomNumber].category,
            question: props.triviaData[randomNumber].question,
            answers: [
                props.triviaData[randomNumber].correct_answer,
                props.triviaData[randomNumber].incorrect_answers[0],
                props.triviaData[randomNumber].incorrect_answers[1],
                props.triviaData[randomNumber].incorrect_answers[2]
            ]
        })
      }

    useEffect(() => {
        getTriviaQuestion();
    }, [])

    console.log(decodeURIComponent(triviaQuestion.answers))

    const answerCards = triviaQuestion.answers.map(answers => {
        return(
            <AnswerCard 
                key={nanoid()}
                answer={decodeURIComponent(answers)}
            />
        )
    })
    
    return(
        <main className="flex items-center container mx-auto min-h-[100vh]">
            <div className="h-3/6 bg-[#6A5BE2] rounded-3xl w-full items-start">
                <section className="h-2/5">
                    <Heading topic={triviaQuestion.category}/>
                    <StatusBar />
                    <ProgressBar />
                    <Question question={triviaQuestion.question}/>
                </section>
                <section className="h-2/5 grid grid-cols-2 grid-rows-2 justify-items-center my-8">
                    {answerCards}
                </section>
                <section className="h-1/5 mb-8">
                    <ProgressButton />
                </section>
                
            </div>
            
        </main>
    )
}