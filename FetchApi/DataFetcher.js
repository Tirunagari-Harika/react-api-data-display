import React, { Component, Fragment } from "react";
import AuthorDetails from "./AuthorDetails";
import TitleDetails from "./TitleDetails";

const API = "https://hn.algolia.com/api/v1/search1?query=";
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
        res.hits.map((hit) => {
            authors.push(hit.author);
            titles.push(hit.title)
        })

        this.setState({authors:authors,titles:titles});
    }

    componentDidMount(){
        this.setState({isLoading:true});
        fetch(API + DEFAULT_QUERY)
        .then(res => {
            if(res.ok)
                return res.json();
            return new Error("Something went wrong !!!");
        })
        .then(res => {        
            this.updatePosts(res);
            this.setState({isLoading:false})
        })
        .catch(error => this.setState({
            error,
            isError:true,
            isLoading:false
        }))
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
