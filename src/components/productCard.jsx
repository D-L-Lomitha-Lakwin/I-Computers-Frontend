// Definetly function name's first letter should be Capital
export default function ProductCard(props){ 

    return (
        <div>

            {/*......  To use JS inside HTML use {}  ......*/}

            <h1>{props.name}</h1> 
            <img src= {props.image} />
            <p>LKR {props.price} </p>   
        </div>
    )
}