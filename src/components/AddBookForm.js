import React from 'react';
import {firebaseApp} from '../fbase';

class AddBookForm extends React.Component {

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
                ...this.state.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };
        }

        this.setState({
            book: newBook,

        });
    }

    addNewBook = (event) => {
        event.preventDefault();

        let newBook = { ...this.state.book };

        this.props.addNewBook(newBook);

        this.setState({
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
                genre: ""
            }
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
                                <input type="text" placeholder="Book name" id="name" name="name" className="form-control" onChange={this.handleChange} value={this.state.book.name} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book author" id="author" name="author" onChange={this.handleChange} value={this.state.book.author} className="form-control" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Book description" id="description" name="description" onChange={this.handleChange} value={this.state.book.description} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book genre" id="genre" name="genre" onChange={this.handleChange} value={this.state.book.genre} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="onStock" name="onStock" onChange={this.handleChange} value={this.state.book.onStock} className="form-check-input" />
                                <label htmlFor="onStock" className="form-check-label">On stock</label>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book image" id="image" name="image" onChange={this.handleChange} value={this.state.book.image} className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                            
                        </form>
                        <button type="button" className="btn btn-danger" onClick={this.logOut}>Logout</button>
                    </div>
        )
    }
}

export default AddBookForm;