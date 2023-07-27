import React  from "react";

import { usePosts } from "../context/PostContext";

const Results = () => {
    const {posts} = usePosts();
    // console.log(posts)
    return <p>🚀 {posts.length} atomic posts found</p>;
}

export default Results;