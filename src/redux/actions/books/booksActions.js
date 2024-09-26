import axios from 'axios';
import { CREATE_BOOK_REQUEST } from './actionTypes';


const createBookAction = bookData =>{
    return async(dispatch) =>{

        dispatch({
            type : CREATE_BOOK_REQUEST
        })

        const config = {
            'Content-Type' : 'application/json'
        }

        const res = await axios.post('/api/books')


    }

    console.log(axios.isCancel('something'));

}