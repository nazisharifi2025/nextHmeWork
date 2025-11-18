"use client"
import Link from 'next/link'

import { usePathname } from 'next/navigation'
function Navbar() {
    const Navbar =[
        {
            id: 1,
            Name: 'Home',
            href: '/'
        },
        {
            id: 2,
            Name: 'About',
            href: '/about'  
        },
        {
            id: 3,
            Name: 'Blog',
            href: '/Bloge'
        },
        {
            id: 4,  
            Name: 'Product',
            href: '/product'
        }
    ]
    const PathName = usePathname();
  return (
    <div>  
        <nav className="h-20 w-full bg-cyan-900 space-x-12 text-white text-2xl flex justify-center items-center ">
      {Navbar.map((nav)=>{
        const isActive = PathName === nav.href || (PathName.startsWith('nav.href') && nav.href !== '/');
        return(
        <Link className={isActive? "border-b , border-white, font-bold" : ""} key={nav.id} href={nav.href} >{nav.Name}</Link>
        )
})}
<button className='shadow-md shadow-gray-400 px-6 py-2 rounded-md'><Link href="/Card/1?lang=en">English</Link></button>
<button className='shadow-md shadow-gray-400 px-6 py-2 rounded-md'><Link href="/Card/1?lang=fa">Persian</Link></button>
        </nav>
        </div>
  )
}

export default Navbar