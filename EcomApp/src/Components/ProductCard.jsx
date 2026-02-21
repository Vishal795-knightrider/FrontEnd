export default function ProductCard({product,addToCart})
{
    return(
        <div className="container">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button onClick={()=>addToCart(product)}>Add To Cart</button>
        </div>
    );
}