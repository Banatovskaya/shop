
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
    // const renderProductList = (arr, itemDefaultnumber, firstItem) => {
    //     if (arr.length === 0) {
    //         return <h5 className="text-center mt-5">Товаров нет</h5>
    //     }

    //     // return arr.map(({id, ...props}) => {
    //     //     return (
    //     //                 <ProductsCategoryListItem key={id} {...props} id={id} />
    //     //             )
    //     // })
      
    //     let newArr=[];
    //     for (let i=firstItem; (i < (itemDefaultnumber * (loadingCounter+1))&&(i<arr.length)); i++) {
    //         const {id, ...props} = arr[i];
    //          newArr.push(<ProductsCategoryListItem key={id} {...props} id={id} />)
    //     }
    //     return newArr
    // }

    const addItems=()=>{
        setLoadingCounter(loadingCounter+1)
    }

    const elements = renderProductList(productsList, 6*loadingCounter, 0)

    return (
        <>
        <ul className="listItem_wrap">
            {elements}
        </ul>
        <div className='list_load_wrap'>
            <Button className='button_load' style={{'fontSize': '1.5em','height': '50px', 'width': '120px', 'display': 'block'}} onClick={()=>{addItems()}}>load</Button>
        </div>
        
        </>
        
    )

}

export default ProductsList ;