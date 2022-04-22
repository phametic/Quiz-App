import React from 'react';

export default function DifficultySelect(props) {
    return(
        <form className="w-9/12 flex flex-row gap-10 justify-center mx-auto text-3xl">
            <div>
                <label>
                    <input 
                        type="radio"
                        name="difficulty"
                        value="easy"
                        checked={props.selectScreenData.difficulty === "easy"}
                        onChange={props.handleChange}
                        className=""
                    />
                    Easy
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="radio"
                        name="difficulty"
                        value="medium"
                        checked={props.selectScreenData.difficulty === "medium"}
                        onChange={props.handleChange}
                        className=""
                    />
                    Medium
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="radio"
                        name="difficulty"
                        value="hard"
                        checked={props.selectScreenData.difficulty === "hard"}
                        onChange={props.handleChange}
                        className=""
                    />
                    Hard
                </label>
            </div>
        </form>
    )
}