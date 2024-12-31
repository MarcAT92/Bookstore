import { Link } from "react-router-dom"
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser, HiOutlineHeart } from "react-icons/hi";

import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { useSelector } from "react-redux";


const navigation = [
    {name: "Dashboard", href:"/dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart", href:"/cart"},
    {name: "Check-Out", href:"/checkout"}
]

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems);

    const currentUser = false;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            {/* Left side of navbar */}
            <div className="flex items-center md:gap-16 gap-4">
                {/* Logo */}
                <Link to="/">
                    <img src="/fav-icon.png" alt="Bookstore" className="h-10" />
                </Link>

                {/* Search bar */}
                <div className="relative sm:w-72 w-40 md:space-x-2 space-x-3 ">
                    <IoSearchOutline  className="absolute inline-block left-4 inset-y-2" />
                    <input type="text" placeholder="Search" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
                </div>
            </div>


            {/* Right side of navbar */}
            <div className="relative flex items-center space-x-4">
                <div>
                    {
                        currentUser? <>
                        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} > 
                            <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''} `} />
                        </button>
                        {/* Dropdown menu for logged in user */}
                        {
                            isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                    <ul className="py-2">
                                        {
                                            navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                        </> :  <Link to="/login"><HiOutlineUser className="size-6"/></Link>
                    }
                </div>
           
            <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
            </button>

            <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm">
            <HiOutlineShoppingCart className="size-6" />
            {
                cartItems.length > 0 ? <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1">0</span>
            }
            
            </Link>

            </div>
        </nav>
    </header>
  )
}

export default Navbar