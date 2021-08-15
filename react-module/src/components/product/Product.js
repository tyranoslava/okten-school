import './Product.css';

// export default function Product(props) {
//     let {title, price} = props;
export default function Product({title, price}) {

    return (
        <div>
            <div className={'product'}>
                <h2>{title}</h2>
                <h3>price is - {price}</h3>
                <hr/>
            </div>

        </div>
    );
}