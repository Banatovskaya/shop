import ProductsCategoryListItem from "../components/productsCategoryListItem/productsCategoryListItem";

const renderProducts = () => {
    const renderProductList = (arr, itemDefaultnumber, firstItem) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Товаров нет</h5>
        }

        // return arr.map(({id, ...props}) => {
        //     return (
        //                 <ProductsCategoryListItem key={id} {...props} id={id} />
        //             )
        // })
      
        let newArr=[];
        for (let i=firstItem; i < itemDefaultnumber && i<arr.length; i++) {
            console.log(i)
            const {id, ...props} = arr[i];
             newArr.push(<ProductsCategoryListItem key={id} {...props} id={id} />)
        }
        return newArr
    }
    return renderProductList
}

export default renderProducts