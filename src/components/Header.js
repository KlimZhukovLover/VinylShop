function Header(props) {
    return (<header>
        <div className="headerLeft">
            <img width={40} height={40} src="/img/vinyl.svg" alt="" />
            <div className="headerInfo">

                <h3>React vinyl</h3>
                <p>Best vinyl records store</p>
            </div>
        </div>
        <ul className="headerRight">
            <li onClick={props.onClickCart}>
                <img className="headerIcons" src="/img/cart.svg" alt="" />
                <span>500 $</span>
            </li>
            <li>
                <img className="headerIcons" src="/img/favourite.svg" alt="" />

            </li>
            <li>
                <img className="headerIcons" src="/img/profile.svg" alt="" />

            </li>
        </ul>
    </header>);
}

export default Header;