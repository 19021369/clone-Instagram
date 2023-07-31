import Link from "next/link";
import React from "react";

const post = () => {
    return (
        <div className="flex flex-shrink">
            <div className="postimg h-[532px] w-[532px] rounded-[28px] bg-[url('/postimg.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="relative h-full w-full p-6 flex items-center">
                    <div className="absolute top-6 right-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                        >
                            <g filter="url(#filter0_b_603_255)">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M3 0C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V3C20 1.34315 18.6569 0 17 0H3ZM23 6V18C23 20.7614 20.7614 23 18 23H5.5V25H18C21.866 25 25 21.866 25 18V6H23Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_603_255"
                                    x="-50"
                                    y="-50"
                                    width="125"
                                    height="125"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="25"
                                    />
                                    <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_603_255"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_603_255"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full flex justify-between">
                        <button className="relative rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="49"
                                height="49"
                                viewBox="0 0 49 49"
                                fill="none"
                            >
                                <g filter="url(#filter0_b_607_20)">
                                    <rect
                                        x="49"
                                        y="49"
                                        width="49"
                                        height="49"
                                        rx="24.5"
                                        transform="rotate(180 49 49)"
                                        fill="white"
                                        fill-opacity="0.25"
                                    />
                                    <rect
                                        x="48.5"
                                        y="48.5"
                                        width="48"
                                        height="48"
                                        rx="24"
                                        transform="rotate(180 48.5 48.5)"
                                        stroke="white"
                                        stroke-opacity="0.2"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_b_607_20"
                                        x="-5"
                                        y="-5"
                                        width="59"
                                        height="59"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feGaussianBlur
                                            in="BackgroundImageFix"
                                            stdDeviation="2.5"
                                        />
                                        <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_607_20"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_607_20"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="25"
                                viewBox="0 0 15 25"
                                fill="none"
                                className="absolute top-3 left-3"
                            >
                                <path
                                    d="M0.929148 11.5071L0.929358 11.5069L12.0629 0.89811L12.063 0.898009C12.6212 0.366423 13.5159 0.367345 14.0731 0.900697L14.0732 0.900808C14.6431 1.44673 14.6414 2.34052 14.0704 2.88468L14.0704 2.88469L3.97943 12.5L14.0707 22.1153L14.0708 22.1154C14.6417 22.6596 14.6435 23.553 14.0736 24.0989L14.0735 24.0991C13.792 24.3685 13.4265 24.5 13.0668 24.5C12.7082 24.5 12.344 24.3694 12.063 24.1018L12.0629 24.1017L0.929778 13.4936C0.929708 13.4935 0.929638 13.4934 0.929568 13.4934C0.657051 13.2342 0.5 12.877 0.5 12.5C0.5 12.1224 0.657822 11.7659 0.929148 11.5071Z"
                                    fill="white"
                                    stroke="white"
                                />
                            </svg>
                        </button>

                        <button className="relative rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="49"
                                height="49"
                                viewBox="0 0 49 49"
                                fill="none"
                            >
                                <g filter="url(#filter0_b_607_20)">
                                    <rect
                                        x="49"
                                        y="49"
                                        width="49"
                                        height="49"
                                        rx="24.5"
                                        transform="rotate(180 49 49)"
                                        fill="white"
                                        fill-opacity="0.25"
                                    />
                                    <rect
                                        x="48.5"
                                        y="48.5"
                                        width="48"
                                        height="48"
                                        rx="24"
                                        transform="rotate(180 48.5 48.5)"
                                        stroke="white"
                                        stroke-opacity="0.2"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_b_607_20"
                                        x="-5"
                                        y="-5"
                                        width="59"
                                        height="59"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                    >
                                        <feFlood
                                            flood-opacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feGaussianBlur
                                            in="BackgroundImageFix"
                                            stdDeviation="2.5"
                                        />
                                        <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_607_20"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_607_20"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="25"
                                viewBox="0 0 15 25"
                                fill="none"
                                className="absolute top-3 left-5"
                            >
                                <path
                                    d="M14.0709 13.4929L14.0706 13.4931L2.93711 24.1019L2.93701 24.102C2.3788 24.6336 1.4841 24.6327 0.926921 24.0993L0.926805 24.0992C0.356859 23.5533 0.358581 22.6595 0.929617 22.1153L0.929627 22.1153L11.0206 12.5L0.929259 2.88466L0.929194 2.8846C0.358268 2.3404 0.356545 1.44705 0.926382 0.901083L0.926546 0.900927C1.20798 0.631525 1.57347 0.5 1.93316 0.5C2.29183 0.5 2.65595 0.630638 2.93696 0.898239L2.93706 0.898336L14.0702 11.5064C14.0703 11.5065 14.0704 11.5066 14.0704 11.5066C14.3429 11.7658 14.5 12.123 14.5 12.5C14.5 12.8776 14.3422 13.2341 14.0709 13.4929Z"
                                    fill="white"
                                    stroke="white"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="post-content px-4 py-3 w-[332px]">
                <div className="post-user h-[62px] flex space-x-2">
                    <div className="bg-[url('/image10.png')] bg-[length:52px_52px] bg-no-repeat bg-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="62"
                            height="62"
                            viewBox="0 0 62 62"
                            fill="none"
                        >
                            <circle
                                cx="31"
                                cy="31"
                                r="30"
                                stroke="url(#paint0_linear_603_293)"
                                stroke-width="2"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_603_293"
                                    x1="44.1031"
                                    y1="2.23711"
                                    x2="17.2577"
                                    y2="59.4433"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#D62977" />
                                    <stop offset="1" stop-color="#ED8128" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-[270px] flex justify-between">
                        <div>
                            <Link
                                href="/reels"
                                className="text-2xl font-normal"
                            >
                                martin_tips
                            </Link>
                            <h3 className="text-sm font-normal text-[#8D8D8D]">
                                57 minutes ago
                            </h3>
                        </div>
                        <div className="p-2">
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="5"
                                    height="19"
                                    viewBox="0 0 5 19"
                                    fill="none"
                                >
                                    <circle
                                        cx="2.5"
                                        cy="2.5"
                                        r="2.5"
                                        fill="#2D2D2D"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="9.5"
                                        r="2.5"
                                        fill="#2D2D2D"
                                    />
                                    <circle
                                        cx="2.5"
                                        cy="16.5"
                                        r="2.5"
                                        fill="#2D2D2D"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="post-status text-[18px] font-[350]">
                    Вчера с друзьями мы затронули серьезную тему и я только
                    сейчас поняла - многие аспекты моего восприятия родителя
                    были сформированы{" "}
                    <button className="text-[16px] text-[#9A9A9A]">
                        read more...
                    </button>
                </div>
                <div className="like-button pt-3 pb-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="188"
                        height="46"
                        viewBox="0 0 188 46"
                        fill="none"
                    >
                        <rect width="188" height="46" rx="23" fill="#F8F8F8" />
                        <rect
                            x="0.5"
                            y="0.5"
                            width="187"
                            height="45"
                            rx="22.5"
                            stroke="black"
                            stroke-opacity="0.2"
                        />
                        <path
                            d="M107 19.978L125.578 15L121.856 32.9138L116.323 24.7075L107 19.978Z"
                            stroke="#262626"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M116.242 24.4062L125.578 14.9998"
                            stroke="#262626"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M81.6432 29.1722C81.5975 29.0287 81.6196 28.8727 81.6988 28.7447C82.5482 27.3714 83.0391 25.7563 83.0391 24.0196C83.0391 19.0363 78.998 15 74.0196 15C69.0363 15 65 19.0363 65 24.0196C65 29.0028 69.0363 33.0391 74.0196 33.0391C75.8104 33.0391 77.4834 32.5155 78.8843 31.614C79.009 31.5338 79.1617 31.5083 79.3043 31.5489L81.8131 32.2629C82.1967 32.372 82.5474 32.0102 82.4263 31.6302L81.6432 29.1722Z"
                            stroke="#262626"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                        />
                        <path
                            d="M166.958 31.1593C166.958 31.9605 166.063 32.4363 165.399 31.9884L160.538 28.7098C160.2 28.4819 159.758 28.4819 159.42 28.7098L154.559 31.9884C153.895 32.4363 153 31.9605 153 31.1593V16C153 15.4477 153.448 15 154 15H165.958C166.511 15 166.958 15.4477 166.958 16V31.1593Z"
                            stroke="#262626"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                        />
                        <path
                            d="M41.133 18.3506C38.8458 11.8951 31.4121 13.7127 30.7331 16.9404C29.8038 13.5228 22.5489 12.047 20.3331 18.3506C18.0627 24.8185 28.0615 30.9591 30.3313 32.6927C30.5626 32.8693 30.9172 32.8844 31.154 32.7153C33.4604 31.0677 43.3971 24.6958 41.133 18.3506Z"
                            fill="#E92828"
                        />
                    </svg>
                </div>
                <div className="like-numbers text-[18px] pl-2">32.8k likes</div>
                <div className="post-comment">
                    <div className="guest-info flex justify-between mt-3">
                        <div className="guest-avatar flex">
                            <div className="bg-[url('/17.png')] w-[24px] bg-center bg-no-repeat mr-2"></div>
                            <div className="text-[18px]">amanxux</div>
                        </div>
                        <div className="3-dots flex items-center">
                            <button className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="3"
                                        viewBox="0 0 15 3"
                                        fill="none"
                                    >
                                        <circle
                                            cx="13.5"
                                            cy="1.5"
                                            r="1.5"
                                            transform="rotate(90 13.5 1.5)"
                                            fill="#2D2D2D"
                                        />
                                        <circle
                                            cx="7.5"
                                            cy="1.5"
                                            r="1.5"
                                            transform="rotate(90 7.5 1.5)"
                                            fill="#2D2D2D"
                                        />
                                        <circle
                                            cx="1.5"
                                            cy="1.5"
                                            r="1.5"
                                            transform="rotate(90 1.5 1.5)"
                                            fill="#2D2D2D"
                                        />
                                    </svg>
                            </button>
                            <button>

                            <div className="relative h-[27px] w-[27px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                    className="absolute"
                                >
                                    <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="#F8F8F8"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    className="absolute left-[6px] top-[8px]"
                                >
                                    <path
                                        d="M13.3191 2.74197C11.8776 -1.32663 7.19249 -0.181092 6.76453 1.85321C6.17889 -0.300756 1.60643 -1.2309 0.20991 2.74197C-1.17296 6.6815 4.66627 10.4284 6.35121 11.6617C6.58604 11.8336 6.95462 11.8471 7.19295 11.6802C8.89737 10.4859 14.6979 6.60611 13.3191 2.74197Z"
                                        fill="#E92828"
                                    />
                                </svg>
                            </div>
                            </button>
                        </div>
                    </div>
                    <div className="comment">
                        <p className="text-[18px]">Это тестовое сообщение</p>
                        <div className="other-replies grid grid-cols-2">
                            <div className="grid grid-rows-2">
                                <div className="pt-2 flex text-xs gap-auto justify-between text-[#9A9A9A]">
                                    <div className="w-[50px]">37m ago</div>
                                    <div>25 likes</div>
                                    <button>Reply</button>
                                </div>
                                <div className="pt-2 flex items-center text-xs gap-auto justify-between text-[#9A9A9A]">
                                    <div className="flex border-t-[1px] border-[#9A9A9A] w-[48px] h-0"></div>
                                    <button>View Replies (12)</button>
                                </div>
                                <div className="py-2 flex items-center text-xs gap-auto justify-between text-[#9A9A9A]">
                                    <button>View all 1988 comments</button>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="rounded-[42px] border-[1px] border-[#9A9A9A] h-[36px] w-[229px] mx-auto mt-2 text-[12px] text-[#9A9A9A] flex justify-center items-center"
                        >
                            Scroll down to read others comments
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default post;
