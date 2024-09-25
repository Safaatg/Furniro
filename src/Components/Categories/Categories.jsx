import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import electronics from "../../../public/assets/11.jpg";
import jewelryImage from "../../../public/assets/22.jpg";
import mensClothingImage from "../../../public/assets/33.jpg";
import womensClothingImage from "../../../public/assets/44.jpg";
import "../Categories/Categories.css";

const Categories = () => {
    const apiCategories = "https://fakestoreapi.com/products/categories";
    const [categoriesProduct, setCategoriesProduct] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        fetch(apiCategories)
            .then((response) => response.json())
            .then((data) => setCategories(data));
    }

    const getProductInCategory = (catName) => {
        fetch(`https://fakestoreapi.com/products/category/${catName}`)
            .then(response => response.json())
            .then(data => setCategoriesProduct(data));
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='Categories'>
            <h2 className="text">Categories</h2>
            <div className="CategoriesProduct">
                {categories.map((category) => {
                    let imageSource = '';
                    if (category === 'electronics') {
                        imageSource = electronics;
                    } else if (category === 'jewelery') {
                        imageSource = jewelryImage;
                    } else if (category === "men's clothing") {
                        imageSource = mensClothingImage;
                    } else if (category === "women's clothing") {
                        imageSource = womensClothingImage;
                    }

                    return (
                        <div key={category} className="box">
                            <Link className='noUnderline' to={`/category/${category}`} onClick={() => getProductInCategory(category)}>
                                <img src={imageSource} alt={category} />
                                <h3>{category}</h3>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Categories;