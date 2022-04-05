import React from 'react';
import { createSelector } from 'reselect';
import {useSelector } from 'react-redux';
import renderProducts from '../../servises/renderProducts';
import './advertisingList.css';

const AdvertisingList = () => {
    
    const productsListSelector = createSelector(
        (state) => state.products.products,
        (products) => {
            return products;
        }
    )

    const productsList = useSelector(productsListSelector);
    const productsLoadingStatus = useSelector(state=>state.products.productsLoadingStatus)

    if (productsLoadingStatus === 'loading'){
        return <i className="pi pi-spin pi-spinner" style={{'fontSize': '5em', color:'#326fd1'}}></i>
    } else if (productsLoadingStatus === 'error'){
        return <h1 >Ошибка загрузки</h1>
    }
    const renderProductList =  renderProducts() 
    const elements = renderProductList(productsList, productsList.length, productsList.length-4)

    return (
        
        <div className="advertising_wrap">
            {elements}
        </div>
       
    )

}

export default AdvertisingList;