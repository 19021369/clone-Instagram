import React from "react";
import { Messagers, Navbar, Post, Story } from "@/components";
import Link from "next/link";

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
                            <div className="w-[91.71%] storys flex space-x-[25px] pb-7">
                                <div className="bg-[url('/image10.png')] bg-[length: 82px 82px] w-[97px] h-[97px] bg-center bg-no-repeat relative">
                                    <button className="rounded-full w-[37px] h-[37px] bg-white absolute bottom-0 right-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                            className="rounded-full m-auto"
                                        >
                                            <circle
                                                cx="15"
                                                cy="15"
                                                r="15"
                                                fill="#0095F6"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            className="absolute right-[10px] bottom-[10px]"
                                        >
                                            <mask
                                                id="path-1-inside-1_602_16"
                                                fill="white"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8.28788 0C7.5766 0 7 0.576603 7 1.28788V6.99993H1.28788C0.576603 6.99993 0 7.57653 0 8.2878C0 8.99908 0.576603 9.57568 1.28788 9.57568H7V15.7121C7 16.4234 7.5766 17 8.28788 17C8.99915 17 9.57576 16.4234 9.57576 15.7121V9.57568H15.7121C16.4234 9.57568 17 8.99908 17 8.2878C17 7.57653 16.4234 6.99993 15.7121 6.99993H9.57576V1.28788C9.57576 0.576603 8.99915 0 8.28788 0Z"
                                                />
                                            </mask>
                                            <path
                                                d="M7 6.99993V9.99993H10V6.99993H7ZM7 9.57568H10V6.57568H7V9.57568ZM9.57576 9.57568V6.57568H6.57576V9.57568H9.57576ZM15.7121 6.99993V9.99993H15.7121L15.7121 6.99993ZM9.57576 6.99993H6.57576V9.99993H9.57576V6.99993ZM10 1.28788C10 2.23346 9.23346 3 8.28788 3V-3C5.91975 -3 4 -1.08025 4 1.28788H10ZM10 6.99993V1.28788H4V6.99993H10ZM1.28788 9.99993H7V3.99993H1.28788V9.99993ZM3 8.2878C3 9.23338 2.23346 9.99993 1.28788 9.99993V3.99993C-1.08025 3.99993 -3 5.91967 -3 8.2878H3ZM1.28788 6.57568C2.23346 6.57568 3 7.34223 3 8.2878H-3C-3 10.6559 -1.08025 12.5757 1.28788 12.5757V6.57568ZM7 6.57568H1.28788V12.5757H7V6.57568ZM10 15.7121V9.57568H4V15.7121H10ZM8.28788 14C9.23346 14 10 14.7665 10 15.7121H4C4 18.0803 5.91975 20 8.28788 20V14ZM6.57576 15.7121C6.57576 14.7665 7.3423 14 8.28788 14V20C10.656 20 12.5758 18.0802 12.5758 15.7121H6.57576ZM6.57576 9.57568V15.7121H12.5758V9.57568H6.57576ZM15.7121 6.57568H9.57576V12.5757H15.7121V6.57568ZM14 8.2878C14 7.34223 14.7665 6.57568 15.7121 6.57568V12.5757C18.0803 12.5757 20 10.6559 20 8.2878H14ZM15.7121 9.99993C14.7665 9.99993 14 9.23338 14 8.2878H20C20 5.91967 18.0802 3.99992 15.7121 3.99993L15.7121 9.99993ZM9.57576 9.99993H15.7121V3.99993H9.57576V9.99993ZM6.57576 1.28788V6.99993H12.5758V1.28788H6.57576ZM8.28788 3C7.3423 3 6.57576 2.23346 6.57576 1.28788H12.5758C12.5758 -1.08025 10.656 -3 8.28788 -3V3Z"
                                                fill="white"
                                                mask="url(#path-1-inside-1_602_16)"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <Story url="str1.png" />
                                <Story url="str2.png" />
                                <Story url="str3.png" />
                                <Story url="str4.png" />
                                <Story url="str1.png" />
                                <Story url="str2.png" />
                                <button className="w-[49px] h-[97px] bg-[#EFEFEF] rounded-[42px] flex justify-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="36"
                                        viewBox="0 0 20 36"
                                        fill="none"
                                    >
                                        <path
                                            d="M18.9735 16.3961L18.9733 16.3959L3.55764 1.02285L3.55753 1.02275C2.85697 0.32453 1.72287 0.325803 1.02367 1.02627L1.02355 1.02638C0.324549 1.7271 0.326508 2.8619 1.02707 3.56057L1.02708 3.56058L15.1701 17.6646L1.02657 31.7685L1.0265 31.7686C0.326067 32.4673 0.324108 33.6015 1.02299 34.3023L1.02315 34.3024C1.37332 34.6532 1.83336 34.829 2.29207 34.829C2.74948 34.829 3.20782 34.6544 3.55747 34.3059L3.55757 34.3058L18.9729 18.9336C18.973 18.9335 18.9731 18.9334 18.9733 18.9332C19.3109 18.5971 19.5 18.1402 19.5 17.6646C19.5 17.1882 19.31 16.732 18.9735 16.3961Z"
                                            fill="black"
                                            stroke="black"
                                        />
                                    </svg>{" "}
                                </button>
                            </div>
                        </div>
                        <div className="posts h-[563px] flex items-center">
                            <div className="bg-[#EFEFEF] rounded-[36px] p-4">
                                <Post />
                            </div>
                            <button className="w-[49px] h-[97px] bg-[#EFEFEF] rounded-[42px] flex justify-center items-center ml-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="36"
                                    viewBox="0 0 20 36"
                                    fill="none"
                                >
                                    <path
                                        d="M18.9735 16.3961L18.9733 16.3959L3.55764 1.02285L3.55753 1.02275C2.85697 0.32453 1.72287 0.325803 1.02367 1.02627L1.02355 1.02638C0.324549 1.7271 0.326508 2.8619 1.02707 3.56057L1.02708 3.56058L15.1701 17.6646L1.02657 31.7685L1.0265 31.7686C0.326067 32.4673 0.324108 33.6015 1.02299 34.3023L1.02315 34.3024C1.37332 34.6532 1.83336 34.829 2.29207 34.829C2.74948 34.829 3.20782 34.6544 3.55747 34.3059L3.55757 34.3058L18.9729 18.9336C18.973 18.9335 18.9731 18.9334 18.9733 18.9332C19.3109 18.5971 19.5 18.1402 19.5 17.6646C19.5 17.1882 19.31 16.732 18.9735 16.3961Z"
                                        fill="black"
                                        stroke="black"
                                    />
                                </svg>{" "}
                            </button>
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
                                    width="38"
                                    height="37"
                                    viewBox="0 0 38 37"
                                    fill="none"
                                >
                                    <path
                                        d="M0 17.9456C0 7.63383 8.07785 0 18.5006 0C28.9235 0 37.0013 7.63383 37.0013 17.9456C37.0013 28.2574 28.9235 35.8913 18.5006 35.8913C16.6275 35.8913 14.8329 35.6438 13.1447 35.1813C12.8174 35.0902 12.4686 35.1147 12.1572 35.2507L8.48486 36.8741C8.26306 36.9719 8.02063 37.0138 7.77887 36.996C7.53711 36.9782 7.30342 36.9013 7.09834 36.772C6.89326 36.6428 6.72307 36.4651 6.60273 36.2547C6.48238 36.0443 6.41557 35.8075 6.40816 35.5652L6.30641 32.2744C6.29938 32.0741 6.25168 31.8773 6.1662 31.696C6.08072 31.5147 5.95926 31.3527 5.8092 31.2198C2.21083 28.0007 0 23.3386 0 17.9456ZM12.8256 14.5716L7.39101 23.1929C6.87068 24.0208 7.8859 24.9527 8.66524 24.363L14.5045 19.9321C14.6966 19.7863 14.9309 19.7069 15.1721 19.7061C15.4132 19.7052 15.6481 19.783 15.8412 19.9275L20.1634 23.1698C20.4701 23.3997 20.8211 23.5637 21.1942 23.6513C21.5674 23.7388 21.9547 23.7482 22.3317 23.6786C22.7086 23.6091 23.0671 23.4622 23.3845 23.2473C23.7019 23.0323 23.9713 22.754 24.1757 22.4297L29.6103 13.8084C30.1329 12.9805 29.1154 12.0485 28.3361 12.6383L22.4968 17.0692C22.3047 17.215 22.0704 17.2944 21.8292 17.2952C21.5881 17.2961 21.3532 17.2183 21.1601 17.0738L16.8379 13.8292C16.5312 13.5993 16.1802 13.4353 15.8071 13.3477C15.4339 13.2601 15.0466 13.2508 14.6696 13.3203C14.2927 13.3899 13.9342 13.5367 13.6168 13.7517C13.2994 13.9666 13.03 14.245 12.8256 14.5693V14.5716Z"
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
                <div className="Messagers h-full relative">
                    <div className="absolute right-[55px] top-8">
                        <Messagers />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
