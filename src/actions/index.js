const booksLoaded = payload => ({type: 'FETCH_BOOKS_SUCCESS', payload});
const booksRequested = _ => ({type: 'FETCH_BOOKS_REQUEST'});
const booksError = payload => ({type: 'FETCH_BOOKS_FAILURE', payload});
export const bookAddedToCart = payload => ({type: 'BOOK_ADDED_TO_CART', payload})
export const booksDeletedFromCart = payload => ({type: 'BOOKS_DELETED_FROM_CART', payload})
export const bookDeletedFromCart = payload => ({type: 'BOOK_DELETED_FROM_CART', payload})
export const fetchBooksOLD = (BookStoreService, dispatch) => () => {
    dispatch(booksRequested()); // показать спиннер
    BookStoreService.getBooks().then(data => dispatch(booksLoaded(data))).catch(error => dispatch(booksError(error)))
}
export const fetchBooks = (BookStoreService) => _ => (dispatch) => {
    dispatch(booksRequested()); // показать спиннер
    BookStoreService.getBooks().then(data => dispatch(booksLoaded(data))).catch(error => dispatch(booksError(error)))
}

