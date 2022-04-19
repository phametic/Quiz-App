import React from 'react';

export default function Question(props) {
    return(
        <section className="box-border flex justify-center mt-14  h-32">
            <div className="text-3xl text-white w-3/4 text-center ">
                {decodeURIComponent(props.question)}
            </div>
        </section>
    )
}