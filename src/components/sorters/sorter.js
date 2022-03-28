import { Button } from 'primereact/button';
import './sorter.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { productsSorted} from "../../actions/products";
import ProductsList from '../productsList/productsList';


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
                dispatch(productsSorted(productsList));
                break;
            case clazz.downSort:
                setClassForSorting(clazz.uppSort);
                dispatch(productsSorted(productsList));
                break;
            case clazz.uppSort:
                setClassForSorting(clazz.sort);
                dispatch(productsSorted(productsList));
                break;
            default:
                setClassForSorting(clazz.sort);
                dispatch(productsSorted(productsList));
        }
    }
    return (
        <>
    <Button className={classForSorting} onClick={changeSortButton} style={{'fontSize': '1.5em','height': '50px', 'width': '120px'}} /> 
    <ProductsList></ProductsList>
        </>
    


    )
    }

export default Sorter

