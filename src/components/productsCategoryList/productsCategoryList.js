
import { useState } from 'react';
import {useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import ProductsCategoryListItem from "../productsCategoryListItem/productsCategoryListItem";
import './productCategoryList.css';
import { Button } from 'primereact/button';

const ProductsList = () => {
    const itemDefaultnumber = 6;

    const [loadingCounter, setLoadingCounter] = useState(0)
    console.log(loadingCounter)
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
   
    const renderProductList = (arr, itemDefaultnumber) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Товаров нет</h5>
        }

        // return arr.map(({id, ...props}) => {
        //     return (
        //                 <ProductsCategoryListItem key={id} {...props} id={id} />
        //             )
        // })
      
        let newArr=[];
        for (let i=0; (i < (itemDefaultnumber * (loadingCounter+1))&&(i<arr.length)); i++) {
            const {id, ...props} = arr[i];
             newArr.push(<ProductsCategoryListItem key={id} {...props} id={id} />)
        }
        return newArr
    }

    const addItems=()=>{
        setLoadingCounter(loadingCounter+1)
        console.log(loadingCounter)
        return (<h1>dd</h1>)
    }

    const elements = renderProductList(productsList, 6)

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