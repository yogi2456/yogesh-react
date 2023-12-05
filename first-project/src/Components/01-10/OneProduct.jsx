// import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../helpers/Axios.Config';
import toast from 'react-hot-toast';
import { AuthContext } from '../Context/AuthContext';

const OneProduct = () => {
    const router = useNavigate();
    const [productData, setProductData] = useState({});
    //console.log(productData, "productdata")
    const { id } = useParams();

    const {state} = useContext(AuthContext);

    async function Cart(id) {
        if(state.user.id && id) {
           try {
            const response = await api.post("/user/add-cart", { userId: state.user.id, productId: id}, )
            if(response.data.success) {
                toast.success(response.data.message)
                router('/cart')
            }
           } catch (error) {
               console.log(error)
           }
        } else {
            toast.error("please login to add product to cart.")
        }
    }

    useEffect(() => {
        async function getSingleProductData() {
            try {
                const { data } = await api.get(`/product/get-single-product?id=${id}` )
                if (data.success) {
                    setProductData(data.product)
                }
            } catch (error) {
                console.log(error)
            }
        }
        if (id) {
            getSingleProductData();
        }
    }, [id])

    //console.log(productData, "productData")

    return (
        <div>
            {productData?._id ?
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: "40%", border: "5px solid black" }}>
                        <img alt='ubhn' style={{ width: "60%", height: "85%" }} src={productData.image} />
                    </div>
                    <div style={{ width: "40%", border: "5px solid black" }}>
                        <h1>{productData.name}</h1>
                        <h4>Category : {productData.category}</h4>
                        {/* <h4>Description : {productData.description}</h4> */}
                        <h4>Price : {productData.price}$</h4>
                        {/* <h4>Rating : {productData.rating.rate}</h4>
                        <h4>Number of ratings : {productData.rating.count}</h4> */}

                        <button onClick={ () => Cart(productData._id)}>Cart</button>
                    </div>
                </div>
                :
                <div>Loading..</div>
            }
        </div>
    )
}

export default OneProduct;