import { Children } from "react";

function Titulo({Children}) {
    return (  
        <h1 className="text-blue-500 pb-2 border-b-4 border-blue-500">
            {Children}
        </h1>
    );
}

export default Titulo;