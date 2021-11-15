import React, {Component} from 'react';
import BookListItem from "../BookListItem/BookListItem";
import {connect} from "react-redux";
import {WithBookStoreService} from "../HOC/WithBookStoreService";
import {bookAddedToCart, fetchBooks} from "../../actions";
import {compose} from "../../utils/compose";
import './BookList.css'
import Spinner from "../Spinner/Spinner";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import {bindActionCreators} from "redux";

class BookListContainer extends Component {
    componentDidMount() {
        const {fetchBooks} = this.props
        fetchBooks()
    }


    render() {
        const {books, loading, error, onAddToCart} = this.props
        if (error) return <ErrorComponent message={error}/>
        return loading && books.length === 0 ?
            <Spinner/>
            :
            <BookList books={books} onAddToCart={onAddToCart}/>
    }
}

const BookList = ({books, onAddToCart}) => <ul className='book-list'>{books.map(book => <li key={book.id}><BookListItem
    onAddToCart={onAddToCart} book={book}/></li>)}</ul>

const mapStateToProps = ({bookList: {books, loading, error}}) => ({
    books, loading, error
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(ownProps.BookStoreService),
        onAddToCart: bookAddedToCart
    }, dispatch)
}

export default compose(WithBookStoreService(), connect(mapStateToProps, mapDispatchToProps))(BookListContainer);
