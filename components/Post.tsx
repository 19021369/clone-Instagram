import React from 'react';

const post = () => {
    return (
        <div className='flex flex-shrink'>
            <div className="postimg h-[532px] w-[532px] rounded-[28px] bg-[url('/postimg.jpg')] bg-cover bg-center bg-no-repeat">
                <div className='relative h-full w-full p-6 flex items-center'>
                    <div className='absolute top-6 right-6'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='25'
                            height='25'
                            viewBox='0 0 25 25'
                            fill='none'
                        >
                            <g filter='url(#filter0_b_603_255)'>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M3 0C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V3C20 1.34315 18.6569 0 17 0H3ZM23 6V18C23 20.7614 20.7614 23 18 23H5.5V25H18C21.866 25 25 21.866 25 18V6H23Z'
                                    fill='white'
                                />
                            </g>
                            <defs>
                                <filter
                                    id='filter0_b_603_255'
                                    x='-50'
                                    y='-50'
                                    width='125'
                                    height='125'
                                    filterUnits='userSpaceOnUse'
                                    color-interpolation-filters='sRGB'
                                >
                                    <feFlood
                                        flood-opacity='0'
                                        result='BackgroundImageFix'
                                    />
                                    <feGaussianBlur
                                        in='BackgroundImageFix'
                                        stdDeviation='25'
                                    />
                                    <feComposite
                                        in2='SourceAlpha'
                                        operator='in'
                                        result='effect1_backgroundBlur_603_255'
                                    />
                                    <feBlend
                                        mode='normal'
                                        in='SourceGraphic'
                                        in2='effect1_backgroundBlur_603_255'
                                        result='shape'
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className='w-full flex justify-between'>
                        <button className='relative rounded-full'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='49'
                                height='49'
                                viewBox='0 0 49 49'
                                fill='none'
                            >
                                <g filter='url(#filter0_b_607_20)'>
                                    <rect
                                        x='49'
                                        y='49'
                                        width='49'
                                        height='49'
                                        rx='24.5'
                                        transform='rotate(180 49 49)'
                                        fill='white'
                                        fill-opacity='0.25'
                                    />
                                    <rect
                                        x='48.5'
                                        y='48.5'
                                        width='48'
                                        height='48'
                                        rx='24'
                                        transform='rotate(180 48.5 48.5)'
                                        stroke='white'
                                        stroke-opacity='0.2'
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id='filter0_b_607_20'
                                        x='-5'
                                        y='-5'
                                        width='59'
                                        height='59'
                                        filterUnits='userSpaceOnUse'
                                        color-interpolation-filters='sRGB'
                                    >
                                        <feFlood
                                            flood-opacity='0'
                                            result='BackgroundImageFix'
                                        />
                                        <feGaussianBlur
                                            in='BackgroundImageFix'
                                            stdDeviation='2.5'
                                        />
                                        <feComposite
                                            in2='SourceAlpha'
                                            operator='in'
                                            result='effect1_backgroundBlur_607_20'
                                        />
                                        <feBlend
                                            mode='normal'
                                            in='SourceGraphic'
                                            in2='effect1_backgroundBlur_607_20'
                                            result='shape'
                                        />
                                    </filter>
                                </defs>
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='15'
                                height='25'
                                viewBox='0 0 15 25'
                                fill='none'
                                className='absolute top-3 left-3'
                            >
                                <path
                                    d='M0.929148 11.5071L0.929358 11.5069L12.0629 0.89811L12.063 0.898009C12.6212 0.366423 13.5159 0.367345 14.0731 0.900697L14.0732 0.900808C14.6431 1.44673 14.6414 2.34052 14.0704 2.88468L14.0704 2.88469L3.97943 12.5L14.0707 22.1153L14.0708 22.1154C14.6417 22.6596 14.6435 23.553 14.0736 24.0989L14.0735 24.0991C13.792 24.3685 13.4265 24.5 13.0668 24.5C12.7082 24.5 12.344 24.3694 12.063 24.1018L12.0629 24.1017L0.929778 13.4936C0.929708 13.4935 0.929638 13.4934 0.929568 13.4934C0.657051 13.2342 0.5 12.877 0.5 12.5C0.5 12.1224 0.657822 11.7659 0.929148 11.5071Z'
                                    fill='white'
                                    stroke='white'
                                />
                            </svg>
                        </button>

                        <button className='relative rounded-full'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='49'
                                height='49'
                                viewBox='0 0 49 49'
                                fill='none'
                            >
                                <g filter='url(#filter0_b_607_20)'>
                                    <rect
                                        x='49'
                                        y='49'
                                        width='49'
                                        height='49'
                                        rx='24.5'
                                        transform='rotate(180 49 49)'
                                        fill='white'
                                        fill-opacity='0.25'
                                    />
                                    <rect
                                        x='48.5'
                                        y='48.5'
                                        width='48'
                                        height='48'
                                        rx='24'
                                        transform='rotate(180 48.5 48.5)'
                                        stroke='white'
                                        stroke-opacity='0.2'
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id='filter0_b_607_20'
                                        x='-5'
                                        y='-5'
                                        width='59'
                                        height='59'
                                        filterUnits='userSpaceOnUse'
                                        color-interpolation-filters='sRGB'
                                    >
                                        <feFlood
                                            flood-opacity='0'
                                            result='BackgroundImageFix'
                                        />
                                        <feGaussianBlur
                                            in='BackgroundImageFix'
                                            stdDeviation='2.5'
                                        />
                                        <feComposite
                                            in2='SourceAlpha'
                                            operator='in'
                                            result='effect1_backgroundBlur_607_20'
                                        />
                                        <feBlend
                                            mode='normal'
                                            in='SourceGraphic'
                                            in2='effect1_backgroundBlur_607_20'
                                            result='shape'
                                        />
                                    </filter>
                                </defs>
                            </svg>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='15'
                                height='25'
                                viewBox='0 0 15 25'
                                fill='none'
                                className='absolute top-3 left-5'
                            >
                                <path
                                    d='M14.0709 13.4929L14.0706 13.4931L2.93711 24.1019L2.93701 24.102C2.3788 24.6336 1.4841 24.6327 0.926921 24.0993L0.926805 24.0992C0.356859 23.5533 0.358581 22.6595 0.929617 22.1153L0.929627 22.1153L11.0206 12.5L0.929259 2.88466L0.929194 2.8846C0.358268 2.3404 0.356545 1.44705 0.926382 0.901083L0.926546 0.900927C1.20798 0.631525 1.57347 0.5 1.93316 0.5C2.29183 0.5 2.65595 0.630638 2.93696 0.898239L2.93706 0.898336L14.0702 11.5064C14.0703 11.5065 14.0704 11.5066 14.0704 11.5066C14.3429 11.7658 14.5 12.123 14.5 12.5C14.5 12.8776 14.3422 13.2341 14.0709 13.4929Z'
                                    fill='white'
                                    stroke='white'
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='ml-6'>
                <div className='h-[62px] w-[332px] flex space-x-2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='62'
                        height='62'
                        viewBox='0 0 62 62'
                        fill='none'
                    >
                        <circle
                            cx='31'
                            cy='31'
                            r='30'
                            stroke='url(#paint0_linear_603_293)'
                            stroke-width='2'
                        />
                        <defs>
                            <linearGradient
                                id='paint0_linear_603_293'
                                x1='44.1031'
                                y1='2.23711'
                                x2='17.2577'
                                y2='59.4433'
                                gradientUnits='userSpaceOnUse'
                            >
                                <stop stop-color='#D62977' />
                                <stop offset='1' stop-color='#ED8128' />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className='w-[270px] flex justify-between'>
                        <div>
                            <h1 className='text-2xl font-normal'>
                                martin_tips
                            </h1>
                            <h3 className='text-sm font-normal text-[#8D8D8D]'>
                                57 minutes ago
                            </h3>
                        </div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='5'
                            height='19'
                            viewBox='0 0 5 19'
                            fill='none'
                        >
                            <circle cx='2.5' cy='2.5' r='2.5' fill='#2D2D2D' />
                            <circle cx='2.5' cy='9.5' r='2.5' fill='#2D2D2D' />
                            <circle cx='2.5' cy='16.5' r='2.5' fill='#2D2D2D' />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default post;
