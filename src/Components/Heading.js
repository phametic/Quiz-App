import React from 'react';
import { IoChevronBackCircleOutline, IoHelpCircleOutline } from 'react-icons/io5'
import { AiOutlineSound } from 'react-icons/ai'

export default function Heading(props) {
    return(
        <section className="mt-8">
                <div className="flex flex-row justify-evenly gap-10">
                    <button className="w-10 text-4xl text-white "><IoChevronBackCircleOutline/></button>
                    <h2 className="w-96 text-3xl text-white tracking-wider text-center ml-8 font-bold">{
                        decodeURIComponent(props.topic)}
                    </h2>
                    <div className="">
                        <button className="w-10 text-4xl mx-6 text-white "><AiOutlineSound/></button>
                        <button className="w-10 text-4xl text-white"><IoHelpCircleOutline/></button>
                    </div>
                </div>
        </section>
    )
}