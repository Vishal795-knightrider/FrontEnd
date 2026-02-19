export default function ProductCard({product,addToCart})
{
    return(
        <div>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button onClick={()=>addToCart}>Add To Cart</button>

        </div>
    );
}