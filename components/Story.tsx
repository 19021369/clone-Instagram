'use client'
import React from 'react';

interface StorysProps {
 url?: string;
}

const Story = (props: StorysProps) => {
    const { url } = props;
    
    return (
        <button className="bg-[length:82px_82px] bg-center bg-no-repeat"
        style={{backgroundImage: `url('/${url}')`}}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='97'
                height='97'
                viewBox='0 0 97 97'
                fill='none'
            >
                <circle
                    cx='48.5'
                    cy='48.5'
                    r='47'
                    stroke='url(#paint0_linear_3_241)'
                    strokeWidth='3'
                />
                <defs>
                    <linearGradient
                        id='paint0_linear_3_241'
                        x1='69'
                        y1='3.5'
                        x2='27'
                        y2='93'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop stopColor='#D62977' />
                        <stop offset='1' stopColor='#ED8128' />
                    </linearGradient>
                </defs>
            </svg>
        </button>
    );
};

export default Story;
