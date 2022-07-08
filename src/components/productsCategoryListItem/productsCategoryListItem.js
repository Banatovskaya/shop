import {Link} from 'react-router-dom';
import {idCurrentProduct} from "../../actions/products";
import {useDispatch} from 'react-redux';
import './productCategoryListItem.css'
import { Button } from 'primereact/button';

const ProductsCategoryListItem = ({title, image, price, id, discount}) => {

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

            {discount > 0 ? 
               <div>
                  <div className="product_price-through">
                     <span >{price} грн</span>
                  </div>
                  <div className="product_price-discount"> 
                     <span >{discount>0? price - (discount*price/100) : null} грн
                     </span>
                  </div>
               </div>
            :  <div className="product_price">
                     <span >{price} грн</span>
               </div>
            } 

            <div className="product_button">
               <Button icon="pi pi-shopping-cart" label="Купить"></Button>
            </div>
         </div>
      </Link>  
   );
}

export default ProductsCategoryListItem;


