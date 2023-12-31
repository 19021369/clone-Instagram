'use client'

import React from "react";
interface MessagerProps {
    name?: string;
    newmessenger?: string;
}
const Messager = (props: MessagerProps) => {
    return (
        <div className="flex items-center justify-between py-5">
            <button className="relative bg-[url('/image20.png')] bg-[length:59px_59px] rounded-full  bg-no-repeat bg-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="69"
                    height="69"
                    viewBox="0 0 69 69"
                    fill="none"
                >
                    <mask id="path-1-inside-1_201_133" fill="white">
                        <path d="M64.0313 49.9813C64.5971 50.278 65.2983 50.0603 65.5758 49.4849C68.9722 42.4416 69.8801 34.4408 68.1289 26.7965C66.2916 18.7757 61.648 11.6758 55.036 6.77777C48.424 1.87977 40.2792 -0.493711 32.0711 0.0856096C23.863 0.66493 16.1322 4.1589 10.2737 9.93705C4.41529 15.7152 0.814958 23.397 0.12241 31.5963C-0.570138 39.7957 1.6907 47.9725 6.49698 54.6515C11.3033 61.3304 18.3385 66.0716 26.3331 68.0194C33.9525 69.8759 41.9651 69.0786 49.0546 65.7796C49.6338 65.5101 49.8611 64.812 49.5723 64.2421C49.2835 63.6722 48.588 63.4465 48.0081 63.7146C41.4115 66.7649 33.964 67.4973 26.8808 65.7715C19.4223 63.9543 12.8589 59.5311 8.37493 53.3001C3.89097 47.069 1.78174 39.4405 2.42785 31.7911C3.07395 24.1416 6.43284 16.975 11.8984 11.5843C17.364 6.19364 24.5763 2.93399 32.234 2.39352C39.8916 1.85305 47.4903 4.06735 53.6588 8.63688C59.8274 13.2064 64.1596 19.8302 65.8737 27.3131C67.5016 34.4195 66.6664 41.8561 63.5254 48.41C63.2493 48.9862 63.4654 49.6847 64.0313 49.9813Z" />
                    </mask>
                    <path
                        d="M64.0313 49.9813C64.5971 50.278 65.2983 50.0603 65.5758 49.4849C68.9722 42.4416 69.8801 34.4408 68.1289 26.7965C66.2916 18.7757 61.648 11.6758 55.036 6.77777C48.424 1.87977 40.2792 -0.493711 32.0711 0.0856096C23.863 0.66493 16.1322 4.1589 10.2737 9.93705C4.41529 15.7152 0.814958 23.397 0.12241 31.5963C-0.570138 39.7957 1.6907 47.9725 6.49698 54.6515C11.3033 61.3304 18.3385 66.0716 26.3331 68.0194C33.9525 69.8759 41.9651 69.0786 49.0546 65.7796C49.6338 65.5101 49.8611 64.812 49.5723 64.2421C49.2835 63.6722 48.588 63.4465 48.0081 63.7146C41.4115 66.7649 33.964 67.4973 26.8808 65.7715C19.4223 63.9543 12.8589 59.5311 8.37493 53.3001C3.89097 47.069 1.78174 39.4405 2.42785 31.7911C3.07395 24.1416 6.43284 16.975 11.8984 11.5843C17.364 6.19364 24.5763 2.93399 32.234 2.39352C39.8916 1.85305 47.4903 4.06735 53.6588 8.63688C59.8274 13.2064 64.1596 19.8302 65.8737 27.3131C67.5016 34.4195 66.6664 41.8561 63.5254 48.41C63.2493 48.9862 63.4654 49.6847 64.0313 49.9813Z"
                        stroke="url(#paint0_linear_201_133)"
                        strokeWidth="5"
                        mask="url(#path-1-inside-1_201_133)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_201_133"
                            x1="49.0825"
                            y1="2.48969"
                            x2="19.2062"
                            y2="66.1546"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#D62977" />
                            <stop offset="1" stopColor="#ED8128" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="absolute right-1 bottom-1"
                >
                    <circle cx="7" cy="7" r="7" fill="#14D51C" />
                </svg>
            </button>
            <div className="w-2/3">
                <div className="text-2xl">{props?.name}</div>
                {props?.newmessenger === "0" ? (
                    <div className="text-[15px] text-[#9A9A9A]">
                        Sent 5m ago
                    </div>
                ) : (
                    <div>
                        <span className="text-[#0095F6] font-bold">
                            {props?.newmessenger} new messages {' '}
                        </span>
                        <span className="text-[15px] text-[#9A9A9A]">
                            2h ago
                        </span>
                    </div>
                )}
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="25"
                viewBox="0 0 28 25"
                fill="none"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2019 0C11.1149 0 10.07 0.446732 9.32418 1.24588L9.32236 1.24783L7.02925 3.68392H4.56266C2.04138 3.68392 0 5.7253 0 8.24657V20.0836C0 22.6049 2.04138 24.6463 4.56266 24.6463H23.3287C25.85 24.6463 27.8913 22.6049 27.8913 20.0836L27.8913 8.24657L27.8913 8.24363C27.884 5.73311 25.8469 3.68392 23.3287 3.68392H20.8621L18.5656 1.24423L18.5655 1.24406C17.8172 0.449478 16.7804 0 15.6895 0H12.2019ZM10.7854 2.61145C11.1481 2.22234 11.6614 2 12.2019 2H15.6895C16.2269 2 16.7376 2.22032 17.1095 2.61523L19.7019 5.36933L19.998 5.68392H20.4301H23.3287C24.7365 5.68392 25.8865 6.83296 25.8913 8.24831V20.0836C25.8913 21.5003 24.7454 22.6463 23.3287 22.6463H4.56266C3.14595 22.6463 2 21.5003 2 20.0836V8.24657C2 6.82987 3.14595 5.68392 4.56266 5.68392H7.46129H7.89332L8.18944 5.36933L10.782 2.61505L10.7821 2.61506L10.7854 2.61145ZM8.73844 13.5702C8.73844 10.6944 11.0698 8.36302 13.9457 8.36302C16.8215 8.36302 19.1529 10.6944 19.1529 13.5702C19.1529 16.4461 16.8215 18.7775 13.9457 18.7775C11.0698 18.7775 8.73844 16.4461 8.73844 13.5702ZM13.9457 6.36302C9.96523 6.36302 6.73844 9.5898 6.73844 13.5702C6.73844 17.5507 9.96523 20.7775 13.9457 20.7775C17.9261 20.7775 21.1529 17.5507 21.1529 13.5702C21.1529 9.5898 17.9261 6.36302 13.9457 6.36302Z"
                    fill="#9A9A9A"
                />
            </svg>
        </div>
    );
};

export default Messager;
