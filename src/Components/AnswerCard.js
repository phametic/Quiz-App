import React from 'react';

export default function AnswerCard(props) {
    return(
        <section className="text-xl text-black bg-white px-12 py-8 my-4">
            <div>{props.answer}</div>
        </section>
    )
}