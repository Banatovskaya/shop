import { useState } from 'react';
import renderProducts from '../../servises/renderProducts';
import {useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import './productCategoryList.css';
import { Button } from 'primereact/button';

const ProductsList = () => {

    const [loadingCounter, setLoadingCounter] = useState(1);
    const productsListSelector = createSelector(
        (state) => state.products.sortedProducts,
        (sortedProducts) => {
            return sortedProducts;
        }
    )

    const productsList = useSelector(productsListSelector);
    const productsLoadingStatus = useSelector(state=>state.products.productsLoadingStatus)

    if (productsLoadingStatus === 'loading'){
        return <i className="pi pi-spin pi-spinner" style={{'fontSize': '5em', color:'#326fd1'}}></i>
    } else if (productsLoadingStatus === 'error'){
        return <h1 >Ошибка загрузки</h1>
    }
    const renderProductList = renderProducts() 
    const addItems=()=>{
        setLoadingCounter(loadingCounter + 1)
    }

    const elements = renderProductList(productsList, 6*loadingCounter, 0)

    return (
        <>
        <ul className="listItem_wrap">
            {elements}
        </ul>
        <div className='list_load_wrap'>
            <Button className='button_load' style={{'fontSize': '1.1em','height': '30px', 'width': '100px', 'display': 'block', 'paddingBottom':'30px'}} onClick={()=>{addItems()}}>load</Button>
        </div>
        </>
    )
}

export default ProductsList ;