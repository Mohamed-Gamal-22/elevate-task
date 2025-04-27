import React from 'react';
import style from "./ourTeam.module.css";
import Image from 'next/image';
import member1 from "../../../public/assets/images/Frame 110.png";
import member2 from "../../../public/assets/images/Frame 111.png";
import member3 from "../../../public/assets/images/Frame 112.png";
import member4 from "../../../public/assets/images/Frame 113.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import ThirdNav from '../third-nav/ThirdNav';


export default function OurTeam() {
  return <>
    <h3 className={`${style.letter} text-center color-rose font-bold`}>Our Team</h3>
    <h2 className={`text-center font-bold text-[30px] ${style.test}`}>Meet Our Expert <span className='color-rose'>Team</span></h2>

    <div className="container w-[80%] mx-auto flex flex-wrap items-center">
        <div className="member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <header className='text-center my-8'>
            <Image src={member1} alt="member1" className='w-full rounded-lg'/>
            <h3 className='color-dark font-bold mt-2'>Mohamed Gamal</h3>
            <h3 className='color-rose font-bold my-0'>Front End Developer</h3>
          </header>
          <footer className='my-6 border-t-2 border-slate-300 pt-4'>
            <div className="icons flex justify-between">
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaFacebook className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose size-9 flex items-center justify-center rounded-full">
                <FaInstagram className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaTwitter className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaYoutube className='text-white size-5 '/>
              </div>
            </div>
          </footer>
        </div>
        <div className="member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <header className='text-center my-8'>
            <Image src={member2} alt="member1" className='w-full rounded-lg'/>
            <h3 className='color-dark font-bold mt-2'>Mohamed Gamal</h3>
            <h3 className='color-rose font-bold my-0'>Front End Developer</h3>
          </header>
          <footer className='my-6 border-t-2 border-slate-300 pt-4'>
            <div className="icons flex justify-between">
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaFacebook className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose size-9 flex items-center justify-center rounded-full">
                <FaInstagram className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaTwitter className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaYoutube className='text-white size-5 '/>
              </div>
            </div>
          </footer>
        </div>
        <div className="member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <header className='text-center my-8'>
            <Image src={member3} alt="member1" className='w-full rounded-lg'/>
            <h3 className='color-dark font-bold mt-2'>Mohamed Gamal</h3>
            <h3 className='color-rose font-bold my-0'>Front End Developer</h3>
          </header>
          <footer className='my-6 border-t-2 border-slate-300 pt-4'>
            <div className="icons flex justify-between">
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaFacebook className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose size-9 flex items-center justify-center rounded-full">
                <FaInstagram className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaTwitter className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaYoutube className='text-white size-5 '/>
              </div>
            </div>
          </footer>
        </div>
        <div className="member w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <header className='text-center my-8'>
            <Image src={member4} alt="member1" className='w-full rounded-lg'/>
            <h3 className='color-dark font-bold mt-2'>Mohamed Gamal</h3>
            <h3 className='color-rose font-bold my-0'>Front End Developer</h3>
          </header>
          <footer className='my-6 border-t-2 border-slate-300 pt-4'>
            <div className="icons flex justify-between">
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaFacebook className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose size-9 flex items-center justify-center rounded-full">
                <FaInstagram className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaTwitter className='text-white size-5 '/>
              </div>
              <div className="icon bg-rose bg-rose size-9 flex items-center justify-center rounded-full">
                <FaYoutube className='text-white size-5 '/>
              </div>
            </div>
          </footer>
        </div>
    </div>
        <ThirdNav />
  </>
}
