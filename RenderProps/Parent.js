import React, { Fragment } from "react";
import TitleDetails from "./TitleDetails";
import AuthorDetails from "./AuthorDetails";
import DataFetcher from "./DataFetcher";

import LoadingHOC from "./LoadingHOC";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

const Parent = props => {
    return (<Fragment>
        <DataFetcher  url={API + DEFAULT_QUERY} 
             fillPosts={({...properties}) => {
                //console.log(1);
                //console.log(properties);
                let { isLoading, isError, error, authors, titles } = properties;
                let authoProps = { isLoading, isError, error, authors };
                let titleProps = { isLoading, isError, error, titles };
                return (<Fragment>
                    <AuthorDetails {...authoProps} />
                    <TitleDetails {...titleProps} />
                </Fragment>)
            }}
               />
    </Fragment>)
}

export default Parent;

{/* <DataFetcher url={API + DEFAULT_QUERY}
            fillPosts={({...properties}) => {
                //console.log(1);
                //console.log(properties);
                let { isLoading, isError, error, authors, titles } = properties;
                let authoProps = { isLoading, isError, error, authors };
                let titleProps = { isLoading, isError, error, titles };
                return (<Fragment>
                    <AuthorDetails {...authoProps} />
                    <TitleDetails {...titleProps} />
                </Fragment>)
            }}/> */}


        /*     fillPosts={({...properties}) => {
                const { authors, titles } = properties;
                return (<Fragment>
                    <AuthorDetails authors={authors}/>
                    <TitleDetails titles={titles}/>
                </Fragment>)
            }} */
