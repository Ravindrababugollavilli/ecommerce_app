import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div className="head" onClick={() => props.handleShow(false)} >Shopping Duniya</div>
            <div  className="cart" onClick={() => props.handleShow(true)}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;
