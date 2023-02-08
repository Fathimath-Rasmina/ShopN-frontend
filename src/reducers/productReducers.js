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
    PRODUCT_CREATE_RESET,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,

    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_CREATE_REVIEW_RESET,

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
    CATEGORY_CREATE_RESET,

    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,

    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAIL,

    CATEGORY_UPDATE_REQUEST,
    CATEGORY_UPDATE_SUCCESS,
    CATEGORY_UPDATE_FAIL,
    CATEGORY_UPDATE_RESET,

    PRODUCT_FILTER_REQUEST,
    PRODUCT_FILTER_SUCCESS,
    PRODUCT_FILTER_FAIL
 } from '../constants/productConstants'


 export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages
            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const productStoreReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_STORE_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_STORE_SUCCESS:
            return {
                loading: false,
                products: action.payload    
            }

        case PRODUCT_STORE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const productCategoryReducer = (state = { category: [] }, action) => {
    switch (action.type) {
        case PRODUCT_CATEGORY_REQUEST:
            return { loading: true, category: [] }

        case PRODUCT_CATEGORY_SUCCESS:
            return {
                loading: false,
                category: action.payload    
            }

        case PRODUCT_CATEGORY_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const categoryDetailsReducer = (state = {category:{}}, action) => {
    switch(action.type){
        case CATEGORY_DETAILS_REQUEST:
            return {loading:true, ...state}

        case CATEGORY_DETAILS_SUCCESS:
                return {loading:false, category:action.payload}
                
        case CATEGORY_DETAILS_FAIL:
                return {loading:false, error:action.payload} 

        default:
            return state
        }
}







export const productDetailsReducer = (state = {product:{reviews:[] }}, action) => {
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true, ...state}

        case PRODUCT_DETAILS_SUCCESS:
                return {loading:false, product:action.payload}
                
        case PRODUCT_DETAILS_FAIL:
                return {loading:false, error:action.payload} 

        default:
            return state
        }
}


export const productDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return {loading:true}

        case PRODUCT_DELETE_SUCCESS:
                return {loading:false, success:true }
                
        case PRODUCT_DELETE_FAIL:
                return {loading:false, error:action.payload} 

        default:
            return state
        }
}


export const productCreateReducer = (state = {}, action) => {
    switch(action.type){
        case PRODUCT_CREATE_REQUEST:
            return {loading:true}

        case PRODUCT_CREATE_SUCCESS:
                return {loading:false, success:true, product: action.payload }
                
        case PRODUCT_CREATE_FAIL:
                return {loading:false, error:action.payload} 

        case PRODUCT_CREATE_RESET:
            return {}

        default:
            return state
        }
}



export const productUpdateReducer = (state = {product:{}}, action) => {
    switch(action.type){
        case PRODUCT_UPDATE_REQUEST:
            return {loading:true}

        case PRODUCT_UPDATE_SUCCESS:
                return {loading:false, success:true, product: action.payload }
                
        case PRODUCT_UPDATE_FAIL:
                return {loading:false, error:action.payload} 

        case PRODUCT_UPDATE_RESET:
            return { product:{} }

        default:
            return state
        }
}


export const productReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REVIEW_REQUEST:
            return { loading: true }

        case PRODUCT_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }

        case PRODUCT_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        case PRODUCT_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}



export const productTopRatedReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_TOP_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_TOP_SUCCESS:
            return { loading: false, products: action.payload, }

        case PRODUCT_TOP_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const categoryCreateReducer = (state = {}, action) => {
    switch(action.type){
        case CATEGORY_CREATE_REQUEST:
            return {loading:true}

        case CATEGORY_CREATE_SUCCESS:
                return {loading:false, success:true, category: action.payload }
                
        case CATEGORY_CREATE_FAIL:
                return {loading:false, error:action.payload} 

        case CATEGORY_CREATE_RESET:
            return {}

        default:
            return state
        }
}

export const categoryDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case CATEGORY_DELETE_REQUEST:
            return {loading:true}

        case CATEGORY_DELETE_SUCCESS:
                return {loading:false, success:true }
                
        case CATEGORY_DELETE_FAIL:
                return {loading:false, error:action.payload} 

        default:
            return state
        }
}

export const categoryUpdateReducer = (state = {caetgory:{}}, action) => {
    switch(action.type){
        case CATEGORY_UPDATE_REQUEST:
            return {loading:true}

        case CATEGORY_UPDATE_SUCCESS:
                return {loading:false, success:true, category: action.payload }
                
        case CATEGORY_UPDATE_FAIL:
                return {loading:false, error:action.payload} 

        case CATEGORY_UPDATE_RESET:
            return { category:{} }

        default:
            return state
        }
}

export const filterProductReducer = (state = { products:[] }, action) => {
    switch(action.type){
        case PRODUCT_FILTER_REQUEST:
            return {loading:true}

        case PRODUCT_FILTER_SUCCESS:
                return {loading:false,
                         success:true,
                        //  ...state, 
                         products: action.payload }
                
        case PRODUCT_FILTER_FAIL:
                return {loading:false, error:action.payload} 

        default:
            return state
        }
}