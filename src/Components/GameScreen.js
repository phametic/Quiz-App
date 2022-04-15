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

    const [questionCounter, setQuestionCounter] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [correctCounter, setCorrectCounter] = useState(0);
    const [incorrectCounter, setIncorrectCounter] = useState(0);

    function getTriviaQuestion(questionNum) {
        setTriviaQuestion({
            category: props.triviaData[questionNum].category,
            question: props.triviaData[questionNum].question,
            answers: [
                props.triviaData[questionNum].correct_answer,
                props.triviaData[questionNum].incorrect_answers[0],
                props.triviaData[questionNum].incorrect_answers[1],
                props.triviaData[questionNum].incorrect_answers[2]
            ]
        })
        setTotalQuestions(props.triviaData.length);
      }

    useEffect(() => {
        getTriviaQuestion(questionCounter);
    }, [questionCounter])

    function shuffle(arr) {
        var j, x, index;
        for (index = arr.length - 1; index > 0; index--) {
            j = Math.floor(Math.random() * (index + 1));
            x = arr[index];
            arr[index] = arr[j];
            arr[j] = x;
        }
        return arr;
    }

    console.log(triviaQuestion.answers)

    const answerCards = shuffle(triviaQuestion.answers).filter((element) => {return element !== undefined}).map(answers => {
        return(
            <AnswerCard 
                key={nanoid()}
                answer={decodeURIComponent(answers)}
            />
        )
    })

    function handleClick() {
        console.log("Button Pressed!");
        setQuestionCounter(prev => prev + 1)
        console.log(questionCounter)
    }
    
    return(
        <main className="flex items-center container mx-auto min-h-[100vh]">
            <div className="h-3/6 bg-[#6A5BE2] rounded-3xl w-full items-start">
                <section className="h-2/5">
                    <Heading topic={triviaQuestion.category}/>
                    <StatusBar totalQuestions={totalQuestions} currentQuestion={questionCounter}/>
                    <ProgressBar />
                    <Question question={triviaQuestion.question}/>
                </section>
                <section className="h-2/5 grid grid-cols-2 grid-rows-2 justify-items-center my-8">
                    {answerCards}
                </section>
                <section className="h-1/5 mb-8">
                    <ProgressButton handleClick={handleClick}/>
                </section>
                
            </div>
            
        </main>
    )
}