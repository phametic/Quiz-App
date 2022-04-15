import React from 'react';

export default function AnswerCard(props) {
    return(
        <section className="text-lg text-black bg-white px-12 py-8 my-4 rounded-3xl w-72 text-center cursor-pointer border-2 border-slate-900 hover:border-lime-500">
            {<div>{props.answer}</div>}
        </section>
    )
}