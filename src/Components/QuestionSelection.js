import React from 'react';

export default function QuestionSelection(props) {
    return(
        <form className="w-9/12 flex flex-row gap-10 justify-center mx-auto text-3xl">
        <div>
            <label>
                <input 
                    type="radio"
                    name="questions"
                    value="10"
                    checked={props.selectScreenData.questions === "10"}
                    onChange={props.handleChange}
                    className=""
                />
                10
            </label>
        </div>
        <div>
            <label>
                <input 
                    type="radio"
                    name="questions"
                    value="15"
                    checked={props.selectScreenData.questions === "15"}
                    onChange={props.handleChange}
                    className=""
                />
                15
            </label>
        </div>
        <div>
            <label>
                <input 
                    type="radio"
                    name="questions"
                    value="25"
                    checked={props.selectScreenData.questions === "25"}
                    onChange={props.handleChange}
                    className=""
                />
                25
            </label>
        </div>
    </form>
    )
}