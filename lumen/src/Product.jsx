export function Product({data}){
    return(

        <div>
            <h4>Name:{data.name}</h4>
            <p>roll:{data.role}</p>
            <p>Country:{data.country}</p>
        </div>

    );
}