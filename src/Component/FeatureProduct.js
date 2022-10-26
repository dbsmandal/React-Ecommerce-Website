import { useProductContext } from "../Context/ProdutContext";
import Product from "../Product/Product";


const FeatureProduct = () => {
  const {isLoading , featureProducts} =useProductContext();
  console.log("fetureproductpage " , featureProducts)
console.log(featureProducts , "fetureSection");

if(isLoading) {
  return <div className='grid  p-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl'> .........Loading</div>

}
  return (
    <div className='grid  p-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl'>
      <div className ='text-sky-500 text-lg'>Check Now</div>
      <div className='  font-semibold text-2xl font-serif '> Our Feature Services</div>
      <div className='grid grid-cols-3 gap-5 p-2  ' >
        {featureProducts.map((curElem)=>{
          return <Product key={curElem.id} {...curElem} />

        })}
      </div>
  
      
    </div>
  )
}

export default FeatureProduct











// import { useProductContext } from "../Context/ProdutContext";
// import Product from "./Product";

// const FeatureProduct = () => {
//   const { isLoading, featureProducts } = useProductContext();

//   if (isLoading) {
//     return <div> ......Loading </div>;
//   }

//   return (
//     <div className="section">
//       <div className="container">
//         <div className="intro-data">Check Now!</div>
//         <div className="common-heading">Our Feature Services</div>
//         <div className="grid grid-three-column">
//           {featureProducts.map((curElem) => {
//             return <Product key={curElem.id} {...curElem} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };



// export default FeatureProduct;