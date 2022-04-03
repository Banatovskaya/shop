import HomePage from '../pages/homePage';
import ProductCategoryPage from '../pages/productCategoryPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import ProductPage from '../pages/productPage'; 
import { useEffect } from "react";
import { useDispatch} from 'react-redux';
import { useHttp } from "../../hooks/http_hook";
import { fetchProducts} from "../../actions/products";

const App = () => {
	const request = useHttp();
	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(fetchProducts(request));
    }, []);

  return (
	<>
	    <Router>	
			<Routes>
				<Route path="/" element={<HomePage/>}/>			
				<Route path="/category" element={<ProductCategoryPage/>}/>
				<Route path="/category/:id" element={<ProductPage/>}/>
			</Routes>
		</Router>
	  </>
  );
}

export default App;
