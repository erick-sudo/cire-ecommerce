import { MdShoppingBasket } from "react-icons/md"
import React, {useState, useEffect} from "react";

function Thumb({title, url}) {

    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8001/product_images${url}`)
        .then(response => response.blob())
        .then(imageBlob => {
            const imageUrl = URL.createObjectURL(imageBlob)
            setImage(imageUrl)
        })
    }, [])

    return (
        <>
            { image == null ?
                <div className={image ? `placeholder-thumbnail` : `placeholder-thumbnail placeholder-dark`}>
                    <MdShoppingBasket />
                </div> :
                <img className="thumbs" src={image} alt={title ? title : "Alt"} />
            }
        </>
    )
}

export default Thumb;
