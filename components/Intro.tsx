import Image from 'next/image';
import Navbar from './Navbar';
import Storys from './Storys';
import Post from './Post';
const Intro = () => {
    return (
        <div className='h-[1080px]'>
            <div className='flex justify-center h-[154px] p-[40px]'>
                <div className="w-[206px] h-[58px] bg-[url('/image4.png')]"></div>
            </div>

            <div className='body flex'>
                <div className='nav-bar w-[224px] flex justify-center mx-auto'>
                    <Navbar />
                </div>
                <div className='content w-[896px]'>
                    <div className='storys flex space-x-[25px] pb-10'>
                        <div className="bg-[url('/image10.png')] bg-[length: 82px 82px] w-[97px] h-[97px] bg-center bg-no-repeat relative">
                            <button className='rounded-full w-[37px] h-[37px] bg-white absolute bottom-0 right-0'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    height='30'
                                    viewBox='0 0 30 30'
                                    fill='none'
                                    className='rounded-full m-auto'
                                >
                                    <circle
                                        cx='15'
                                        cy='15'
                                        r='15'
                                        fill='#0095F6'
                                    />
                                </svg>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='17'
                                    height='17'
                                    viewBox='0 0 17 17'
                                    fill='none'
                                    className='absolute right-[10px] bottom-[10px]'
                                >
                                    <mask
                                        id='path-1-inside-1_602_16'
                                        fill='white'
                                    >
                                        <path
                                            fill-rule='evenodd'
                                            clip-rule='evenodd'
                                            d='M8.28788 0C7.5766 0 7 0.576603 7 1.28788V6.99993H1.28788C0.576603 6.99993 0 7.57653 0 8.2878C0 8.99908 0.576603 9.57568 1.28788 9.57568H7V15.7121C7 16.4234 7.5766 17 8.28788 17C8.99915 17 9.57576 16.4234 9.57576 15.7121V9.57568H15.7121C16.4234 9.57568 17 8.99908 17 8.2878C17 7.57653 16.4234 6.99993 15.7121 6.99993H9.57576V1.28788C9.57576 0.576603 8.99915 0 8.28788 0Z'
                                        />
                                    </mask>
                                    <path
                                        d='M7 6.99993V9.99993H10V6.99993H7ZM7 9.57568H10V6.57568H7V9.57568ZM9.57576 9.57568V6.57568H6.57576V9.57568H9.57576ZM15.7121 6.99993V9.99993H15.7121L15.7121 6.99993ZM9.57576 6.99993H6.57576V9.99993H9.57576V6.99993ZM10 1.28788C10 2.23346 9.23346 3 8.28788 3V-3C5.91975 -3 4 -1.08025 4 1.28788H10ZM10 6.99993V1.28788H4V6.99993H10ZM1.28788 9.99993H7V3.99993H1.28788V9.99993ZM3 8.2878C3 9.23338 2.23346 9.99993 1.28788 9.99993V3.99993C-1.08025 3.99993 -3 5.91967 -3 8.2878H3ZM1.28788 6.57568C2.23346 6.57568 3 7.34223 3 8.2878H-3C-3 10.6559 -1.08025 12.5757 1.28788 12.5757V6.57568ZM7 6.57568H1.28788V12.5757H7V6.57568ZM10 15.7121V9.57568H4V15.7121H10ZM8.28788 14C9.23346 14 10 14.7665 10 15.7121H4C4 18.0803 5.91975 20 8.28788 20V14ZM6.57576 15.7121C6.57576 14.7665 7.3423 14 8.28788 14V20C10.656 20 12.5758 18.0802 12.5758 15.7121H6.57576ZM6.57576 9.57568V15.7121H12.5758V9.57568H6.57576ZM15.7121 6.57568H9.57576V12.5757H15.7121V6.57568ZM14 8.2878C14 7.34223 14.7665 6.57568 15.7121 6.57568V12.5757C18.0803 12.5757 20 10.6559 20 8.2878H14ZM15.7121 9.99993C14.7665 9.99993 14 9.23338 14 8.2878H20C20 5.91967 18.0802 3.99992 15.7121 3.99993L15.7121 9.99993ZM9.57576 9.99993H15.7121V3.99993H9.57576V9.99993ZM6.57576 1.28788V6.99993H12.5758V1.28788H6.57576ZM8.28788 3C7.3423 3 6.57576 2.23346 6.57576 1.28788H12.5758C12.5758 -1.08025 10.656 -3 8.28788 -3V3Z'
                                        fill='white'
                                        mask='url(#path-1-inside-1_602_16)'
                                    />
                                </svg>
                            </button>
                        </div>
                        <Storys />
                        <Storys />
                        <Storys />
                        <Storys />
                        <Storys />
                        <Storys />
                        <button className='w-[49px] h-[97px] bg-[#EFEFEF] rounded-[42px] flex justify-center items-center'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='36'
                                viewBox='0 0 20 36'
                                fill='none'
                            >
                                <path
                                    d='M18.9735 16.3961L18.9733 16.3959L3.55764 1.02285L3.55753 1.02275C2.85697 0.32453 1.72287 0.325803 1.02367 1.02627L1.02355 1.02638C0.324549 1.7271 0.326508 2.8619 1.02707 3.56057L1.02708 3.56058L15.1701 17.6646L1.02657 31.7685L1.0265 31.7686C0.326067 32.4673 0.324108 33.6015 1.02299 34.3023L1.02315 34.3024C1.37332 34.6532 1.83336 34.829 2.29207 34.829C2.74948 34.829 3.20782 34.6544 3.55747 34.3059L3.55757 34.3058L18.9729 18.9336C18.973 18.9335 18.9731 18.9334 18.9733 18.9332C19.3109 18.5971 19.5 18.1402 19.5 17.6646C19.5 17.1882 19.31 16.732 18.9735 16.3961Z'
                                    fill='black'
                                    stroke='black'
                                />
                            </svg>{' '}
                        </button>
                    </div>
                    <div className='posts h-[563px] bg-[#EFEFEF] rounded-[36px] p-4'>
                        <Post />
                    </div>
                </div>
                <div className='messages w-[800px] '>messages</div>
            </div>
        </div>
    );
};

export default Intro;
