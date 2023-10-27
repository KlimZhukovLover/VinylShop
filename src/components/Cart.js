function Cart({ onClose, items = [] }) {
    
    return (
        <div className="overlay">
            <div className="cart">
                <h2>Cart
                    <img onClick={onClose} className="cartRemove" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items-container">

                    <div className="items">

                        {
                            items.map((obj) => (
                                (<div className="cart-item">
                                    <img className="cart-item_img" width={70} height={70} src={obj.img} alt="vinyl" />
                                    <div className="cart-item_block">
                                        <p className="cart-item_text">{obj.name}</p>
                                        <b>{obj.price} $</b>
                                    </div>
                                    <img className="cart-item_removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                                </div>)

                            ))
                        }
                    </div>

                </div>

                <div className="cart-total">
                    <ul>
                        <li className="total">
                            <span>Total:</span>
                            <div></div>
                            <b>58.98$</b>
                        </li>
                        <li className="tax">
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>2.99$</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Checkout
                        <img src="/img/btn-img.svg" alt="Arrow" />
                    </button>
                </div>

            </div>
        </div >
    );
}

export default Cart;