import axios from '../config/axios';
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,

    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL,

    PRODUCT_STORE_REQUEST,
    PRODUCT_STORE_SUCCESS,
    PRODUCT_STORE_FAIL,

    PRODUCT_CATEGORY_REQUEST,
    PRODUCT_CATEGORY_SUCCESS,
    PRODUCT_CATEGORY_FAIL,

    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAIL,

    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,

    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAIL,

    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS,
    CATEGORY_UPDATE_FAIL,

    PRODUCT_FILTER_REQUEST,
    PRODUCT_FILTER_SUCCESS,
    PRODUCT_FILTER_FAIL
 } from '../constants/productConstants'



 export const listProducts = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get(`/api/products${keyword}`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}





export const listStoreProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_STORE_REQUEST })

        const { data } = await axios.get('/api/products/store')

        dispatch({
            type: PRODUCT_STORE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_STORE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listCategoryProducts = (keyword ='') => async (dispatch,getState) => {
    try {
        dispatch({ type: PRODUCT_CATEGORY_REQUEST })

        const {
            userLogin:{userInfo},
        } = getState()

        // const config = {
        //     headers:{
        //         'Content-type':'application/json',
        //         "Authorization": `Bearer ${userInfo.token}`
        //     }
        // }

        const { data } = await axios.get(
            `/api/products/category${keyword}`,
            // 
            )


        dispatch({
            type: PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_CATEGORY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}





 export const listTopProducts = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_TOP_REQUEST })

        const { data } = await axios.get(`/api/products/top/`)

        dispatch({
            type: PRODUCT_TOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_TOP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




 export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




 
export const createProductReview = (id, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/products/${id}/reviews/`,
            review,
            config,
        )
        dispatch({
            type: PRODUCT_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: PRODUCT_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}




export const deleteProduct = (id) => async (dispatch,getState) =>{
    try{
        dispatch({
            type:PRODUCT_DELETE_REQUEST
        })

        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(
            `/api/products/delete/${id}/`,
            config
            )

        dispatch({
            type:PRODUCT_DELETE_SUCCESS,
        })


   
    }catch(error){
        dispatch({
            type:PRODUCT_DELETE_FAIL,
            payload:error.response && error.response.data.message
            ? error.responsedata.message
            :error.message,
        })
    }
}




export const createProduct = () => async (dispatch,getState) =>{
    try{
        dispatch({
            type:PRODUCT_CREATE_REQUEST
        })

        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            `/api/products/create/`,
            {},
            config
            )

        dispatch({
            type:PRODUCT_CREATE_SUCCESS,
            payload:data,
        })


   
    }catch(error){
        dispatch({
            type:PRODUCT_CREATE_FAIL,
            payload:error.response && error.response.data.message
            ? error.responsedata.message
            :error.message,
        })
    }
}



export const updateProduct = (product) => async (dispatch,getState) =>{
    try{
        dispatch({
            type:PRODUCT_UPDATE_REQUEST
        })

        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `/api/products/update/${product._id}/`,
            product,
            config
            )

        dispatch({
            type:PRODUCT_UPDATE_SUCCESS,
            payload:data,
        })

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })


   
    }catch(error){
        dispatch({
            type:PRODUCT_UPDATE_FAIL,
            payload:error.response && error.response.data.message
            ? error.responsedata.message
            :error.message,
        })
    }
}

export const listcategoryDetails = (id) => async (dispatch,getState) => {
    try {
        dispatch({ type: CATEGORY_DETAILS_REQUEST })


        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                "Authorization": `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.get(
            `/api/products/category/${id}/`,
            config
            )

        dispatch({
            type: CATEGORY_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const createCategory = () => async (dispatch,getState) =>{
    try{
        dispatch({
            type:CATEGORY_CREATE_REQUEST
        })

        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            `/api/products/category/create/`,
            {},
            config
            )

        dispatch({
            type:CATEGORY_CREATE_SUCCESS,
            payload:data,
        })


   
    }catch(error){
        dispatch({
            type:CATEGORY_CREATE_FAIL,
            payload:error.response && error.response.data.message
            ? error.responsedata.message
            :error.message,
        })
    }
}



export const deleteCategory = (id) => async (dispatch,getState) =>{
    try{
        dispatch({
            type:CATEGORY_DELETE_REQUEST
        })

        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(
            `/api/products/category/delete/${id}/`,
            config
            )

        dispatch({
            type:CATEGORY_DELETE_SUCCESS,
        })


   
    }catch(error){
        dispatch({
            type:CATEGORY_DELETE_FAIL,
            payload:error.response && error.response.data.message
            ? error.responsedata.message
            :error.message,
        })
    }
}

export const updateCategory = (category) => async (dispatch,getState) =>{
    try{
        dispatch({
            type:CATEGORY_UPDATE_REQUEST
        })

        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type':'application/json',
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `/api/products/category/update/${category.id}/`,
            category,
            config
            )

        dispatch({
            type:CATEGORY_UPDATE_SUCCESS,
            payload:data,
        })

        dispatch({
            type:CATEGORY_DETAILS_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:CATEGORY_UPDATE_FAIL,
            payload:error.response && error.response.data.message
            ? error.responsedata.message
            :error.message,
        })
    }
}


export const filterProducts = (selectedCategory = '') => async (dispatch,getState) =>{
    try{
        dispatch({
            type:PRODUCT_FILTER_REQUEST
        })

        const {
            userLogin:{userInfo},
        } = getState()

      

        const {data} = await axios.get(
            `/api/products/filter/?category=${selectedCategory}`,
            )

        dispatch({
            type:PRODUCT_FILTER_SUCCESS,
            payload:data,
        })

    }catch(error){
        dispatch({
            type:PRODUCT_FILTER_FAIL,
            payload:error.response && error.response.data.message
            ? error.responsedata.message
            :error.message,
        })
    }
}