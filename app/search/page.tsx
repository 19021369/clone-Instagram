"use client"

import { Navbar, ImageList, SearchBar, Messagers } from "@/components";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="h-screen flex">
            <div className="lside nav-bar w-[11.67%] h-full flex justify-center items-center">
                <Navbar />
            </div>

            <div className="mid w-[50.89%]">
                <div className="instagram flex justify-between items-center h-[14.26%] m-0">
                    <div className="w-[206px] h-[58px] bg-[url('/image4.png')] mr-[13%] ml-auto"></div>
                </div>
                <div className="flex">
                    <div className="content">
                        <div>
                            <div className="w-[91.71%] storys flex mb-8">
                                    <SearchBar />
                            </div>
                            <div className="posts">
                                <ImageList />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="rside  w-[37.44%]">
                    <div className="2-buttons h-[14.26%] flex items-end relative">
                        <div className="absolute w-[477px] right-[55px] flex justify-center">
                            <div className="relative bg-[#EFEFEF] h-[114px] w-[225px] rounded-[111px] flex items-center justify-center gap-16">
                                <Link href="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="37"
                                        height="37"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                                    </svg>
                                </Link>
                                <Link href="/messages">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="37"
                                        height="37"
                                        viewBox="0 0 37 37"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.0305 0C8.12873 0 0 7.71854 0 17.2792C0 22.2438 2.24104 26.6689 5.73531 29.8087C5.90828 29.9641 6.01015 30.1844 6.01015 30.417V35.7056C6.01015 36.3003 6.636 36.6871 7.16792 36.4211L12.3941 33.808C12.5767 33.7167 12.7871 33.6992 12.9832 33.756C14.5857 34.221 16.2589 34.5584 18.0305 34.5584C27.9322 34.5584 36.0609 26.8398 36.0609 17.2792C36.0609 7.71854 27.9322 0 18.0305 0ZM18.0305 3.00508C26.3831 3.00508 33.0558 9.4149 33.0558 17.2792C33.0558 25.1435 26.3831 31.5533 18.0305 31.5533C16.2349 31.5533 14.5205 31.2122 12.9128 30.6608L12.6092 30.5673C12.4125 30.5068 12.2001 30.5243 12.016 30.6164L10.173 31.5379C9.64108 31.8038 9.01523 31.417 9.01523 30.8223V29.1104C9.01523 28.8732 8.90996 28.6482 8.72786 28.4962L8.45178 28.2657C5.11764 25.6378 3.00508 21.6997 3.00508 17.2792C3.00508 9.4149 9.67785 3.00508 18.0305 3.00508ZM16.9217 13.1251C16.6036 12.8036 16.0826 12.8094 15.7718 13.1379L10.8378 18.3533C10.2093 19.0177 11.0074 20.0464 11.8071 19.6026L14.8532 17.9122C15.175 17.7337 15.577 17.7976 15.8275 18.0672L19.1327 21.6241C19.4499 21.9656 19.9907 21.9646 20.3067 21.622L25.2563 16.257C25.8743 15.5871 25.0706 14.5705 24.2763 15.0172L21.2848 16.6992C20.9708 16.8758 20.5774 16.8206 20.324 16.5645L16.9217 13.1251Z"
                                            fill="black"
                                        />
                                    </svg>
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11"
                                    height="11"
                                    viewBox="0 0 11 11"
                                    fill="none"
                                    className="absolute top-8 right-8"
                                >
                                    <circle
                                        cx="5.5"
                                        cy="5.5"
                                        r="5.5"
                                        fill="#0095F6"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="LockMessagers h-full relative">
                        <div className="absolute right-[55px] top-8">
                            <Messagers lock={true} />
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default page;
