import React from 'react';

export default function Question(props) {
    return(
        <section className="flex justify-center mt-14">
            <div className="text-4xl text-white w-3/4 text-center">
                {decodeURIComponent(props.question)}
            </div>
        </section>
    )
}