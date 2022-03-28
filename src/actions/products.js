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

export const productsSorted = (arr) => {
    
    // a.sort((a,b)=>{return a.price-b.price})
    // const a = (JSON.parse(JSON.stringify(arr))).sort((a,b)=>{return a.price-b.price})
    

    // console.log(a)
    return {
        type: 'PRODUCTS_SORTED',
        payload: (JSON.parse(JSON.stringify(arr))).sort((a,b)=>{return a.price-b.price})
    }
}

// GET /:entity[?param1=...&param2=...] — списочный get

// Простой случай: в случае успеха сервер возвращает 200 OK 
// с массивом объектов в формате JSON в теле ответа (т.е. ответ начинается с [ и заканчивается ]).