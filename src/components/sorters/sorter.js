import { Button } from 'primereact/button';
import './sorter.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { productsSortedIncrease, productsSortedDecrease, productsSortedNone} from "../../actions/products";
import ProductsList from '../productsCategoryList/productsCategoryList';


const Sorter= () => {
    const clazz = {
        sort: 'pi pi-sort-alt sort',
        downSort: 'pi pi-sort-numeric-down sort',
        uppSort: 'pi pi-sort-numeric-up-alt sort'
    }

    const productsListSelector = createSelector(
        (state) => state.products.products,
        (products) => {
            return products;
        }
    )

    const productsList = useSelector(productsListSelector);
    const [classForSorting, setClassForSorting] = useState(clazz.sort)

    //     increase
    // decrease

    const dispatch = useDispatch();

    const changeSortButton = ()=> {
        switch (classForSorting) {
            case clazz.sort:
                setClassForSorting(clazz.downSort);
                dispatch(productsSortedIncrease());
                break;
            case clazz.downSort:
                setClassForSorting(clazz.uppSort);
                dispatch(productsSortedDecrease());
                break;
            case clazz.uppSort:
                setClassForSorting(clazz.sort);
                dispatch(productsSortedNone());
                break;
            default:
                setClassForSorting(clazz.sort);
                dispatch(productsSortedNone());
        }
    }
    return (
        <>
    <Button className={classForSorting} onClick={changeSortButton} style={{'fontSize': '1.5em','height': '50px', 'width': '120px'}} /> 

        </>
    


    )
    }

export default Sorter

