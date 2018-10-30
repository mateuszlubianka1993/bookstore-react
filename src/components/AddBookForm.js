import React from 'react';
import {firebaseApp} from '../fbase';
import {connect} from "react-redux"; 

class AddBook extends React.Component {

    constructor() {
        super();
        this.state = {
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
                genre: ""
            }
        }
    }

    

    handleChange = (event) => {
        let newBook;

        if (event.target.name === "onStock") {
            newBook = {
                ...this.props.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.props.book,
                [event.target.name]: event.target.value
            };
        }

        this.props.updateBook(newBook);
    }

    addNewBook = (event) => {
        event.preventDefault();

        let newBook = { ...this.props.book };

        this.props.addNewBook(newBook);

        this.props.updateBook({
            
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
                genre: "",
                price: ""
            
        });
    }

    logOut =  (event) => {
        event.preventDefault();
        firebaseApp.auth().signOut()
        .then( () => {
            this.props.changeLoggedIn(false);
        })
        .catch( () => {
            console.log('lalala');
        })   
    }

    render() {
        return (
            <div className="adminPanel col-md-4">
                        <form onSubmit={this.addNewBook}>
                            <div className="form-group">
                                <input type="text" placeholder="Book name" id="name" name="name" className="form-control" onChange={this.handleChange} value={this.props.book.name} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book author" id="author" name="author" onChange={this.handleChange} value={this.props.book.author} className="form-control" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Book description" id="description" name="description" onChange={this.handleChange} value={this.props.book.description} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book genre" id="genre" name="genre" onChange={this.handleChange} value={this.props.book.genre} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="number" placeholder="Book price" id="price" name="price" onChange={this.handleChange} value={this.props.book.price} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="onStock" name="onStock" onChange={this.handleChange} value={this.props.book.onStock} className="form-check-input" />
                                <label htmlFor="onStock" className="form-check-label">On stock</label>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book image" id="image" name="image" onChange={this.handleChange} value={this.props.book.image} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                            
                        </form>
                        <button type="button" className="btn btn-danger" onClick={this.logOut}>Logout</button>
                    </div>
        )
    }
}

const mapDispatchToProps = diapatch => {
    return {
        updateBook : book => diapatch({ type: 'UPDATE_BOOK', payload: book})
    }
}

const mapStateToProps = state => {
    return {
        book : state.book
    }
}

const AddBookForm = connect(mapStateToProps, mapDispatchToProps)(AddBook)

export default AddBookForm;