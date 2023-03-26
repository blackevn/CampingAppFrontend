
import * as api from "../api"
import { DELETE, FETCH_ALL, UPDATE, CREATE, FETCH_ERROR } from "../constants/actionTypes";

export const getPosts = () => async ( dispatch ) => {

    try {
      const response = await api.fetchPost().catch(error => {

        dispatch({ type: FETCH_ERROR, payload: error.message });

        throw error;

      });

      const { data } = response;

      dispatch({ type: FETCH_ALL, payload: data });

      return data;
      
    } catch (error) {
    
      console.log(error);
    }
  }
  

export const createPost = (post) => async ( dispatch ) => {

    try {
      const response = await api.createPost(post).catch(error => {

        dispatch({ type: FETCH_ERROR, payload: error.message });

        throw error;

      });

      const { data } = response;

      dispatch({ type: CREATE, payload: data });

      return data;
      
    } catch (error) {
     
      console.log(error);
              
    }
  }

    
  export const updatePost = (id, post) => async ( dispatch ) => {

      try {
        const response = await api.updatePost(id, post).catch(error => {

          dispatch({ type: FETCH_ERROR, payload: error.message });

          throw error;

        });

        const { data } = response;

        dispatch({ type: UPDATE, payload: data });

        return data;
        
      } catch (error) {
      
        console.log(error);
                
      }
    }
    

  export const deletePost = (id) => async ( dispatch ) => {

    try {

      await api.deletePost(id)

      dispatch({type: DELETE, payload: id})
      
    } catch (error) {

      console.log(error);
      
    }
    
  }

  export const likePost = (id) => async ( dispatch ) => {

    try {
      const response = await api.likePost(id).catch(error => {

        dispatch({ type: FETCH_ERROR, payload: error.message });

        throw error;

      });

      const { data } = response;

      dispatch({ type: UPDATE, payload: data });

      return data;
      
    } catch (error) {
    
      console.log(error);
              
    }
  }
  