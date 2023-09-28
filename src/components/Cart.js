function Cart(props) {
    return (
        <div  className="overlay">
            <div className="cart">
                <h2>Cart
                    <img onClick={props.onClose} className="cartRemove" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items-container">

                    <div className="items">
                        <div className="cart-item">
                            <img className="cart-item_img" width={70} height={70} src="img/cards-img/1.jpg" alt="vinyl" />
                            <div className="cart-item_block">
                                <p className="cart-item_text">Monument (Yellow Egg Drop Vinyl)</p>
                                <b>29.99$</b>
                            </div>
                            <img className="cart-item_removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                        </div>

                        <div className="cart-item">
                            <img className="cart-item_img" width={70} height={70} src="img/cards-img/2.jpg" alt="vinyl" />
                            <div className="cart-item_block">
                                <p className="cart-item_text">Random Access Memories</p>
                                <b>29.99$</b>
                            </div>
                            <img className="cart-item_removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                        </div>
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