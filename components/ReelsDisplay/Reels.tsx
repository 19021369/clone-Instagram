import React from "react";
import { Navbar, Post, Stories, Story } from "..";
import Link from "next/link";
import { url } from "inspector";

const Reels = () => {
    return (
        <div className="reels relative bg-[#EFEFEF] w-[477px] h-[847px] rounded-[34px] p-4 bg-[url('/image27.png')]">
            <div className="relative">
                <div className="text-3xl font-bold text-white text-center">
                    Reels
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="25"
                    viewBox="0 0 28 25"
                    fill="none"
                    className="absolute right-4 top-1"
                >
                    <path
                        d="M23.3287 4.68392H20.4301L17.8375 1.92964C17.2774 1.3349 16.5036 1 15.6895 1H12.2019C11.3877 1 10.6082 1.3349 10.0539 1.92964L7.46129 4.68392H4.56266C2.59367 4.68392 1 6.27759 1 8.24657V20.0836C1 22.0526 2.59367 23.6463 4.56266 23.6463H23.3287C25.2977 23.6463 26.8913 22.0526 26.8913 20.0836V8.24657C26.8856 6.28336 25.2919 4.68392 23.3287 4.68392Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                    />
                    <path
                        d="M13.9456 19.7775C17.3738 19.7775 20.1529 16.9984 20.1529 13.5703C20.1529 10.1421 17.3738 7.36304 13.9456 7.36304C10.5175 7.36304 7.7384 10.1421 7.7384 13.5703C7.7384 16.9984 10.5175 19.7775 13.9456 19.7775Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                    />
                </svg>
            </div>
            <div className="buttons absolute right-4 bottom-8 flex flex-col items-center gap-9 justify-center">
                <button className="h-9 w-9 bg-white/25 rounded-full flex items-center justify-center border-[1px] border-white/20">
                    <svg
                        width="21"
                        height="26"
                        className="text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path
                            d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
                            fill="white"
                        ></path>
                    </svg>
                </button>
                <button className="h-9 w-9 bg-white/25 rounded-full flex items-center justify-center border-[1px] border-white/20">
                    <svg
                        width="21"
                        height="26"
                        className="text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path
                            fill="white"
                            d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                        />
                    </svg>
                </button>
                <button className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="26"
                        viewBox="0 0 30 26"
                        fill="none"
                    >
                        <path
                            d="M28.8581 5.94093C25.7348 -2.87436 15.5837 -0.392365 14.6565 4.01528C13.3876 -0.651638 3.48059 -2.66695 0.454806 5.94093C-2.69821 14.9233 11.4773 23.4434 14.2566 25.6412C14.4849 25.8217 14.8409 25.8397 15.0762 25.6684C17.9023 23.6103 32.0037 14.7568 28.8581 5.94093Z"
                            fill="#E92828"
                        />
                    </svg>
                    <div className="absolute text-white font-semibold">
                        289k
                    </div>
                </button>
                <button className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                    >
                        <path
                            d="M25.0284 21.5533C24.937 21.2663 24.9817 20.9546 25.1375 20.6969C26.3191 18.7422 27 16.4555 27 14C27 6.8176 21.1755 1 14 1C6.8176 1 1 6.8176 1 14C1 21.1824 6.8176 27 14 27C16.5343 27 18.9049 26.2723 20.9013 25.0161C21.1522 24.8582 21.4575 24.8067 21.7426 24.8879L24.7322 25.7386C25.4994 25.957 26.2009 25.2333 25.9587 24.4733L25.0284 21.5533Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-miterlimit="10"
                        />
                    </svg>
                    <div className="absolute text-white font-semibold">
                        5.6k
                    </div>
                </button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="26"
                        viewBox="0 0 28 26"
                        fill="none"
                    >
                        <path
                            d="M1 1H27L14.0033 24.2978L11.5186 10.016L1 1Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11.5186 10.016L27 1"
                            stroke="white"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="19"
                        viewBox="0 0 5 19"
                        fill="none"
                    >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
                        <circle cx="2.5" cy="9.5" r="2.5" fill="white" />
                        <circle cx="2.5" cy="16.5" r="2.5" fill="white" />
                    </svg>
                </button>
            </div>
            <div className="reel-users absolute bottom-4 text-white">
                <div className="flex gap-3 items-center">
                    <div
                        className="h-[34px] w-[34px] rounded-[34px]"
                        style={{ backgroundImage: "url('/image28.png')" }}
                    ></div>
                    <div className="text-[#FFF] font-bold">instagram</div>
                    <button className="h-[34px] w-[63px] rounded-[14px] border-[1px] border-white bg-white/25 backdrop-blur-[2.5px]">
                        Follow
                    </button>
                </div>
                <div>“Music is the only... More</div>
                <div className="flex items-center gap-2 px-2.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V10C2 10.5523 1.55228 11 1 11C0.447715 11 0 10.5523 0 10V1ZM8 1C8 0.447715 8.44771 0 9 0C9.55229 0 10 0.447715 10 1V10C10 10.5523 9.55229 11 9 11C8.44771 11 8 10.5523 8 10V1ZM5 3C4.44772 3 4 3.44772 4 4V7C4 7.55228 4.44772 8 5 8C5.55228 8 6 7.55228 6 7V4C6 3.44772 5.55228 3 5 3Z"
                            fill="white"
                        />
                    </svg>
                    <div>
                        <strong>Instagram •</strong> Original Audio
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reels;
