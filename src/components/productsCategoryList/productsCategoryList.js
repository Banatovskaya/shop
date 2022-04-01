import { useHttp } from "../../hooks/http_hook";
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useEffect } from "react";
import { fetchProducts} from "../../actions/products";
import ProductsCategoryListItem from "../productsCategoryListItem/productsCategoryListItem";
import './productCategoryList.css';


const ProductsList = () => {

    const productsListSelector = createSelector(
        (state) => state.products.sortedProducts,
        (sortedProducts) => {
         console.log('create selector')  
            return sortedProducts;
        }
    )


    const request = useHttp();
    const dispatch = useDispatch();
    const productsList = useSelector(productsListSelector);
    const productsLoadingStatus = useSelector(state=>state.products.productsLoadingStatus)


    useEffect(() => {
        dispatch(fetchProducts(request))
      
    }, []);
    
    if (productsLoadingStatus === 'loading'){
        return <i className="pi pi-spin pi-spinner" style={{'fontSize': '5em', color:'#326fd1'}}></i>
    } else if (productsLoadingStatus === 'error'){
        return <h1 >Ошибка загрузки</h1>
    }
   

    const renderProductList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Товаров нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return (
                        <ProductsCategoryListItem key={id} {...props} id={id} />
                    )
           
        })
    }

    const elements = renderProductList(productsList)

    return (
        <ul className="listItem_wrap">
           
            {elements}
        </ul>
    )

}

export default ProductsList ;