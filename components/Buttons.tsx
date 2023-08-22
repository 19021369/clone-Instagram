"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Popup from "reactjs-popup";
import "../index.css";
import Carousels from "./Carousels";
import { useCreatePost } from "@/network";
import { useForm } from "react-hook-form";

const Buttons = () => {
    const router = usePathname();
    const { useState } = React;
    const [files, setFiles] = useState([]);
    const [caption, setCaption] = useState("");
    const [step, setStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const { mutateAsync: createPost, isLoading } = useCreatePost();
    const {postType, setPostType} = useState('');

    const handleFile = (e: any) => {
        const newFiles: any = [];
        for (let i = 0; i < e.target.files.length; i++) {
            newFiles.push(e.target.files[i]);
        }
        setFiles(newFiles);
        setStep(step + 1);
    };

    const removeFile = (e: any) => {
        setFiles([]);
    };

    const { register, handleSubmit } = useForm();

    const handleShare = (data: any) => {
        setPostType('post');
        const obj = {
            createdByUserId: `${id}`,
            createdDatetime: `${Date.now()}`,
            caption: `${data.caption}`,
            postType: `${postType}`,
        };

        const json = JSON.stringify(obj);
        const blob = new Blob([json], {
            type: "application/json",
        });
        var lastData = new FormData();

        lastData.append("post", blob);
        files.map((file) => {
            lastData.append("image", file);
        });

        createPost(lastData)
            .then((post) => {
                console.log("post", post);
            })
            .catch((error) => {});
        setIsOpen(false);
        console.log(data);
    };
    return (
        <div className="2-buttons h-[14.26%] flex items-end relative">
            <div className="absolute w-[477px] right-[55px] flex justify-center">
                <div className="relative bg-[#EFEFEF] h-[114px] w-[225px] rounded-[111px] flex items-center justify-center gap-16">
                    <Popup
                        trigger={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="37"
                                height="37"
                                viewBox="0 0 448 512"
                                className="cursor-pointer"
                            >
                                <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                            </svg>
                        }
                        on="click"
                        open={isOpen}
                        onOpen={() => setIsOpen(!isOpen)}
                    >
                        <form
                            onSubmit={handleSubmit(handleShare)}
                            className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-40"
                        >
                            <button
                                className="fixed tiop-5 right-5 text-5xl"
                                onClick={() => {
                                    setIsOpen(!isOpen),
                                        setFiles([]),
                                        setStep(0);
                                }}
                            >
                                x{" "}
                            </button>
                            <div
                                className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-3xl ${
                                    step === 2 ? "w-[1000px]" : "w-[500px]"
                                } h-[580px] transition-all duration-500
                            ease-out`}
                            >
                                <div
                                    className={`w-full h-20 py-5 px-8 text-2xl font-semibold mx-auto ${
                                        step === 0
                                            ? "justify-center"
                                            : "justify-between"
                                    } border-b-2 border-black items-center flex`}
                                >
                                    {step !== 0 && (
                                        <button
                                            onClick={() => {
                                                setStep(step - 1);
                                                if (step === 1) {
                                                    removeFile;
                                                }
                                            }}
                                        >
                                            {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                                            </svg>
                                        </button>
                                    )}
                                    Create new post
                                    {step === 2 && (
                                        <button onClick={handleShare}>
                                            Share{" "}
                                        </button>
                                    )}
                                    {step !== 0 && step !== 2 && (
                                        <button
                                            onClick={() => setStep(step + 1)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                <div className="flex">
                                    {step === 0 && (
                                        <div className="h-[500px] w-full rounded-b-3xl overflow-hidden relative shadow-md items-center cursor-pointer">
                                            <input
                                                type="file"
                                                onChange={handleFile}
                                                className="h-full w-full opacity-0 z-10 absolute"
                                                multiple={true}
                                                name="files[]"
                                            />
                                            <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                                                <div className="flex flex-col">
                                                    <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="4em"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                                                    </svg>
                                                    <span className="text-xl font-bold">{`Drag and Drop a file`}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {step !== 0 && (
                                        <div className="h-[500px] w-[500px] rounded-3xl">
                                            <Carousels imageLists={files} />
                                        </div>
                                    )}
                                    {step === 2 && (
                                        <div className="p-5 w-1/2">
                                            <div className="flex gap-3 items-center mb-5">
                                                <img
                                                    src="17.png"
                                                    alt=""
                                                    className="h-10"
                                                />
                                                <div className="text-lg font-bold">
                                                    Username
                                                </div>
                                            </div>
                                            <textarea
                                                {...register("caption")}
                                                onChange={(e) =>
                                                    setCaption(e.target.value)
                                                }
                                                rows={6}
                                                placeholder="Write a caption..."
                                                className="bg-transparent w-full border-transparent resize-none"
                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </Popup>

                    {router === "/profile" && (
                        <div className="border-[1px] border-[#DCDCDC] w-[1px] h-[62px]"></div>
                    )}
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

                    {router === "/search" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            className="absolute top-8 right-8"
                        >
                            <circle cx="5.5" cy="5.5" r="5.5" fill="#0095F6" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Buttons;
