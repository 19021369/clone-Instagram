"use client"
import { useState } from "react";

const SearchBar = () => {
    const [content, setContent] = useState('foryou')
    return (
        <div className="h-[62px] w-full text-[#8D8D8D] flex text-2xl items-center gap-7">
            <div className="search w-[400px] h-full rounded-[50px] bg-[#EFEFEF] flex justify-center items-center px-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                >
                    <path
                        d="M13.3442 24.6885C19.6095 24.6885 24.6885 19.6095 24.6885 13.3442C24.6885 7.07899 19.6095 2 13.3442 2C7.07899 2 2 7.07899 2 13.3442C2 19.6095 7.07899 24.6885 13.3442 24.6885Z"
                        stroke="#262626"
                        stroke-width="3"
                        stroke-miterlimit="10"
                    />
                    <path
                        d="M20.9461 21.7371L27 27.7842"
                        stroke="#262626"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                </svg>
                <input
                    className="w-[260px] text-[#9A9A9A] text-2xl bg-transparent font-[350]"
                    placeholder="Search"
                ></input>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 2C3.34315 2 2 3.34315 2 5V8.27273H0V5C0 2.23858 2.23858 0 5 0H8.27273V2H5ZM17 2.00009C18.6569 2.00009 20 3.34324 20 5.00009V8.27282H22V5.00009C22 2.23867 19.7614 9.15527e-05 17 9.15527e-05H13.7273V2.00009H17ZM20.2727 18.2727C20.2727 19.9296 18.9296 21.2727 17.2727 21.2727H14V23.2727H17.2727C20.0342 23.2727 22.2727 21.0342 22.2727 18.2727V15H20.2727V18.2727ZM5 20.9092C3.34315 20.9092 2 19.566 2 17.9092V14.6365H0V17.9092C0 20.6706 2.23858 22.9092 5 22.9092H8.27273V20.9092H5ZM9.45459 8.45459H12.5455C13.0978 8.45459 13.5455 8.9023 13.5455 9.45459V12.5455C13.5455 13.0978 13.0978 13.5455 12.5455 13.5455H9.45459C8.9023 13.5455 8.45459 13.0978 8.45459 12.5455V9.45459C8.45459 8.9023 8.9023 8.45459 9.45459 8.45459ZM6.45459 9.45459C6.45459 7.79774 7.79774 6.45459 9.45459 6.45459H12.5455C14.2024 6.45459 15.5455 7.79774 15.5455 9.45459V12.5455C15.5455 14.2024 14.2024 15.5455 12.5455 15.5455H9.45459C7.79774 15.5455 6.45459 14.2024 6.45459 12.5455V9.45459Z"
                        fill="#262626"
                    />
                </svg>
            </div>
            <button className="whitespace-nowrap focus:text-[#0095F6] focus:font-bold focus:underline w-24" onClick={() => {setContent('foryou')}}>For you</button>
            <button className="focus:text-[#0095F6] focus:font-bold focus:underline w-24" onClick={() => {setContent('trending')}}>Trending</button>
            <button className="focus:text-[#0095F6] focus:font-bold focus:underline w-10" onClick={() => {setContent('top')}}>Top</button>
            <button className="focus:text-[#0095F6] focus:font-bold focus:underline w-24" onClick={() => {setContent('recent')}}>Recent</button>
            <button className="focus:text-[#0095F6] focus:font-bold focus:underline w-24" onClick={() => {setContent('reels')}}>Reels</button>
        </div>
    );
};

export default SearchBar;
