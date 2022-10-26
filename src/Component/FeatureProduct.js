import { useProductContext } from "../Context/ProdutContext";


const FeatureProduct = () => {
  const {  featureProducts} =useProductContext()
console.log(featureProducts , "fetureSection")
  return (
    <div>
      featureProducts
      
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