"use client";
import { DropDown, Navbar } from "@/components";
import { useCreatePost, useUserProfile } from "@/network";
import Link from "next/link";
import React, { useMemo } from "react";
import Popup from "reactjs-popup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
    username: yup
        .string()
        .required("Vui lòng nhập tên")
        .min(1, "Vui lòng không bỏ trống"),
    nickname: yup.string().required("Vui lòng nhập tên"),
    bio: yup.string().required("Vui lòng nhập tiểu sử"),
});

const page = () => {
    const { data: userRes } = useUserProfile();
    const userProfiles = useMemo(() => userRes ?? [], [userRes]);
    const userProfile = userProfiles?.shift();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    
    const {mutateAsync: editUser, isLoading } = useCreatePost();

    const onSubmit = (data: any) => {
        editUser(data)
        .then((userInformation) =>{
            console.log("userInformation", userInformation);
            
        }).catch((error) => {})
    };


    return (
        <div className="h-screen flex scroll">
            <div className="lside nav-bar w-[11.67%] h-full flex justify-center items-center">
                <Navbar />
            </div>
            <div className="w-[88.33%]">
                <div className="top h-[14.26%] flex justify-between">
                    <div className="instagram flex justify-center items-center mr-auto w-full">
                        <div className="w-[206px] h-[58px] bg-[url('/image4.png')] ml-[181px]"></div>
                    </div>
                    <div className="2-buttons flex items-end mr-[181px]">
                        <div className="bg-[#EFEFEF] h-[114px] w-[225px] rounded-[111px] flex items-center justify-center gap-[28px]">
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
                            <div className="border-[1px] border-[#DCDCDC] w-[1px] h-[62px]"></div>
                            <DropDown />
                        </div>
                    </div>
                </div>
                <div className="flex h-[85.74%] w-full">
                    <div className="mid w-[76.49%]">
                        <div className="content w-[92.6%] mr-0 ml-auto">
                            <div className="profile-user flex">
                                <div
                                    className="w-[195px] h-[195px]"
                                    style={{
                                        backgroundImage: `url('/Ellipse44.png')`,
                                    }}
                                ></div>
                                <div className="text-lg flex flex-col gap-2 ml-16">
                                    <strong className="text-4xl font-semibold">
                                        {userProfile?.userName}
                                    </strong>
                                    <div className="flex gap-3 items-center">
                                        @{userProfile?.nickName}
                                        <button className="h-[26px] w-[26px] bg-[#EFEFEF] rounded-full flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="8"
                                                viewBox="0 0 15 8"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.91162 7.83122L14.8304 0.979811C15.0569 0.755333 15.0565 0.391897 14.8292 0.167795C14.6019 -0.0561333 14.2337 -0.0555547 14.0069 0.168952L7.49997 6.61254L0.993044 0.16872C0.766287 -0.0557579 0.39829 -0.0563366 0.170947 0.167563C0.056983 0.279903 -1.86682e-08 0.427077 -2.51013e-08 0.574251C-3.15181e-08 0.721049 0.0566015 0.867644 0.169775 0.979782L7.08835 7.83122C7.19728 7.93933 7.34552 8 7.49997 8C7.65442 8 7.80249 7.93916 7.91162 7.83122Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex gap-10">
                                        <div>
                                            <strong>225</strong> Posts
                                        </div>
                                        <div>
                                            <strong>225</strong> Followers
                                        </div>
                                        <div>
                                            <strong>225</strong> Following
                                        </div>
                                    </div>
                                    <div>
                                        {" "}
                                        <strong>Bio: </strong>
                                        {userProfile?.bio}
                                    </div>
                                    <Link
                                        className="text-blue-500"
                                        href={"https://linktr.ee/amanux"}
                                    >
                                        linktr.ee/amanux
                                    </Link>

                                    <div>
                                        <Popup
                                            trigger={
                                                <button className="w-[141px] h-10 rounded-[19.5px] bg-[#EFEFEF]">
                                                    {" "}
                                                    edit profile
                                                </button>
                                            }
                                        >
                                            <form className="bg-gray-900 bg-opacity-80 w-72 p-10 rounded-3xl text-white flex flex-col gap-10">
                                                <div>
                                                    <label htmlFor="username">
                                                        User name:
                                                    </label>{" "}
                                                    <input
                                                        className="bg-red h-[53px] border-gray-500 border-2 rounded-lg px-2 w-full text-black"
                                                        placeholder="Tên*"
                                                        {...register(
                                                            "username"
                                                        )}
                                                    />
                                                    <p className="text-red-500">
                                                        {
                                                            errors.username
                                                                ?.message
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <label htmlFor="nickname">
                                                        Nick name:
                                                    </label>{" "}
                                                    <input
                                                        className="bg-red w-full h-[53px] border-gray-500 border-2 rounded-lg px-2 text-black"
                                                        placeholder="nickname*"
                                                        {...register(
                                                            "nickname"
                                                        )}
                                                    />
                                                    <p className="text-red-500">
                                                        {
                                                            errors.nickname
                                                                ?.message
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <label htmlFor="nickname">
                                                        Bio:
                                                    </label>{" "}
                                                    <input
                                                        className="bg-red w-full h-[53px] border-gray-500 border-2 rounded-lg px-2 text-black"
                                                        placeholder="Bio*"
                                                        {...register("bio")}
                                                    />
                                                    <p className="text-red-500">
                                                        {errors.bio?.message}
                                                    </p>
                                                </div>
                                                <div className=" w-full flex justify-center items-center mt-5">
                                                    <button
                                                        className=" bg-red-600 w-[160px] h-[52px] rounded-lg flex justify-center items-center"
                                                        onClick={handleSubmit(
                                                            onSubmit
                                                        )}
                                                    >
                                                        <h1 className="text-white font-nigger uppercase ">
                                                            Gửi
                                                        </h1>
                                                    </button>
                                                </div>
                                            </form>
                                        </Popup>
                                    </div>
                                </div>
                            </div>
                            <div className="3-buttons mt-8 mb-6 text-2xl flex justify-center gap-20 text-[#8D8D8D]">
                                <div className="flex items-center gap-2 text-[#0095F6]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="31"
                                        height="31"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M18.6 2.06667H12.4V9.3H18.6V2.06667ZM10.3333 2.06667V9.3H2.06667V4.13333C2.06667 2.99195 2.99195 2.06667 4.13333 2.06667H10.3333ZM10.3333 11.3667H2.06667V18.6H10.3333V11.3667ZM10.3333 20.6667H2.06667V26.8667C2.06667 28.0081 2.99195 28.9333 4.13333 28.9333H10.3333V20.6667ZM0 20.6667V18.6V11.3667V9.3V4.13333C0 1.85056 1.85056 0 4.13333 0H10.3333H12.4H26.8667C29.1495 0 31 1.85056 31 4.13333V26.8667C31 29.1495 29.1495 31 26.8667 31H20.6667H18.6H4.13333C1.85056 31 0 29.1495 0 26.8667V20.6667ZM12.4 20.6667H18.6V28.9333H12.4V20.6667ZM18.6 18.6H12.4V11.3667H18.6V18.6ZM20.6667 20.6667V28.9333H26.8667C28.0081 28.9333 28.9333 28.0081 28.9333 26.8667V20.6667H20.6667ZM28.9333 18.6V11.3667H20.6667V18.6H28.9333ZM28.9333 4.13333V9.3H20.6667V2.06667H26.8667C28.0081 2.06667 28.9333 2.99195 28.9333 4.13333Z"
                                            fill="#0095F6"
                                        />
                                    </svg>
                                    POSTS
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="31"
                                        height="31"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.1305 2.48132H10.011L13.23 7.27821L20.2398 7.18466L17.1305 2.48132ZM6.61686 2.48132H8.01885L11.2555 7.30456L2.48132 7.42167V6.61686C2.48132 4.33287 4.33287 2.48132 6.61686 2.48132ZM19.1135 2.48132L22.2054 7.15842L28.5187 7.07415V6.61686C28.5187 4.33287 26.6671 2.48132 24.3831 2.48132H19.1135ZM2.48132 24.3831V9.9032L28.5187 9.55573V24.3831C28.5187 26.6671 26.6671 28.5187 24.3831 28.5187H6.61686C4.33287 28.5187 2.48132 26.6671 2.48132 24.3831ZM6.61686 0C2.96247 0 0 2.96248 0 6.61686V24.3831C0 28.0375 2.96247 31 6.61686 31H24.3831C28.0375 31 31 28.0375 31 24.3831V6.61686C31 2.96247 28.0375 0 24.3831 0H6.61686ZM20.8982 19.6062C21.4445 19.2791 21.432 18.4834 20.8757 18.1737L13.5955 14.1218C13.0391 13.8121 12.3562 14.2209 12.3663 14.8575L12.4973 23.1883C12.5073 23.8249 13.2026 24.212 13.749 23.885L20.8982 19.6062Z"
                                            fill="#8D8D8D"
                                        />
                                    </svg>
                                    Reels
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="32"
                                        viewBox="0 0 26 32"
                                        fill="none"
                                    >
                                        <path
                                            d="M25 28.2398C25 29.8419 23.2105 30.7937 21.8821 29.8982L14.1179 24.6645C13.4422 24.209 12.5578 24.209 11.8821 24.6645L4.11791 29.8982C2.78951 30.7937 1 29.8419 1 28.2398V3C1 1.89543 1.89543 1 3 1H23C24.1046 1 25 1.89543 25 3V28.2398Z"
                                            stroke="#8D8D8D"
                                            strokeWidth="2"
                                            stroke-miterlimit="10"
                                        />
                                    </svg>
                                    SAVED
                                </div>
                            </div>
                            <div className="image-gallery grid grid-cols-4 justify-center items-center gap-[20px]">
                                <div className="max-w-[284px]">
                                    <img src="/Rectangle112.png" alt="" />
                                </div>
                                <div className="w-full">
                                    <img src="/Rectangle113.png" alt="" />
                                </div>
                                <div className="w-full">
                                    <img src="/Rectangle114.png" alt="" />
                                </div>
                                <div className="w-full">
                                    <img src="/Rectangle115.png" alt="" />
                                </div>
                                <div className="max-w-[284px]">
                                    <img src="/Rectangle116.png" alt="" />
                                </div>
                                <div className="w-full">
                                    <img src="/Rectangle117.png" alt="" />
                                </div>
                                <div className="w-full">
                                    <img src="/Rectangle118.png" alt="" />
                                </div>
                                <div className="w-full">
                                    <img src="/Rectangle119.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rside w-[23.61%] text-lg font-semibold flex flex-col items-center justify-end gap-4 mb-12">
                        <div>Sugestions for you</div>

                        <div className="grid grid-cols-2 gap-5 w-9/12">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/Ellipse35.png"
                                    width="76px"
                                    height="76px"
                                ></img>
                                <div className="text-sm mt-2">Julian Wan</div>
                                <button className="bg-[#0095F6] h-[19px] w-16 text-[11px] text-white flex justify-center items-center">
                                    Follow
                                </button>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="/Ellipse35.png"
                                    width="76px"
                                    height="76px"
                                ></img>
                                <div className="text-sm mt-2">
                                    Angelo Pantazis
                                </div>
                                <button className="bg-[#0095F6] h-[19px] w-16 text-[11px] text-white flex justify-center items-center">
                                    Follow
                                </button>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="/Ellipse35.png"
                                    width="76px"
                                    height="76px"
                                ></img>
                                <div className="text-sm mt-2">
                                    Gregory Hayes
                                </div>
                                <button className="bg-[#0095F6] h-[19px] w-16 text-[11px] text-white flex justify-center items-center">
                                    Follow
                                </button>
                            </div>
                            <div className="flex flex-col items-center">
                                <img
                                    src="/Ellipse35.png"
                                    width="76px"
                                    height="76px"
                                ></img>
                                <div className="text-sm mt-2">
                                    Jill Martinez
                                </div>
                                <button className="bg-[#0095F6] h-[19px] w-16 text-[11px] text-white flex justify-center items-center">
                                    Follow
                                </button>
                            </div>
                        </div>
                        <div className="w-[267px] h-[3px] border-2 border-[#EFEFEF]"></div>
                        <div className="w-[267px] text-[#8D8D8D] text-sm">
                            About • Help • Press • API • Jobs • Privacy •Terms •
                            Locations • Top Accounts • Hastags • Languages ©
                            <br />
                            <br />
                            2022 INSTAGRAM FROM META
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
