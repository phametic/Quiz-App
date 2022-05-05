import React from 'react';

export default function ProgressBar(props) {

    const { progressed } = props;

    const fillerStyles = {
        height: '100%',
        width: `${progressed}%`,
        backgroundColor: "#2FCC71",
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
      }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }

    return(
        <section className="h-5 w-8/12 bg-[#e0e0de] rounded-3xl mx-auto">
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${progressed}%`}</span>
            </div>
        </section>
    )
}