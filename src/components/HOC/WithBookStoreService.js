import React from "react";
import {BookStoreServiceConsumer} from "../BookStoreServiceCondext/BookStoreServiceCondext";

export const WithBookStoreService = () => (WrappedComponent) => {
    return (props) => (
        <BookStoreServiceConsumer>
            {(context) => <WrappedComponent {...props} BookStoreService={context}/>}
        </BookStoreServiceConsumer>
    )
}