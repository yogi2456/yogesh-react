import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'
import api from '../helpers/Axios.Config';

const UpdateProduct = () => {

  const router = useNavigate();
  const [productData, setProductData] = useState({});
  console.log(productData, "productData")

  const { id } = useParams();

  async function getProductData() {
      try {
        const response = await api.get(`/product/get-single-product?id=${id}`)
        if(response.data.success) {
          setProductData(response.data.product)
        }
      } catch (error) {
        console.log(error)
      }
  }

  function handleChange(event){
    setProductData({...productData, [event.target.name]: event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault();
    try {
      const response = await api.post('/product/update-product', { productData })
      if(response.data.success) {
        toast.success(response.data.message)
        router('/your-products')
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    if(id) {
      getProductData()
    }
  }, [id])
  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label> <br/>
        <input type='text' value={productData.name} onChange={handleChange} name='name' /> <br/>
        <label>Price</label> <br/>
        <input type='number' value={productData.price} onChange={handleChange} name='price'/> <br/>
        <label>Image</label> <br/>
        <input type='url' value={productData.image} onChange={handleChange} name='image' /> <br/>
        <label>Category</label> <br/>
        <input type='text' value={productData.category} onChange={handleChange} name='category' /> <br/>
        <input type='submit' value='updates ?'/>
      </form>
    </div>
  )
}

export default UpdateProduct

