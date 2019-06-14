import React, { Component } from "react";
import axios from "axios";

import { DataLoadingContext, AuthContext, TitleContext } from "./Contexts";
import AuthorDetails from "./AuthorDetails";
import TitleDetails from "./TitleDetails";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class DataFetcher extends Component{
   state = { loading: {
                isLoading:false,
                isError:false,
                error:null
            },
            authors:[],
            titles:[]} 

    updatePosts = (res) => {
        let authors = [];
        let titles = [];
        res.hits.map((hit) => {
            authors.push(hit.author);
            titles.push(hit.title)
        })

        this.setState({authors:authors,titles:titles});
    }

    componentDidMount(){
        this.setState({loading:{isLoading:true}});
        try{
            setTimeout(async () => {
                const result = await axios.get(API + DEFAULT_QUERY);
                this.updatePosts(result.data);
                this.setState({loading:{isLoading:false}});
            },19000);
        }
        catch(error){
            console.log("Err ", error);
            this.setState({ loading:{error,isError:true, isLoading:false} })
        }        
    }

    render(){        
        return (<DataLoadingContext.Provider value={this.state.loading}>
            <AuthContext.Provider value={this.state.authors}>
                <AuthorDetails />
            </AuthContext.Provider>
            <TitleContext.Provider value={this.state.titles}>
                <TitleDetails />
            </TitleContext.Provider>
        </DataLoadingContext.Provider>)
    }
    
}

export default DataFetcher;
