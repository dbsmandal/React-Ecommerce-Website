import React, { useEffect } from 'react'
import PageNavigation from '../Component/PageNavigation';
import FormatPrice from '../Helpers/FormatPrice'
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProdutContext'
import ProductImage from './ProductImage';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import Star from './Star';
import AddToCart from './AddToCart';




const API = 'https://api.pujakaitem.com/api/products';


const SingleProduct = () => {
  const { getSingleProduct, singleProductData, } = useProductContext()

  //get id parmas for matching url
  const { id } = useParams();



  //destructuring data

  const { name, stars, stock, reviews, price, description, company, category, image } = singleProductData;
  // console.log("singleProduct page data", singleProductData)


  // console.log(singleProductData,"single Product page")

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, []);

  return (
    <>
      <PageNavigation title={name} />
     <div className='bg-white rounded-3xl  shadow-md overflow-hidden p-5'>
     <div className=' grid  sm: grid-flow-row grid-cols-2 gap-5'>
        <div className='bg-gray-50 rounded-3xl  shadow-md overflow-hidden p-5'>
          <ProductImage images={image} />
        </div>
        <div className=' grid grid-flow-row bg-gray-50 rounded-3xl  shadow-md overflow-hidden p-5'>
          <h1 className='text-3xl font-semibold capitalize'>{name}</h1>
          <Star stars={stars} reviews={reviews} />
          {/* <p>{stars} out of 5</p>
          <p>{reviews}  Customer Reviews</p> */}
          <p>MRP: <del><FormatPrice price={price + 250000} /></del></p>
          <p>Deal of the Day : < FormatPrice price={price} /></p>
          <p>{description}</p>

          <div className='grid grid-cols-4'>
            <div className=' '>
              <TbTruckDelivery className=" m-auto " />
              <p className="text-center">Free Delivery</p>
            </div>
            <div className=' '>
              <TbReplace className=" m-auto " />
              <p className="text-center">30 Days Replacement</p>
            </div>
            <div className=' '>
              <TbTruckDelivery className=" m-auto " />
              <p className="text-center">Free Delivery</p>
            </div>
            <div className=' '>
              <MdSecurity className=" m-auto " />
              <p className="text-center">2 Year Warranty</p>
            </div>
          </div>
          <div>
            <p>Available:
              <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
            </p>
            <p>
              Category : <span> {category} </span>
            </p>
            <p>
              Brand :<span> {company} </span>
            </p>
          </div>
          <hr />
          {
            stock >0 && <AddToCart singleProductData={singleProductData} />
          }
        </div>



      </div>
     </div>

      <br />
      <br />
      <br />
      <br />



    </>

  )
}

export default SingleProduct