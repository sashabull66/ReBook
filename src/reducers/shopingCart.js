const updateCartItems = (cartItems, item, index) => {
    if (index === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(++index)
    ]
}
const updateCartItem = (book, item = {}) => {
    const {id = book.id, name = book.name, count = 0, total = 0} = item
    return {
        id,
        name,
        count: count + 1,
        total: book.price + total,
    }
}
const updateOrderTotal = (cartItems) => {
    return cartItems.reduce((finish, element) => finish + element.total, 0)
}
const updateCartItemsCountTotal = (cartItems) => {
    return cartItems.reduce((finish, element) => finish + element.count, 0)
}


export const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
            cartItemsTotal: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART' :
            const {bookList: {books}, shoppingCart: {cartItems}} = state
            const ID = action.payload; // clicked id
            const currentBook = books.find(book => book.id === ID) // book from list
            const isBookInCartIndex = cartItems.findIndex(book => book.id === ID) // >0 || -1
            const bookInCart = cartItems[isBookInCartIndex] // index || undefined
            const data = updateCartItem(currentBook, bookInCart)
            const newList = updateCartItems(cartItems, data, isBookInCartIndex)
            return {
                cartItems: newList,
                orderTotal: updateOrderTotal(newList),
                cartItemsTotal: updateCartItemsCountTotal(newList)
            }

        case 'BOOKS_DELETED_FROM_CART' :
            const booksID = action.payload; // clicked id
            const newCartList = state.shoppingCart.cartItems.filter(({id}) => id !== booksID);
            return {
                cartItems: newCartList,
                orderTotal: updateOrderTotal(newCartList),
                cartItemsTotal: updateCartItemsCountTotal(newCartList)
            }

        case 'BOOK_DELETED_FROM_CART' :
            const bookID = action.payload; // clicked id
            let newCarts = [...state.shoppingCart.cartItems]
            const deletedBooksGroup = newCarts.find(({id}) => id === bookID)
            const getCount = deletedBooksGroup.count - 1;
            let getTotal;
            if (getCount === 0) {
                newCarts = newCarts.filter(({id}) => id !== bookID)
            } else {
                getTotal = deletedBooksGroup.total / deletedBooksGroup.count
                deletedBooksGroup.count = getCount
                deletedBooksGroup.total -= getTotal
            }
            return {
                cartItems: newCarts,
                orderTotal: updateOrderTotal(newCarts),
                cartItemsTotal: updateCartItemsCountTotal(newCarts)
            }

        default :
            return state.shoppingCart
    }
}