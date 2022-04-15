import React from 'react';

export default function StatusBar(props) {
    return(
        <section className="grid grid-cols-2 justify-items-center text-white text-2xl my-6">
            <p>{props.currentQuestion + 1}/{props.totalQuestions}</p>
            <p>Timer</p>
        </section>
    )
}