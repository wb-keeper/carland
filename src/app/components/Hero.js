'use client'
import React, {useContext} from 'react';
import Search from "@/app/components/Search";
import {SearchContext} from "@/app/context/search";

function Hero(props) {
    const {searchActive} = useContext(SearchContext)
    return (
        <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
            {
                searchActive ? (<div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
                    <Search />
                </div>) : (<div className="-mt-12 w-full max-w-[1300px] mx-auto"><Search /></div>)
            }
            <Search /></section>
    );
}

export default Hero;