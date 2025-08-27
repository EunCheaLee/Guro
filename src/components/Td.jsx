import React from "react";

const Td = ({person}) => {
    // 데이터를 넘길 때에는 {}로 감싸야한다.
    return(
        <>
            {Object.values(person).map(info => (<td>{info}</td>))}
            {/*{Object.values(persons[3]).map(info=>(<td>{info}</td>))}*/}
            {/*<td>{persons[0].name}</td>*/}
            {/*<td>{persons[0].job}</td>*/}
            {/*<td>{persons[0].pay}</td>*/}
        </>
    )
}

export default Td;