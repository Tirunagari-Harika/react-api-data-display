import React, { Component } from "react";
import axios from "axios";
import PostContext from "./Context";
import AuthorDetails from "./AuthorDetails";
import TitleDetails from "./TitleDetails";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class DataFetcher extends Component{
    state = {
        isLoading:false,
        isError:false,
        error:null,
        authors:[],
        titles:[]
    }

    updatePosts = (res) => {
        let authors = [];
        let titles = [];
        res.map((a) => {
            authors.push(a.author);
            titles.push(a.title);
        });

        this.setState({authors:authors,titles:titles});

    }

     componentDidMount(){
        this.setState({isLoading:true});
        try{
            setTimeout(async () => {
                const result = await axios.get(API + DEFAULT_QUERY);
                this.updatePosts(result.data.hits);
                this.setState({isLoading:false});
            }, 9000);
           
            
        }
        catch(error){
            console.log("ERR ",error);
            this.setState({error,isError:true,isLoading:false});
        }    

    }    

    render(){
        return (<PostContext.Provider value={this.state}>
            <AuthorDetails />
            <TitleDetails />
        </PostContext.Provider>)
    }

}

export default DataFetcher;
