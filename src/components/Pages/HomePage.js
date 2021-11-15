import React, {Component} from 'react';
import BookList from "../BookList/BookList";
import ShoppingCardTable from "../ShoppingCardTable/ShoppingCardTable";

class HomePage extends Component {
    render() {

        return (
            <div className='Home'>
               <BookList/>
                <ShoppingCardTable/>
            </div>
        );
    }
}

export default HomePage;