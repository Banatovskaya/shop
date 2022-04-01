import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import './DataViewDemo.css';

const ProductPage = () => {

    const CurrentProductSelector = createSelector(
        (state) => state.products.idCurrentProduct,
        (state) => state.products.products,
        (idCurrentProduct, products1) => {
          return products1.filter(item => item.id === idCurrentProduct)
        }
    )

    const el = useSelector(CurrentProductSelector);
    const element = el[0];
    return (
            <div className="col-12 md:col-4 dataview-demo">
            <div className="product-grid-item card">
                <div className="product-grid-item-top">
                    <div>
                        <i className="pi pi-tag product-category-icon"></i>
                    </div>
                </div>
                <div className="product-grid-item-content">
                    <div className="product-name">{element.title}</div>
                    <img src={`../images/${element.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={element.title} />
                </div>    
                <div className="product-grid-item-bottom">
                    <span className="product-price">{element.price} грн</span>
                    <Button icon="pi pi-shopping-cart" label="Купить"></Button>
            
                </div>
                <div className="product-description">{element.characteristic[0].title}: {element.characteristic[0].value} {element.characteristic[0].postfix}</div>
                <div className="product-description">{element.characteristic[1].title}: {element.characteristic[1].value} {element.characteristic[1].postfix}</div>
                <div className="product-description">{element.characteristic[2].title}: {element.characteristic[2].value} {element.characteristic[2].postfix}</div>
                <div className="product-description" dangerouslySetInnerHTML={{__html: element.text}}></div>
                <div className="product-description">{element.characteristic[0].title}: {element.characteristic[0].value} {element.characteristic[0].postfix}</div>
                <div className="product-description">{element.characteristic[1].title}: {element.characteristic[1].value} {element.characteristic[1].postfix}</div>
                <div className="product-description">{element.characteristic[2].title}: {element.characteristic[2].value} {element.characteristic[2].postfix}</div>
                <div className="product-description">{element.characteristic[3].title}: {element.characteristic[3].value} {element.characteristic[3].postfix}</div>
            </div>
       </div>
 );
}
export default ProductPage