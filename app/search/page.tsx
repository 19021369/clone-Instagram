"use client"

import { Navbar, ImageList, SearchBar, Messagers, Buttons } from "@/components";
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
                    <Buttons />
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
