import { FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from "../../actions/books/actionTypes";

const bookListReducer = (state = [], action) =>{
    switch(action.type){
        case FETCH_BOOK_REQUEST:
            return{
                loading : true,
            }
        case FETCH_BOOK_SUCCESS:
            return{
                books : action.payload
            }
        case FETCH_BOOK_FAIL:
            return{
                loading : false,
                error : action.payload
            }
        default:
             return state;
    }
}

export {bookListReducer}