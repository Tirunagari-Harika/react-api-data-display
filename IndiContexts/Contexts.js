import React from "react";

const DataLoadingContext = React.createContext({
    isLoading:false,
    isError:false,
    error:null
});

const AuthContext = React.createContext({
    authors:[]
});

const TitleContext = React.createContext({
    titles:[]
});

const DataLoadingProvider = DataLoadingContext.Provider;
const DataLoadingConsumer = DataLoadingContext.Consumer;

const AuthProvider = AuthContext.Provider;
const AuthConsumer = AuthContext.Consumer;

const TitleProvider = TitleContext.Provider;
const TitleConsumer = TitleContext.Consumer;


export { DataLoadingContext, DataLoadingProvider, DataLoadingConsumer,
        AuthContext, AuthProvider, AuthConsumer,
        TitleContext, TitleProvider, TitleConsumer  };
