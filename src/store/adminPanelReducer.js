
const initialState = {
    book : {
        name : "",
        author : "",
        description: "",
        onStock: true,
        image: "",
        genre: "",
        price: ""

    }
}

const adminPanelReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_BOOK': 
            const book = action.payload;
            return {...state, book};
        default:
            console.log("Unknow action " + action.type);
            return state;
    }
}

export default adminPanelReducer;