import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
    const [count, setCount] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const getCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCount(cart.length);
      }
      getCartCount();
      const onStorage = (e) => {
        if (e.key === 'cart') getCartCount();
      };
      window.addEventListener('storage', onStorage);
      return () => window.removeEventListener('storage', onStorage);
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCount(cart.length);
      }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const checkLogin = () => {
        setIsLoggedIn(localStorage.getItem('adminLoggedIn') === 'true');
      };
      checkLogin();
      const onStorage = (e) => {
        if (e.key === 'adminLoggedIn') checkLogin();
      };
      window.addEventListener('storage', onStorage);
      return () => window.removeEventListener('storage', onStorage);
    }, []);

    const handleLogout = () => {
      localStorage.removeItem('adminLoggedIn');
      localStorage.removeItem('adminUser');
      setIsLoggedIn(false);
      navigate('/');
    };

    return (
        <div className=' text-black flex justify-around p-4 text-xl shadow-md bg-white  '>
            <Link to='/'>Home</Link>
            {isLoggedIn ? (
              <Link to='/admin'>Dashboard</Link>
            ) : (
              <Link to='/about'>About</Link>
            )}
            <Link to='/books'>Books</Link>
            {!isLoggedIn && <Link to='/contact'>Contact</Link>}
            {isLoggedIn ? (
              <button onClick={handleLogout} className='flex items-center !bg-gray-200 border-none cursor-pointer hover:!bg-gray-300 p-2 rounded'>
                <FaSignOutAlt size={24} />
              </button>
            ) : (
              <Link to='/shopping-cart' className='relative'>
                <FaShoppingCart size={24} />
                {count > 0 && (
                  <span className='absolute -top-2 -right-5 bg-red-500 text-white rounded-full w-5 h-5 text-center text-xs'>{count}</span>
                )}
              </Link>
            )}
        </div>
    )
}
