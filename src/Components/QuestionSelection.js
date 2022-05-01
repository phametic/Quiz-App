import React from 'react';

export default function QuestionSelection(props) {

    const radioStyle = "rounded-xl"

    return(
        <form className=" w-9/12 flex flex-row gap-10 justify-center mx-auto text-3xl form">
        <div className="">
            <input 
                type="radio"
                name="questions"
                value="10"
                checked={props.selectScreenData.questions === "10"}
                onChange={props.handleChange}
                id="questions_1"
            />
            <label htmlFor="questions_1" className={radioStyle}>
                <span>10</span>
            </label>
        </div>
        <div>
            <input 
                type="radio"
                    name="questions"
                    value="15"
                    checked={props.selectScreenData.questions === "15"}
                    onChange={props.handleChange}
                    id="questions_2"
                    className=""
                />
            <label htmlFor="questions_2" className={radioStyle}>
                <span>15</span>
            </label>
        </div>
        <div>
            <input 
                type="radio"
                name="questions"
                value="25"
                checked={props.selectScreenData.questions === "25"}
                onChange={props.handleChange}
                className=""
                id="questions_3"
            />
            <label htmlFor="questions_3" className={radioStyle}>
                <span>25</span>
            </label>
        </div>
    </form>
    )
}