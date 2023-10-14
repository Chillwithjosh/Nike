import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
// 6 8 9
const Nav = () => {
    // const [openMenu, setOpenMenu] = React.useState(false)
    // const showMenu = () => setOpenMenu(!openMenu)

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img
                    src={headerLogo}
                    alt='Logo'
                    width={130}
                    height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label} >
                        <a
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition duration-200'
                        >
                            {item.label}

                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img
                    src={hamburger}
                    alt='hamburger'
                    width={25}
                    height={25}
                    // onClick={showMenu}
                />
            </div>
        </nav>
        {/* <div className={`text-yellow-400 fixed h-screen w-[275px] top-0 transition duration-[5000] ${openMenu ? "right-[0px]" : "right-[0px]"}`}>
        <div className='hidden max-lg:block'>
                <img
                    src={hamburger}
                    alt='hamburger'
                    width={25}
                    height={25}
                    onClick={showMenu}
                />
        </div>
        </div> */}
    </header>
  )
}

export default Nav