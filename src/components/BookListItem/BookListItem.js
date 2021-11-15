import React, {Component} from 'react';
import './BookListItem.css'

class BookListItem extends Component {
    render() {
        const {book:{name, author, price, coverImage, id}, onAddToCart} = this.props
        return (
            <div className='book-list-item'>
                <div className='book-cover'>
                    <img src={coverImage} alt={name}/>
                </div>
                <div className="book-detalis">
                    <span className='book-title'>{name}</span>
                    <div className='book-author'>{author}</div>
                    <div className='book-price'>{price}$</div>
                    <button className='btn btn-info add-to-cart' onClick={_=>onAddToCart(id)}>Add to card</button>
                </div>
            </div>
        );
    }
}

export default BookListItem;