import React from 'react'
import { usePosts } from '../context/PostContext';

const SearchPosts = () => {
    const {searchQuery ,setSearchQuery } = usePosts();
    // const obj= useContext(PostContext)
    // console.log(obj)
   
    return (
        <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
        />
    );
}

export default SearchPosts
