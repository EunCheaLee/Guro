import React from "react";
import Th from "./Th.jsx";
import Td from "./Td.jsx";

const Tr = ({persons}) => {
    return(
        <>
            <tr>
                <Th persons={persons}/>
            </tr>

            {persons.map(person => (<tr><Td person={person}/></tr>))}
        </>
    )
}

export default Tr;