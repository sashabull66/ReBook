import * as ReactDOM from "react-dom";
import App from "./components/App/App";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import {BookStoreServiceProvider} from "./components/BookStoreServiceCondext/BookStoreServiceCondext";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import BookStoreService from "./services/bookStoreService";
import {store} from "./store";

const bookStoreService = new BookStoreService()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ErrorBoundary>
                <BookStoreServiceProvider value={bookStoreService}>

                    <App/>

                </BookStoreServiceProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)
