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

    function timerCompleted() {
      props.setIncorrectCounter(prev => prev + 1)
      props.nextQuestion();
    }

    return(
        <section className="grid grid-cols-2 justify-items-center text-white text-xl md:text-2xl mb-6 md:my-6">
            <p>{props.currentQuestion + 1}/{props.totalQuestions}</p>
            <Countdown
                key={props.currentQuestion}
                date={Date.now() + props.counter * 1000}
                renderer={renderer}
                onComplete={timerCompleted}
            />
        </section>
    )
}