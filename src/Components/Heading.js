import React from 'react';
import { IoChevronBackCircleOutline, IoHelpCircleOutline } from 'react-icons/io5'
import { AiOutlineSound } from 'react-icons/ai'

export default function Heading() {
    return(
        <section className="mt-8">
                <div className="grid grid-cols-3 justify-items-center gap-x-40">
                    <button className="w-10 text-4xl text-white"><IoChevronBackCircleOutline/></button>
                    <h2 className="w-24 text-5xl text-white tracking-wider">Topic</h2>
                    <div className="">
                        <button className="w-10 text-4xl mx-6 text-white"><AiOutlineSound/></button>
                        <button className="w-10 text-4xl text-white"><IoHelpCircleOutline/></button>
                    </div>
                </div>
        </section>
    )
}