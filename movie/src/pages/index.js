import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ["latin"] });
import TopRated from '@/component/TopRated';

export default function Home() {
  return (
    <div>
            <br/>
            <br/>
            <br/>
            <br/>
      <h1 style={{ fontWeight: 'bold', fontSize: '40px',marginLeft:"7%", fontSize: '60px' }}>TOP MOVIES</h1>
      <TopRated/>
    </div>
 );
}
