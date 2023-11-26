//import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import api from '../../helpers/Axios.Config'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

    const router = useNavigate();
    const {state} = useContext(AuthContext)
    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "" })

    // console.log(productData, "productData")

    const handleChange = (event) => {
        // console.log(event.target.value)
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (productData.name && productData.category && productData.price && productData.image && productData.price > 0) {
            try {
                const { data } = await api.post("/product/add-product", { name: productData.name, price: productData.price, image: productData.image, category: productData.category, id: state?.user?.id })
                //console.log(data, "response from post request")
                if(data.success) {
                    router('/your-products')
                    toast.success(data.message)
                    setProductData({ name: "", price: "", image: "", category: "" })
                }
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("All fields are mandtory and price must be greater than 0.")
        }

    }

    console.log(state, "state", state?.user, state?.name)

    useEffect(() => {
       if(state?.user && state?.user?.name === undefined) {
        alert(state?.user?.name)
        //router('/login')
        toast.error("please login to access this page")
       }
    }, [state])

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Porduct Name</label><br />
                <input type='text' name="name" onChange={handleChange} value={productData.name} /><br />
                <label>Porduct Category</label><br />
                <input type='text' name="category" onChange={handleChange} value={productData.category} /><br />
                <label>Porduct Price</label><br />
                <input type='number' name='price' onChange={handleChange} value={productData.price} /><br />
                <label>Porduct Image</label><br />
                <input type='url' name='image' onChange={handleChange} value={productData.image} /><br />
                <input type='submit' />
            </form>
        </div >
    )
}

export default AddProduct;