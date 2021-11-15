import {updateBookList} from "./bookList";
import {updateShoppingCart} from "./shopingCart";

export const reducer = (state, action) => {

    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }

}