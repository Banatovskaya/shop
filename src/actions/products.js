export const fetchProducts = (request) => (dispatch) => {
    dispatch(productsFetching());
    request("http://localhost:3001/productList")
        .then(data => {dispatch(productsFetched(data))})
        .catch(() => dispatch(productsFetchingError()))
}
export const productsFetching = () => {
    return {
        type: 'PRODUCTS_FETCHING'
    }
}

export const productsFetched = (products) => {
    return {
        type: 'PRODUCTS_FETCHED',
        payload: products
    }
}

export const productsFetchingError = () => {
    return {
        type: 'PRODUCTS_FETCHING_ERROR'
    }
}

export const productsSortedIncrease = () => {
    return {
        type: 'PRODUCTS_SORTED_INCREASE',
    }
}

export const productsSortedDecrease = () => {
    return {
        type: 'PRODUCTS_SORTED_DECREASE',
    }
}

export const productsSortedNone = () => {
    return {
        type: 'PRODUCTS_SORTED_NONE',
    }
}

export const idCurrentProduct = (id) => {
    return {
        type: 'ID_CURRENT_PRODUCT',
        payload: id
    }
}

export const currentButtonSortClass = (buttonSortClass) => {
    return {
        type: 'CURRENT_BUTTON_SORT_CLASS',
        payload: buttonSortClass
    }
}
