import ProductsCategoryListItem from "../components/productsCategoryListItem/productsCategoryListItem";

const renderProducts = () => {
    const renderProductList = (arr, itemDefaultnumber, firstItem) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Товаров нет</h5>
        }
        let newArr=[];
        for (let i=firstItem; i < itemDefaultnumber && i<arr.length; i++) {
            const {id, ...props} = arr[i];
             newArr.push(<ProductsCategoryListItem key={id} {...props} id={id} />)
        }
        return newArr
    }
    return renderProductList
}

export default renderProducts