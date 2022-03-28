const initialState = {
    products: [],
    productsLoadingStatus: 'adle',
    sortedProducts: [],
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_FETCHING':
            return {
                ...state,
                productsLoadingStatus: 'loading'
            }
        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                products: action.payload,
                sortedProducts: action.payload,
                productsLoadingStatus: 'idle'
            }
        case 'PRODUCTS_FETCHING_ERROR':
            return {
                ...state,
                productsLoadingStatus: 'error'
            }
        case 'PRODUCTS_SORTED':
            return {
                ...state,
                sortedProducts: action.payload
            }    

        default: return state
    }
}

export default products;