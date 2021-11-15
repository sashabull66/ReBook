import React, {Component} from 'react';
import './ShopHeader.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class ShopHeader extends Component {
    render() {
        const {count, quantity} = this.props
        return (
            <header className='shop-header row'>
                <NavLink to='/' className='logo text-dark'>ReStore</NavLink>
                {
                    count > 0 &&
                    quantity > 0 &&
                    <NavLink to='/card-page/' className='shopping-cart text-dark'><i
                        className='cart-icon fa fa-shopping-cart'/>{quantity} items (${count})</NavLink>
                }
            </header>
        );
    }
}

const mapStateToProps = ({shoppingCart:{orderTotal, cartItemsTotal}}) => ({
    count: orderTotal,
    quantity: cartItemsTotal
})

export default connect(mapStateToProps)(ShopHeader);