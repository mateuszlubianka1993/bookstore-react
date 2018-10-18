import React from "react";
import AdminBookView from "./AdminBookView";

class AdminBookListing extends React.Component {

    // constructor() {
    //     super();
    //     this.setState = {
    //         books: []
    //     }

    // }

    render() {
        
        let list = <div>No books in state</div>;

        if(this.props.books) {
            list =  this.props.books.map((book) => <AdminBookView book={book} removeFromInventory={this.props.removeFromInventory} /> );
        } 

        return (
            <div>
                {list} 
            </div>
        )
    }
}

export default AdminBookListing;