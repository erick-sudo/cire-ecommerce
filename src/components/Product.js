import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
//import { FaShopify } from "react-icons/fa"
import { MdShoppingBasket } from "react-icons/md"

function Product({product, container}) {

    const navigate = useNavigate();

    const [image, setImage] = useState(product ? product.image : product)

    useEffect(() => {
        if(product) {
            if(product.image) {
                fetch(`http://localhost:8001/product_images${product.image}`)
                .then(response => response.blob())
                .then(imageBlob => {
                    const imageUrl = URL.createObjectURL(imageBlob)
                    setImage(imageUrl)
                })
            }
        }
    }, [product])

    const class_name = image ? `product` : `product placeholder-dark`

    return (
        <div className={class_name} onClick={() => {
            navigate(`/viewproduct/${product ? product.id : "3"}`);
        }}>
            <div className="product-thumb">
                { image == null ?
                    <div className="placeholder-thumb">
                        <MdShoppingBasket />
                    </div> :
                    <img className="product-thumbnails" src={image} alt={product.title ? product.title : " "} />
                }
            </div>
            <div>
                { container ? null :
                    <div>
                    <div className="product-title">{product ? product.title : " "}</div>
                    <div className="product-price">${product ? product.price : "0.00"}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Product;
