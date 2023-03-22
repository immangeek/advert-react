import react from 'react';
import Link from "next/link";
import CustomLayout from '../../../components/layout/artist'




export default function HomePage() {
    return (
    <CustomLayout>
    <div>
    <div>Welcome to Artist Page!</div>

    <Link href="/">Home</Link>

    </div>
    </CustomLayout>
    )
   
  }
  

  
  