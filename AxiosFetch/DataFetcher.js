import React, { Component, Fragment } from "react";
import axios from "axios";
import AuthorDetails from "./AuthorDetails";
import TitleDetails from "./TitleDetails";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class DataFetcher extends Component{
    state = {
        authors:[],
        titles:[],
        isLoading:false,
        isError:false,
        error:null
    }

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
        this.setState({isLoading:true});

        axios.get(API + DEFAULT_QUERY)
        .then(res => {
            console.log(res);            
            this.updatePosts(res.data);
            this.setState({isLoading:false})
        }).catch(error => {
            this.setState({error,isError:true,isLoading:false})
        })
    }

    render(){
        const {isLoading,isError,error,authors,titles} = this.state;
        return (<Fragment>
            <AuthorDetails 
                isLoading={isLoading}
                isError={isError}
                error={error}
                authors={authors}
                />
            <TitleDetails 
                isLoading={isLoading}
                isError={isError}
                error={error}
                titles={titles}
                />
        </Fragment>)
    }
}

export default DataFetcher;
