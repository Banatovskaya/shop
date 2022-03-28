


const ProductsItem = ({title, Link,categoryLink, image, price, characteristic,discount, id, text}) => {

    return (
        <li>
           <i>название: {title}</i>
           <i> </i>
           <i>цена: {price}</i>
           {/* <i>{characteristic[0]} </i> */}
            </li>
    )

}

export default ProductsItem;

//title, Link,categoryLink, image, price, characteristic,discount, id, text

