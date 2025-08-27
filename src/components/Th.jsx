import React from "react";

const Th = ({persons}) => {
    return(
        <>
            {Object.keys(persons[0]).map(info=>(<th>{info}</th>))}
            {/*<th>name</th>*/}
            {/*<th>job</th>*/}
            {/*<th>pay</th>*/}
        </>
    )
}

export default Th;