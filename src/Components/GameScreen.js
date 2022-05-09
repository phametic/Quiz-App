import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import StatusBar from './StatusBar';
import ProgressBar from './ProgressBar';
import Question from './Question';
import AnswerCard from './AnswerCard';
//import ProgressButton from './ProgressButton';
import ResultsScreen from './ResultsScreen'
import { nanoid } from 'nanoid';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import clickSfx from '../Assets/Sounds/click_sfx.mp3';

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

    const [newQuestion, setNewQuestion] = useState(false);

    const [noAnswerSelected, setNoAnswerSelected] = useState(false);

    const [playClickSfx] = useSound(
        clickSfx,
        { volume: 0.4 }
        );

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

    useEffect(() => {
        if(questionCounter < props.triviaData.length) {
            console.log("Next question.")
            getTriviaQuestion(questionCounter);
        } else {
            setResultsScreen(true);
        }
    }, [questionCounter])

    const answerCards = triviaQuestion.answers.filter((element) => {return element !== undefined}).map(answers => {
        return(
            <Fade big spy={questionCounter}>
                <AnswerCard 
                    key={nanoid()}
                    answer={decodeURIComponent(answers)}
                    handleClick={() => checkAnswer(decodeURIComponent(answers))}
                />   
            </Fade>
        )
    });

    function resetGame() {
        props.setScreen(true);
        props.setGameScreen(prev => !prev)
        setQuestionCounter(0);
        setCorrectCounter(0);
        setIncorrectCounter(0);
    }

    //For Home/Continue Button
    function handleClick() {
        if(!resultsScreen) {
            if(props.playSfx)
                playClickSfx();
            nextQuestion();
        } else {
            if(props.playSfx)
                playClickSfx();
            setResultsScreen(prev => !prev)
            setNewQuestion(prev => !prev)
            resetGame();
        }
    }

    function handleBackButton() {
        if(props.playSfx)
            playClickSfx();
            resetGame();
    }

    function nextQuestion() {
        if(props.playSfx)
            playClickSfx();
        setQuestionCounter(prev => prev + 1);
        setNewQuestion(prev => !prev);
    }

    //Answer Card Click Handle
    function checkAnswer(answer) {
        const selectedAnswer = answer;
        //Check to see if the player has selected the correct answer
        //If its correct, increment the correct counter and go to next question
            if(selectedAnswer === decodeURIComponent(triviaQuestion.correctAnswer)) {
                setCorrectCounter(prev => prev + 1);
                nextQuestion();
            } else {
                //if not add to the incorrect answer and move on to next question regardless
                //TODO: Add in button animation for correct / incorrect answer 
                setIncorrectCounter(prev => prev + 1)
                nextQuestion();
            }
            
    }

    return(
        <main className="flex items-center container mx-auto min-h-[100vh] ">

            {resultsScreen ? 
                <ResultsScreen correctCounter={correctCounter} incorrectCounter={incorrectCounter} handleClick={handleClick} resultsScreen={resultsScreen} questionCounter={questionCounter}/>
            : 
                <section className="h-3/6 gradientBg rounded-3xl w-full items-start">
                    <section className="h-2/5">
                        <Heading topic={triviaQuestion.category} handleBackButton={handleBackButton} handleMuteButton={props.handleMuteButton} playSfx={props.playSfx}/>
                        <StatusBar totalQuestions={totalQuestions} currentQuestion={questionCounter} counter={props.counter} setCounter={props.setCounter} nextQuestion={nextQuestion} setIncorrectCounter={setIncorrectCounter}/>
                        <ProgressBar progressed={Math.round(((questionCounter + 1) / totalQuestions) * 100)}/>
                        <Slide left spy={questionCounter}>
                            <Question question={triviaQuestion.question}/>
                        </Slide>
                    </section>
                    <section className="h-2/5 grid grid-cols-2 grid-rows-2 mb-6 w-10/12 justify-items-center mx-auto">
                        {newQuestion ? shuffle(answerCards) : answerCards}
                    </section>
                    {/* <section className="h-1/5 mb-8">
                        <ProgressButton handleClick={handleClick} gameStatus={resultsScreen}/>
                    </section> */}
                </section>
            }
        </main>
    )
}