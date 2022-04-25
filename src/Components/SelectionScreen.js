import React, { useEffect, useState } from 'react';
import QuestionSelection from './QuestionSelection';
import DifficultySelection from './DifficultySelection';
import PlayButton from './PlayButton'
import Category from './Category';

export default function SelectionScreen(props) {

    const [selectScreenData, setSelectScreenData] = useState({
        questions: "10",
        difficulty: "easy",
        category: 9,
    });

    async function fetchData() {
        const res = await fetch(`https://opentdb.com/api.php?amount=${selectScreenData.questions}&category=${selectScreenData.category}&difficulty=${selectScreenData.difficulty}&encode=url3986`);
        const data = await res.json();
        props.setTriviaData(data.results);
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
        props.setGameScreen(prev => !prev)
        props.setSelectScreen(prev => !prev)
    }

    const categories = props.categoriesData.map(category => {
        return(
            <Category 
                key={category.id}
                id={category.id}
                category={category.name}
                onClick={() => handleOnClick(category.id)}
                isSelected={selectScreenData.category === category.id ? true : false}
            />
        )
    })

    //console.log(categories)

    const titleStyle = "text-3xl text-white tracking-wider text-center"
    return(
        <section className="flex items-center container mx-auto min-h-[50vh]">
            <section className="h-3/6 bg-[#6A5BE2] rounded-3xl w-full items-start">
                <section className="h-1/5 mt-8">
                    <h2 className={titleStyle}>Choose Your Topic</h2>
                </section>
                <section className="h-1/5 my-4">
                    <h2 className={titleStyle}>Number of Questions</h2>
                    <QuestionSelection selectScreenData={selectScreenData} handleChange={handleChange}/>
                </section>
                <section className="h-1/5 my-4">
                    <h2 className={titleStyle}>Difficulty</h2>
                    <DifficultySelection selectScreenData={selectScreenData} handleChange={handleChange}/>
                </section>
                <section className="h-1/10 my-4">
                    <h2 className={titleStyle}>Categories</h2>
                </section>
                <section className="h-1/5 w-11/12 mx-auto flex justify-center flex-wrap gap-8 my-4">
                    {categories}
                </section>
                <PlayButton 
                    onClick={handlePlayButton}
                />
            </section>
        </section>
    )
}