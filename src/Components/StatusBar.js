import React from 'react';
import Countdown from 'react-countdown';

export default function StatusBar(props) {

    const renderer = ({ seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <span>{seconds}</span>;
        } else {
          // Render a countdown
          return <span>{seconds}</span>;
        }
      };

    return(
        <section className="grid grid-cols-2 justify-items-center text-white text-2xl my-6">
            <p>{props.currentQuestion + 1}/{props.totalQuestions}</p>
            <Countdown
                key={props.currentQuestion}
                date={Date.now() + props.counter * 1000}
                renderer={renderer}
            />
        </section>
    )
}