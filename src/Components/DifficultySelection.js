import React from 'react';

export default function DifficultySelect(props) {
    
    const radioStyle = "rounded-xl"

    return(
        <form className="w-9/12 flex flex-row gap-10 justify-center mx-auto text-3xl form">
            <div>
                <input 
                    type="radio"
                    name="difficulty"
                    value="easy"
                    checked={props.selectScreenData.difficulty === "easy"}
                    onChange={props.handleChange}
                    className=""
                    id="easy"
                />
                <label htmlFor="easy" className={radioStyle}>
                    <span>Easy</span>
                </label>
            </div>
            <div>
                <input 
                    type="radio"
                    name="difficulty"
                    value="medium"
                    checked={props.selectScreenData.difficulty === "medium"}
                    onChange={props.handleChange}
                    className=""
                    id="medium"
                />
                <label htmlFor="medium" className={radioStyle}>
                    <span>Medium</span>
                </label>
            </div>
            <div>
                <input 
                    type="radio"
                    name="difficulty"
                    value="hard"
                    checked={props.selectScreenData.difficulty === "hard"}
                    onChange={props.handleChange}
                    className=""
                    id="hard"
                />
                <label htmlFor="hard" className={radioStyle}>
                    <span>Hard</span>
                </label>
            </div>
        </form>
    )
}