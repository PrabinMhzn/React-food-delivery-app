import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import nameLogo from '../assets/logo.png'
import {MdOutlineAccountCircle, MdOutlineShoppingCart} from 'react-icons/md'
import {IoChatboxEllipsesOutline} from 'react-icons/io5'




const NavBar = () => {

    const [nav, setNav] = useState(false);


    const links = [
        {
            id: 1,
            title: 'Full Menu',
            link: 'fullmenu'
        },
        {
            id: 2,
            title: "Meal Plans",
            link: 'mealplans'
        },
        {
            id: 3,
            title: "Add Ons",
            link: 'addons'
        },
        {
            id: 4,
            title: "About",
            link: 'about'
        },
        
        {
            id: 5,
            title: "Contact",
            link: 'contact'
        },
        
        
    ]
  return (
    <div className=' flex flex-row items-center justify-between w-full h-30 px-2 text-black bg-white top-0 fixed border-b border-gray-400'>
        <div className='ml-10'>
    
           <Link to={"/"}> <img src= {nameLogo} alt="" className='w-20'/></Link>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link,title}) => (
                <li
                    key={id} 
                    className='px-10 cursor-pointer  capitalize font-medium text-xl  text-black hover:scale-110 hover:text-red-600 duration-200 '>
                   <Link to={link} smooth duration={300} >
                        {title}
                    </Link>
                   </li>
    
                ))}        

            </ul>
            {nav &&(
                <ul className='flex flex-col justify-center items-center  top-0 left-0 w-full h-screen bg-gradient-to-bl from-black to-gray-800 text-gray-500 z-50'>

                {links.map(({id,link}) => (
                    <li key={id} 
                    className='px-2 cursor-pointer capitalize py-6 text-4xl'>
                        <Link to= {link} smooth duration= {300}>
                        {link}
                    </Link></li>
        
                    ))}
    
    
                </ul>

                
            )} 

            <ul className='flex m-10 '>
                        <li className='mx-2  md:mx-3'><button className='text-2xl text-red-600'><IoChatboxEllipsesOutline/></button></li>
                        <li className='mx-2  md:mx-3'><button className='text-2xl '><MdOutlineAccountCircle/></button></li>
                        <li className='mx-2  md:mx-3'><button  className='text-2xl text-red-600'><MdOutlineShoppingCart/></button></li>
                        
                    </ul>
            
                
                    
                    
            
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
            </div>
            
    
    </div>
  )
}

export default NavBar
