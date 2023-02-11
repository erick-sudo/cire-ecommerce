import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
//import { FaShopify } from "react-icons/fa"
import { MdShoppingBasket } from "react-icons/md"

function Product({product, container}) {

    const navigate = useNavigate();

    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch(product.image)
        .then(response => response.blob())
        .then(imageBlob => {
            const imageUrl = URL.createObjectURL(imageBlob)
            setImage(imageUrl)
        })
    }, [])

    return (
        <div className="product" key={product.id} onClick={() => {
            navigate(`/viewproduct/${product.id}`);
        }}>
            <div className="product-thumb">
                { image == null ?
                    <div className="placeholder-thumb">
                        <MdShoppingBasket />
                    </div> :
                    <img className="product-thumbnails" src={image} alt={product.title} />
                }
            </div>
            <div>
                { container ? null :
                    <div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">${product.price}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Product;
