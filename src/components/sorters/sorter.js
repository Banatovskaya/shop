import { Button } from 'primereact/button';
import './sorter.css';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { productsSortedIncrease, productsSortedDecrease, productsSortedNone, currentButtonSortClass} from "../../actions/products";

const Sorter= () => {
    const clazz = {
        sort: 'pi pi-sort-alt sort',
        downSort: 'pi pi-sort-numeric-down sort',
        uppSort: 'pi pi-sort-numeric-up-alt sort'
    }

    const classForSortingSelector = createSelector(
        (state) => state.products.currentButtonSortClass,
        (currentButtonSortClass) => {
            return currentButtonSortClass;
        }
    )

    const classForSorting = useSelector(classForSortingSelector);

    const dispatch = useDispatch();

    const changeSortButton = ()=> {
        switch (classForSorting) {
            case clazz.sort:
                dispatch(productsSortedIncrease());
                dispatch(currentButtonSortClass(clazz.downSort))
                break;
            case clazz.downSort:
                dispatch(productsSortedDecrease());
                dispatch(currentButtonSortClass(clazz.uppSort))
                break;
            case clazz.uppSort:
                dispatch(productsSortedNone());
                dispatch(currentButtonSortClass(clazz.sort))
                break;
            default:
                dispatch(productsSortedNone());
                dispatch(currentButtonSortClass(clazz.sort))
        }
    }

    return (
        <div className='sorter_wrap'>
            <div className="text_sorter">сортировать по цене</div>
            {/* <div> */}
                <Button className={`${classForSorting} button_sorter`} onClick={changeSortButton} style={{'fontSize': '1.2em', 'width': '100px', 'paddingLeft':'30px'}} /> 
            {/* </div> */}
           
        </div> 
    )
}

export default Sorter

