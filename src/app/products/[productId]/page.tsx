const ProductDetails = async ({params}: {params: Promise <{productId: string}>}) => {
    const productId = (await params).productId
    return ( <><h1>{productId}</h1></> );
}
 
export default ProductDetails;