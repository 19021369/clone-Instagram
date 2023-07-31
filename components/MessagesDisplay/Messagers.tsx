"use client";
import React from "react";
import { MessagerGrp } from "./MessagerGrp";

interface MessagersProps {
    lock?: Boolean;
}

const Messagers = (props: MessagersProps) => {
    return (
        <div className="messager relative bg-[#EFEFEF] w-[477px] h-[847px] rounded-[34px] py-4">
            <div
                className={`absolute w-full h-full z-40 ${
                    props.lock && "backdrop-blur-sm"
                } text-center text-3xl font-bold `}
            >
                Messages
            </div>
            {props.lock && (
                <div className="z-40 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[294px] h-[69px] bg-black/50 rounded-[37.5px] flex items-center justify-between backdrop-blur-[25px] text-white text-2xl">
                    <div className="ml-8">Chat is locked</div>
                    <div className="mr-3 w-[50px] h-[50px] rounded-full bg-black/30 flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="24"
                            viewBox="0 0 20 24"
                            fill="none"
                        >
                            <path
                                d="M19.1584 11.3864C18.8402 11.0682 18.4539 10.9092 17.9992 10.9092H17.4541V7.63628C17.4541 5.5454 16.7043 3.75011 15.2042 2.2501C13.7042 0.750034 11.9091 0 9.81796 0C7.72684 0 5.93137 0.750034 4.43154 2.25004C2.93148 3.75011 2.18168 5.54534 2.18168 7.63628V10.9092H1.63631C1.18192 10.9092 0.795467 11.0682 0.477256 11.3864C0.159046 11.7044 0 12.0908 0 12.5456V22.3637C0 22.8181 0.159105 23.2047 0.477256 23.5229C0.795467 23.8408 1.18192 24 1.63631 24H17.9996C18.4544 24 18.8405 23.841 19.1588 23.5229C19.4768 23.2047 19.6361 22.8181 19.6361 22.3637V12.5454C19.6363 12.091 19.4768 11.7046 19.1584 11.3864ZM14.1815 10.9092H5.45441V7.63628C5.45441 6.43179 5.88063 5.40331 6.73287 4.55119C7.58523 3.69894 8.61354 3.27291 9.81814 3.27291C11.0229 3.27291 12.0509 3.69888 12.9033 4.55119C13.7554 5.40325 14.1815 6.43179 14.1815 7.63628V10.9092Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            )}
            <div className="text-center text-3xl font-bold relative px-9 pt-9">
                {!props.lock && (
                    <div className="w-12 h-12 bg-[#F8F8F8] rounded-full flex justify-center items-center absolute right-9 top-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="27"
                            viewBox="0 0 20 27"
                            fill="none"
                        >
                            <path
                                d="M17.185 9.82H5.45556V6.54667C5.45556 4.13968 7.41301 2.18222 9.82 2.18222C12.227 2.18222 14.1844 4.13968 14.1844 6.54667C14.1844 7.14896 14.6722 7.63778 15.2756 7.63778C15.8789 7.63778 16.3667 7.14896 16.3667 6.54667C16.3667 2.93618 13.4305 0 9.82 0C6.20951 0 3.27333 2.93618 3.27333 6.54667V9.82H2.455C1.10202 9.82 0 10.9209 0 12.275V23.7317C0 25.0857 1.10202 26.1867 2.455 26.1867H17.185C18.538 26.1867 19.64 25.0857 19.64 23.7317V12.275C19.64 10.9209 18.538 9.82 17.185 9.82Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                )}
                <div className="search h-[57px] w-full rounded-[81px] bg-[#F8F8F8] mt-5 mb-7 flex justify-center items-center gap-5">
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
                        className="w-[260px] placeholder:text-[#9A9A9A] placeholder:text-2xl bg-transparent font-[350] placeholder:-translate-y-1"
                        placeholder="Search"
                    ></input>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                    >
                        <mask id="path-1-inside-1_201_122" fill="white">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M19.5654 0.585787C20.3465 -0.195263 21.6128 -0.195261 22.3939 0.585787L24.8113 3.00328C25.5924 3.78433 25.5924 5.05066 24.8113 5.8317L10.4845 20.1585C10.1095 20.5336 9.60074 20.7443 9.07031 20.7443H6.92651C5.82194 20.7443 4.92651 19.8489 4.92651 18.7443V16.0531C4.92651 15.5227 5.13723 15.014 5.5123 14.6389L19.5654 0.585787ZM17.5128 5.46686L6.92651 16.0531V18.7443H9.07031L19.9303 7.88436L17.5128 5.46686ZM18.7489 4.23077L21.1664 6.64826L23.3971 4.41749L20.9796 2L18.7489 4.23077ZM0 6.22788C0 3.46645 2.23858 1.22788 5 1.22788H13.6691V3.22788H5C3.34315 3.22788 2 4.57102 2 6.22788V20.397C2 22.0539 3.34315 23.397 5 23.397H18.8955C20.5523 23.397 21.8955 22.0539 21.8955 20.397V11.6703H23.8955V20.397C23.8955 23.1584 21.6569 25.397 18.8955 25.397H5C2.23858 25.397 0 23.1584 0 20.397V6.22788Z"
                            />
                        </mask>
                        <path
                            d="M22.3939 0.585787L20.9796 2V2L22.3939 0.585787ZM19.5654 0.585787L18.1512 -0.828429L18.1512 -0.828427L19.5654 0.585787ZM24.8113 3.00328L26.2256 1.58906V1.58906L24.8113 3.00328ZM24.8113 5.8317L26.2256 7.24592L24.8113 5.8317ZM10.4845 20.1585L9.07031 18.7443L9.07031 18.7443L10.4845 20.1585ZM5.5123 14.6389L4.09809 13.2247L4.09808 13.2247L5.5123 14.6389ZM6.92651 16.0531L5.5123 14.6389L4.92651 15.2247V16.0531H6.92651ZM17.5128 5.46686L18.927 4.05265L17.5128 2.63844L16.0986 4.05265L17.5128 5.46686ZM6.92651 18.7443H4.92651V20.7443H6.92651V18.7443ZM9.07031 18.7443V20.7443H9.89874L10.4845 20.1585L9.07031 18.7443ZM19.9303 7.88436L21.3445 9.29857L22.7587 7.88436L21.3445 6.47014L19.9303 7.88436ZM18.7489 4.23077L17.3347 2.81656L15.9204 4.23077L17.3347 5.64498L18.7489 4.23077ZM21.1664 6.64826L19.7521 8.06248L21.1664 9.47669L22.5806 8.06248L21.1664 6.64826ZM23.3971 4.41749L24.8113 5.83171L26.2256 4.41749L24.8113 3.00328L23.3971 4.41749ZM20.9796 2L22.3939 0.585787L20.9796 -0.828428L19.5654 0.585786L20.9796 2ZM13.6691 1.22788H15.6691V-0.772124H13.6691V1.22788ZM13.6691 3.22788V5.22788H15.6691V3.22788H13.6691ZM21.8955 11.6703V9.67029H19.8955V11.6703H21.8955ZM23.8955 11.6703H25.8955V9.67029H23.8955V11.6703ZM23.8081 -0.828427C22.246 -2.39052 19.7133 -2.39052 18.1512 -0.828429L20.9796 2L20.9796 2L23.8081 -0.828427ZM26.2256 1.58906L23.8081 -0.828427L20.9796 2L23.3971 4.41749L26.2256 1.58906ZM26.2256 7.24592C27.7876 5.68383 27.7877 3.15117 26.2256 1.58906L23.3971 4.41749L23.3971 4.41749L26.2256 7.24592ZM11.8987 21.5727L26.2256 7.24592L23.3971 4.41749L9.07031 18.7443L11.8987 21.5727ZM9.07031 22.7443C10.1312 22.7443 11.1486 22.3229 11.8987 21.5727L9.07031 18.7443L9.07031 18.7443V22.7443ZM6.92651 22.7443H9.07031V18.7443H6.92651V22.7443ZM2.92651 18.7443C2.92651 20.9534 4.71737 22.7443 6.92651 22.7443V18.7443H6.92651H2.92651ZM2.92651 16.0531V18.7443H6.92651V16.0531H2.92651ZM4.09808 13.2247C3.34794 13.9748 2.92651 14.9923 2.92651 16.0531H6.92651L6.92652 16.0531L4.09808 13.2247ZM18.1512 -0.828427L4.09809 13.2247L6.92651 16.0531L20.9796 2L18.1512 -0.828427ZM8.34073 17.4673L18.927 6.88108L16.0986 4.05265L5.5123 14.6389L8.34073 17.4673ZM8.92651 18.7443V16.0531H4.92651V18.7443H8.92651ZM9.07031 16.7443H6.92651V20.7443H9.07031V16.7443ZM18.5161 6.47014L7.6561 17.3301L10.4845 20.1585L21.3445 9.29857L18.5161 6.47014ZM21.3445 6.47014L18.927 4.05265L16.0986 6.88108L18.5161 9.29857L21.3445 6.47014ZM17.3347 5.64498L19.7521 8.06248L22.5806 5.23405L20.1631 2.81656L17.3347 5.64498ZM21.9829 3.00328L19.7521 5.23405L22.5806 8.06248L24.8113 5.83171L21.9829 3.00328ZM19.5654 3.41421L21.9829 5.8317L24.8113 3.00328L22.3939 0.585787L19.5654 3.41421ZM20.1631 5.64498L22.3939 3.41421L19.5654 0.585786L17.3347 2.81656L20.1631 5.64498ZM5 -0.772124C1.13401 -0.772124 -2 2.36188 -2 6.22788H2C2 4.57102 3.34315 3.22788 5 3.22788V-0.772124ZM13.6691 -0.772124H5V3.22788H13.6691V-0.772124ZM15.6691 3.22788V1.22788H11.6691V3.22788H15.6691ZM5 5.22788H13.6691V1.22788H5V5.22788ZM4 6.22788C4 5.67559 4.44772 5.22788 5 5.22788V1.22788C2.23858 1.22788 0 3.46645 0 6.22788H4ZM4 20.397V6.22788H0V20.397H4ZM5 21.397C4.44772 21.397 4 20.9493 4 20.397H0C0 23.1584 2.23857 25.397 5 25.397V21.397ZM18.8955 21.397H5V25.397H18.8955V21.397ZM19.8955 20.397C19.8955 20.9493 19.4477 21.397 18.8955 21.397V25.397C21.6569 25.397 23.8955 23.1584 23.8955 20.397H19.8955ZM19.8955 11.6703V20.397H23.8955V11.6703H19.8955ZM23.8955 9.67029H21.8955V13.6703H23.8955V9.67029ZM25.8955 20.397V11.6703H21.8955V20.397H25.8955ZM18.8955 27.397C22.7614 27.397 25.8955 24.263 25.8955 20.397H21.8955C21.8955 22.0539 20.5523 23.397 18.8955 23.397V27.397ZM5 27.397H18.8955V23.397H5V27.397ZM-2 20.397C-2 24.263 1.134 27.397 5 27.397V23.397C3.34315 23.397 2 22.0539 2 20.397H-2ZM-2 6.22788V20.397H2V6.22788H-2Z"
                            fill="#9A9A9A"
                            mask="url(#path-1-inside-1_201_122)"
                        />
                    </svg>
                </div>
            </div>
            <MessagerGrp />
            <MessagerGrp />
        </div>
    );
};

export { Messagers };