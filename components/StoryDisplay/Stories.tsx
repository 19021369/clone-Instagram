import React from "react";

const Stories = () => {
    return (
        <div className="stories relative bg-[url('/Rectangle16.png')] w-[477px] h-[847px] rounded-[34px] py-6 px-8">
            <div className="lines flex justify-center pt-4">
                <div className="w-[103px] h-[3px] rounded-[40px] bg-[#FFF] mr-1"></div>
                <div className="w-[103px] h-[3px] rounded-[40px] bg-[#FFF]  mr-1"></div>
                <div className="w-[103px] h-[3px] rounded-[40px] bg-[#FFF]  mr-1"></div>
                <div className="w-[103px] h-[3px] rounded-[11px] bg-[#FFF]/[0.50]">
                    <div className="w-[60px] h-[3px] rounded-[40px] bg-[#FFF]  mr-1"></div>
                </div>
            </div>
            <div className="story-owner flex justify-between pt-5 text-white text-lg">
                <div className="left-side flex items-center">
                    <div className="bg-[url('/image20.png')] h-[50px] w-[50px] ml-1"></div>
                    <div className="h-fit px-2">martin_tips</div>
                    <div className="h-fit opacity-50">20 m</div>
                </div>
                <div className="right-side flex items-center gap-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="25"
                        viewBox="0 0 22 25"
                        fill="none"
                    >
                        <path
                            d="M21 10.768C22.3333 11.5378 22.3333 13.4623 21 14.2321L3.75 24.1913C2.41666 24.9611 0.750001 23.9989 0.750001 22.4593L0.750002 2.54071C0.750002 1.0011 2.41667 0.0388563 3.75 0.808657L21 10.768Z"
                            fill="white"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.13397 17.0018H1C0.447715 17.0018 0 16.5541 0 16.0018V6.00182C0 5.44953 0.447715 5.00182 1 5.00182H5.13397C5.20062 4.88637 5.29051 4.78393 5.4 4.70182L11.4 0.201816C12.0592 -0.292612 13 0.17777 13 1.00182V21.0018C13 21.8259 12.0592 22.2962 11.4 21.8018L5.4 17.3018C5.29052 17.2197 5.20062 17.1173 5.13397 17.0018ZM21.0418 7.87405C21.5897 7.39233 22.4244 7.44601 22.9062 7.99394C23.3879 8.54188 23.3342 9.37658 22.7863 9.8583L20.8899 11.5255L22.7863 13.1927C23.3342 13.6744 23.3879 14.5091 22.9062 15.0571C22.4244 15.605 21.5897 15.6587 21.0418 15.177L18.8892 13.2844L16.7366 15.1769C16.1886 15.6586 15.3539 15.6049 14.8722 15.057C14.3905 14.5091 14.4442 13.6744 14.9921 13.1926L16.8884 11.5255L14.9921 9.85835C14.4442 9.37663 14.3905 8.54193 14.8722 7.994C15.3539 7.44606 16.1886 7.39238 16.7366 7.8741L18.8892 9.76655L21.0418 7.87405Z"
                            fill="white"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="7"
                        viewBox="0 0 24 7"
                        fill="none"
                    >
                        <circle
                            cx="20.8421"
                            cy="3.15789"
                            r="3.15789"
                            transform="rotate(90 20.8421 3.15789)"
                            fill="white"
                        />
                        <circle
                            cx="12"
                            cy="3.15789"
                            r="3.15789"
                            transform="rotate(90 12 3.15789)"
                            fill="white"
                        />
                        <circle
                            cx="3.15784"
                            cy="3.15789"
                            r="3.15789"
                            transform="rotate(90 3.15784 3.15789)"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <div className="story-comment absolute bottom-6 flex items-center gap-2">
                <input
                    className="rounded-[43px] border-[3px] border-[#F8F8F8] bg-transparent text-[24px] h-[66px] w-[361px] placeholder-[#F8F8F8]/80 placeholder:pl-3"
                    placeholder="Reply to martin_tips..."
                ></input>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="39"
                    viewBox="0 0 43 39"
                    fill="none"
                >
                    <path
                        d="M2 2H41.45L21.73 37.35L17.96 15.68L2 2Z"
                        stroke="#F8F8F8"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M17.96 15.68L41.45 2"
                        stroke="#F8F8F8"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Stories;
