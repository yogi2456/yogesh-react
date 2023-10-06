import { useState } from "react";

const AddProduct = () => {
    const [productData, setProductData] = useState({name: "", price: "", image: ""})

    const handleChange = (event) => {
        setProductData({...productData, [event.target.name]:[event.target.value]})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (productData.name && productData.price && productData.image && productData.price > 0) {

        } else {
            ("All fields are mandatory")
        }
    }
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label> <br />
                <input type="text" onChange={handleChange}/> <br />
                <label>Product Price</label> <br />
                <input  type="price" onChange={handleChange}/> <br />
                <label>Product Image</label> <br />
                <input type="url"  onChange={handleChange}/> <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddProduct;