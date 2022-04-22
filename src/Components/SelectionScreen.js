import React, { useState } from 'react';
import QuestionSelection from './QuestionSelection';
import DifficultySelection from './DifficultySelection';
import Category from './Category';

export default function SelectionScreen(props) {

    const [selectScreenData, setSelectScreenData] = useState({
        questions: "10",
        difficulty: "easy",
        topic: 9
    })

    const [triviaData, setTriviaData] = useState([]);

    async function fetchData(numOfQuestions) {
        const res = await fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy`);
        const data = await res.json();
        setTriviaData(data.results)
      }

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setSelectScreenData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const categories = props.categories.map(category => {
        return(
            <Category 
                key={category.id}
                id={category.id}
                category={category.name}
            />
        )
    })

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
                <section className=" my-12 h-1/10 flex justify-center mx-auto text-center border-slate-900 border-2 bg-white hover:bg-lime-400 w-1/4 h-16 rounded-xl cursor-pointer">
                    <button>Play</button>
                </section>
            </section>
        </section>
    )
}