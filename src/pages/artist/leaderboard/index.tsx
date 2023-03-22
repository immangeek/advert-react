import react from 'react';
import Link from "next/link";
import CustomLayout from '@/components/layout/artist';
import Navbar from '@/components/navbar/artist';
import Head from 'next/head';




export default function HomePage() {
    return (
     

    <CustomLayout>
    <div>
      
    <div className= "main_title">Welcome to Leaderboard Page!</div>
  
    <Link href="/">Home</Link>
    </div>
    </CustomLayout>
    )
   
  }
  

  
  