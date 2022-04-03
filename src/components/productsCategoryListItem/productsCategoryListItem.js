import {Link} from 'react-router-dom';
import {idCurrentProduct} from "../../actions/products";
import {useDispatch} from 'react-redux';
import './productCategoryListItem.css'

const ProductsCategoryListItem = ({title, link,categoryLink, image, price, characteristic,discount, id, text}) => {

    const dispatch = useDispatch();
    
    
    const registrProductId = () => {
       dispatch(idCurrentProduct(id))
    }


   return (
     
         <Link to={`/category/${id}`}  onClick={()=>registrProductId(id)}>
 <div className="product_listItem_wrap">
            <div className="product_listItem_img">
               <img src={`../images/${image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={title} />
            </div>
            <div className="product_name" >
                <div >{title}</div>
            </div>
           
           <div className="product_price">
           <span >${price}</span>
           </div>
</div>
         </Link>
                
   );
}

export default ProductsCategoryListItem;


