import React from "react";
import Results from "./Results";
import SearchPosts from "./SearchPosts";


const Header = () => {
    return (
        <header>
            <h1>
                <span>⚛️</span>The Atomic Blog
            </h1>
            <div>
                <Results />
                <SearchPosts/>
                <button>Clear posts</button>
            </div>
        </header>
    );
}

export default Header;
