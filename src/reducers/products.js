const initialState = {
    products: [],
    productsLoadingStatus: 'adle',
    sortedProducts: [],
    idCurrentProduct: []
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
        case 'PRODUCTS_SORTED_INCREASE':
            return {
                ...state,
                sortedProducts: (JSON.parse(JSON.stringify(state.products))).sort((a,b)=>{return a.price-b.price})
            }   
            
        case 'PRODUCTS_SORTED_DECREASE':
            return {
                ...state,
                sortedProducts: (JSON.parse(JSON.stringify(state.products))).sort((a,b)=>{return b.price-a.price})
            }  
        
        case 'PRODUCTS_SORTED_NONE':
            return {
                ...state,
                sortedProducts: state.products
            }    
    
        case 'REGISTERED_ID_CURRENT_PRODUCT':
            return{
                ...state,
                idCurrentProduct: action.payload
            }

        default: return state
    }
}

export default products;