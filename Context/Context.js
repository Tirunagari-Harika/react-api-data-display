import React from "react";

const PostContext = React.createContext({
    isLoading:false,
    isError:false,
    error:null,
    authors:[],
    titles:[]
})


export default PostContext;
