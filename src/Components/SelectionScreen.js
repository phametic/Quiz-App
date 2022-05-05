import React, { useEffect, useState } from 'react';
import QuestionSelection from './QuestionSelection';
import DifficultySelection from './DifficultySelection';
import PlayButton from './PlayButton'
import Category from './Category';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { AiOutlineSound } from 'react-icons/ai';
import Flash from 'react-reveal/Flash';

export default function SelectionScreen(props) {

    const [selectScreenData, setSelectScreenData] = useState({
        questions: "10",
        difficulty: "easy",
        category: 9,
    });

    const [invalidChoice, setInvalidChoice] = useState(false);

    async function fetchData() {
        const res = await fetch(`https://opentdb.com/api.php?amount=${selectScreenData.questions}&category=${selectScreenData.category}&difficulty=${selectScreenData.difficulty}&encode=url3986`);
        const data = await res.json();
        if(data.response_code === 1) {
            console.log("No trivia data.");
            setInvalidChoice(true);
        } else {
            props.setTriviaData(data.results);
            setInvalidChoice(false);
        }
        
    }

    useEffect(() => {
        fetchData();
        switch(selectScreenData.difficulty) {
            case "easy":
                props.setCounter(20)
            break;
            case "medium":
                props.setCounter(15)
            break;
            case "hard":
                props.setCounter(10)
            break;
            default:
                props.setCounter(20)
            break;
        }
    }, [selectScreenData])

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setSelectScreenData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    //Handle clicking of categories card
    function handleOnClick(id) {
        setSelectScreenData(prevFormData => {
                return {
                    ...prevFormData,
                    category: id,
                } 
        })
    }

    function handlePlayButton() {
        console.log("Play button clicked.");
        if(!invalidChoice) {
            props.setGameScreen(prev => !prev);
            props.setSelectScreen(prev => !prev);
        }
    }

    function handleBackButton() {
        props.setSelectScreen(prev => !prev);
        props.setMainScreen(prev => !prev)
    }

    const categories = props.categoriesData.map(category => {
        return(
            <Category 
                key={category.id}
                id={category.id}
                category={category.name}
                onClick={() => handleOnClick(category.id)}
                isSelected={selectScreenData.category === category.id ? true : false}
                invalidChoice={invalidChoice}
                className=""
            />
        )
    })

    //console.log(categories)

    const titleStyle = "text-3xl text-white tracking-wider text-center mb-4"
    return(
        <section className="flex container items-center mx-auto min-h-[100vh] select-none">
            <section className="h-3/6 gradientBg rounded-3xl w-full items-start ">
                <section className="h-1/5 mt-8 flex flex-row justify-center gap-32">
                    <button 
                        className="w-10 text-4xl text-white hover:text-lime-400"
                        onClick={handleBackButton}
                    >
                        <IoChevronBackCircleOutline/>
                    </button>
                    <h2 className={titleStyle}>Trivia Selection</h2>
                    <div className="">
                        <button 
                        className="w-10 text-4xl text-white hover:text-lime-400">
                            <AiOutlineSound/>
                        </button>
                    </div>
                </section>
                <section className="h-1/5 my-6">
                    <h2 className={titleStyle}>Total Questions</h2>
                        <QuestionSelection selectScreenData={selectScreenData} handleChange={handleChange}/>
                  </section>
                <section className="h-1/5 my-6">
                    <h2 className={titleStyle}>Difficulty</h2>
                    <DifficultySelection selectScreenData={selectScreenData} handleChange={handleChange}/>
                </section>
                <section className="h-1/10 my-6">
                    <h2 className={titleStyle}>Categories</h2>
                </section>
                <section className="h-96 w-11/12 mx-auto flex flex-wrap justify-center gap-8 my-4 overflow-y-scroll cats">
                    {categories}
                </section>
                <PlayButton 
                    onClick={handlePlayButton}
                />
            </section>
        </section>
    )
}