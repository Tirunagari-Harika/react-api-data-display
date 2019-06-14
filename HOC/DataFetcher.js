import React, { Fragment } from "react";
import FetcherHOC from "./FetcherHOC";
import AuthorDetails from "./AuthorDetails";
import TitleDetails from "./TitleDetails";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

const DataFetcher = props => {
    let authors = [];
    let titles = [];
    const { isLoading, isError, error } = props;
    let properties = { isLoading, isError, error };
    let authoProps = {...properties,authors:authors};
    let titleProps = {...properties,titles:titles};

    const updatePosts = () => {        
        props.data.hits.map((hit) => {
            authors.push(hit.author);
            titles.push(hit.title);
        });  
        authoProps.authors = authors;
        titleProps.titles = titles;
    }

    if(props.data){
        updatePosts();       
    }

    return (<Fragment>
        <AuthorDetails {...authoProps} />
        <TitleDetails {...titleProps} />
    </Fragment>)    

}

export default FetcherHOC(DataFetcher, API + DEFAULT_QUERY);
