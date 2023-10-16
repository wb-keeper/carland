'use client'

import {useContext, useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {Link} from 'react-scroll'
import Image from "next/image";
import {BiMenuAltRight, BiX} from "react-icons/bi";
import SearchMobile from "@/app/components/SearchMobile";
import {SearchContext} from "@/app/context/search";

function Header(props) {
    const {setSearchActive} = useContext(SearchContext)
    const [header, setHeader] = useState(false)
    const [nav, setNav] = useState(false)
    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)'
    })
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setHeader(true)

            } else {
                setHeader(false)
            }
            if (window.scrollY > 800) {
                setSearchActive(true)
            } else {
                setSearchActive(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <header
            className={`${header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
            <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between ">
                <div className="flex justify-between items-center px-4"><Link to='home' smooth={desktopMode} soy={true}
                                                                              className='cursor-pointer'><Image
                    src={'/icons/logo.svg'} alt="logo" width={194} height={64}/></Link>
                    <div onClick={() => setNav(!nav)} className="cursor-pointer xl:hidden">{nav ?
                        <BiX className="text-4xl"/> : <BiMenuAltRight className="text-4xl"/>}</div>
                </div>
                <nav
                    className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max '} flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case `}>
                    <Link className='cursor-pointer' to='home' smooth={desktopMode} spy
                          activeClass='active'>Home</Link>
                    <Link className='cursor-pointer' to='cars' smooth={desktopMode} spy
                          activeClass='active'>Cars</Link>
                    <Link className='cursor-pointer' to='about' smooth={desktopMode} spy
                          activeClass='active'>About</Link>
                    <Link className='cursor-pointer' to='why' smooth={desktopMode} spy
                          activeClass='active'>Why us</Link>
                    <Link className='cursor-pointer' to='contact' smooth={desktopMode} spy
                          activeClass='active'>Contact</Link>
                    <Link className='xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto' to='/' smooth={desktopMode}
                          spy activeClass='active'>See all cars</Link>
                    <SearchMobile/>

                </nav>
            </div>
        </header>
    );
}

export default Header;