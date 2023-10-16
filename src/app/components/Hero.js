import React, {useContext} from 'react';
import Search from "@/app/components/Search";
import {SearchContext} from "@/app/context/search";

function Hero(props) {
    const {searchActive} = useContext(SearchContext)
    return (
        <section>
            {
                searchActive ? (<div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
                    <Search />
                </div>) : (<div><Search /></div>)
            }
            <Search /></section>
    );
}

export default Hero;