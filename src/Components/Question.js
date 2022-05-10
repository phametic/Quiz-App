import React from 'react';

export default function Question(props) {
    return(
        <section className="box-border flex justify-center mt-6 mb-4 md:mt-14 h-32">
            <div className="text-lg md:text-3xl lg:text-4xl text-white w-3/4 text-center ">
                {decodeURIComponent(props.question)}
            </div>
        </section>
    )
}