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
        correctAnswer: "",
        answers: []
      });

    const [questionCounter, setQuestionCounter] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [correctCounter, setCorrectCounter] = useState(0);
    const [incorrectCounter, setIncorrectCounter] = useState(0);
    const [resultsScreen, setResultsScreen] = useState(false);

    function getTriviaQuestion(questionNum) {
        setTriviaQuestion({
            category: props.triviaData[questionNum].category,
            question: props.triviaData[questionNum].question,
            correctAnswer: props.triviaData[questionNum].correct_answer,
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
        if(questionCounter < 10) {
            getTriviaQuestion(questionCounter);
        } else {
            console.log("Game Done.")
            setResultsScreen(true);
        }
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

    const answerCards = shuffle(triviaQuestion.answers).filter((element) => {return element !== undefined}).map(answers => {
        return(
            <AnswerCard 
                key={nanoid()}
                answer={decodeURIComponent(answers)}
                handleClick={() => checkAnswer(decodeURIComponent(answers))}
            />
        )
    })

    function handleClick() {
        if(!resultsScreen) {
            setQuestionCounter(prev => prev + 1)
            console.log(questionCounter)
        } else {
            props.setScreen(true)
        }
        
    }

    console.log(triviaQuestion.correctAnswer)

    function checkAnswer(answer) {
        const selectedAnswer = answer;

        //Check to see if the player has selected the correct answer
        //If its correct, increment the correct counter and go to next question
        if(selectedAnswer === decodeURIComponent(triviaQuestion.correctAnswer)) {
            setCorrectCounter(prev => prev + 1)
            setQuestionCounter(prev => prev + 1)
        } else {
            //if not add to the incorrect answer and move on to next question regardless
            //TODO: Add in button animation for correct / incorrect answer 
            console.log("Incorrect Answer Selected : " + selectedAnswer);
            setIncorrectCounter(prev => prev + 1)
            setQuestionCounter(prev => prev + 1)
        }
    }
    
    return(
        <main className="flex items-center container mx-auto min-h-[100vh]">

            {resultsScreen ? 
                <div className="h-3/6 bg-[#6A5BE2] rounded-3xl w-full items-start">
                <section className="h-2/6 py-8 ">
                    <h2 className="text-4xl text-white tracking-wider text-center ml-8 font-bold">Results</h2>
                    <hr className="w-8/12 mx-auto mt-4 border-2" />
                    <h2 className="text-5xl text-green-400 tracking-wider text-center mt-8 font-bold">Excellent Job!</h2>
                </section>
                <div className="w-11/12 mx-auto">
                    <section className="h-2/6 py-4 grid grid-cols-3 justify-items-center text-center">
                        <h2 className="w-48 text-3xl text-white font-bold bg-red-400">Correct Answers</h2>
                        <h2 className="w-48 text-3xl text-white font-bold bg-red-400">Incorrect Answers</h2>
                        <h2 className="text-3xl text-white font-bold">Total</h2>
                    </section>
                    <section className="h-2/6 py-4 grid grid-cols-3 justify-items-center">
                        <h2 className="text-3xl text-white font-bold">{correctCounter}</h2>
                        <h2 className="text-3xl text-white font-bold">{incorrectCounter}</h2>
                        <h2 className="text-3xl text-white font-bold">{(correctCounter/questionCounter)*100} %</h2>
                    </section>
                </div>
                
                <section className="h-2/6 my-8">
                    <ProgressButton handleClick={handleClick} gameStatus={resultsScreen}/>
                </section>
                
            </div> 
            : 
                <div className="h-3/6 bg-[#6A5BE2] rounded-3xl w-full items-start">
                    <section className="h-2/5">
                        <Heading topic={triviaQuestion.category}/>
                        <StatusBar totalQuestions={totalQuestions} currentQuestion={questionCounter}/>
                        <ProgressBar />
                        <Question question={triviaQuestion.question}/>
                    </section>
                    <section className="h-2/5 grid grid-cols-2 grid-rows-2 mb-6 w-10/12 justify-items-center mx-auto">
                        {answerCards}
                    </section>
                    <section className="h-1/5 mb-8">
                        <ProgressButton handleClick={handleClick} gameStatus={resultsScreen}/>
                    </section>
                    
                </div>
            }
            
        </main>
    )
}