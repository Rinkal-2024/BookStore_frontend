import axios from 'axios';
import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from './actionTypes';


const createBookAction = bookData =>{
    return async(dispatch) =>{
        try{
            dispatch({
                type : CREATE_BOOK_REQUEST
            })
    
            const config = {
                'Content-Type' : 'application/json'
            }
    
            const {data} = await axios.post('/api/books' , bookData , config)

            dispatch({
                type : CREATE_BOOK_SUCCESS ,
                payload : data
            })
        }
        catch(error){
            console.log(error);
            dispatch({
                type : CREATE_BOOK_FAIL,
                payload : error
            })
        }

    }
}

//fetch all books action 

const fetchBooksAction = () =>{
    return async (dispatch) =>{
        try{
            dispatch({
                type : FETCH_BOOK_REQUEST
            })

            const config = {
                headers :{
                    'Content-Type': 'application/json'
                }
            }

            // make http to call backend

            const {data} = await axios.get('/api/books' , config)
            dispatch({
                type: FETCH_BOOK_SUCCESS,
                payload : data
            })
        }catch(error){
            dispatch({
                type : FETCH_BOOK_FAIL,
                payload :error.response && error.response.data.message
            })        
        }
    }
}

export {createBookAction}