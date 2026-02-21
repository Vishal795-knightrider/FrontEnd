export default function Cart({cartItems,totalCost,removeFromCart}){

    return(
        <div className="cart">
            <h2>Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="empty">Cart is Empty</p>
            ) : (
                cartItems.map((item,index)=>(
                    <div key={index} className="cart-item">
                        <span>{item.name} - ₹{item.price}</span>
                        <button 
                          className="remove-btn"
                          onClick={()=>removeFromCart(index)}>
                          Remove
                        </button>
                    </div>
                ))
            )}

            <h3 className="total">Total Amount: ₹{totalCost}</h3>
        </div>
    );
}