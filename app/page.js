"use client"
import { useRouter } from 'next/navigation';
import {useState} from 'react'
import esimData from './data/esimData.json'
import Header from "./components/Header";
import Spinner from './components/Spinner';

export default function Home() {
  const [bookingId,setBookingId] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = ()=>{
        setLoading(true);
          if(bookingId===esimData.bookingId){
              router.push(`/dashboard`);
          }
        else{
          alert('Enter a valid Booking ID (e.g. esim_12345678)');
        }
  }
  return (
    <div className="min-h-screen bg-gray-100">
        <Header/>
        <main className="flex  items-center justify-center mt-4">
        <div className="bg-white p-6 rounded-xl shadow-md w-80 space-y-4">
      <h1 className='text-xl font-semibold text-center '>Enter your Booking ID</h1>
      <input type="text"
      value={bookingId}
      onChange={(e) => setBookingId(e.target.value)}
       placeholder="e.g. esim_12345678"
       className='w-full border px-3 py-3 rounded-lg'
      />
      {loading ? ( 
        <div className="flex items-center justify-center">
        <Spinner/>
        </div>
        ):(
      <button 
      onClick={handleSubmit}
      className='w-full bg-blue-500  hover:bg-blue-700 cursor-pointer text-white py-2  rounded-lg '>
        Submit
      </button>)
      }
      </div>
    </main>
    </div>
  );
}
