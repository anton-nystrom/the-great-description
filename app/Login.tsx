'use client';
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className='flex flex-col items-center place-content-center h-[calc(100dvh)]'>
      <button onClick={() => signIn('google')} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-20 py-2.5 mb-2">Login</button>
    </div>
  )
}
