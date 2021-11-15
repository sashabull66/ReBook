import React, {Component} from 'react';
import './ShoppingCardTable.css'
import {connect} from "react-redux";
import {bookAddedToCart, bookDeletedFromCart, booksDeletedFromCart} from "../../actions";

class ShoppingCardTable extends Component {
    render() {
        const {items, total, onAdd, onGet, onDel} = this.props
        return (
            <div className='shopping-cart-table'>
                <h2>Your Order</h2>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, index) => <TableItem
                            key={index}
                            name={item.name}
                            count={item.count}
                            id={item.id}
                            add={onAdd}
                            idx={++index}
                            dell={onDel}
                            get={onGet}
                            total={item.total}
                        />
                    )}
                    </tbody>
                </table>
                <div className='total'>
                    Total: {total}$
                </div>
            </div>
        );
    }
}

const TableItem = ({id, idx, name, count, total, add, dell, get}) => <tr>
    <td>{idx}</td>
    <td>{name}</td>
    <td>{count}</td>
    <td>{total}$</td>
    <td>
        <button onClick={() => {
            dell(id)
        }} className='btn btn-outline-danger btn-sm float-right'><i className='fa fa-trash-o'/></button>
        <button onClick={() => {
            add(id)
        }} className='btn btn-outline-success btn-sm float-right'><i className='fa fa-plus-circle'/></button>
        <button onClick={() => {
            get(id)
        }} className='btn btn-outline-warning btn-sm float-right'><i className='fa fa-minus-circle'/></button>
    </td>
</tr>

const mapStateToProps = ({shoppingCart:{cartItems, orderTotal}}) => ({
    items: cartItems,
    total: orderTotal
})

const mapDispatchToProps = {
    onAdd: bookAddedToCart,
    onGet: bookDeletedFromCart,
    onDel: booksDeletedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable);
