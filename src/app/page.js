'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Loading() { //okay this works just as intended, it runs twice in dev because is using StrictMode
  const router = useRouter();

  useEffect(() => {
    const changePage = async () => {
      await sleep(3000);
      router.push('./pages/home');
    };

    changePage();
  }, [router]); // Empty dependency array ensures this runs once after the component mounts

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#E4DBCA]">
      <div className="mb-3 text-[150%] text-black">Loading....</div>
      <div className="bg-black w-[50%] h-5 rounded-md"></div>
    </div>
  );
}
