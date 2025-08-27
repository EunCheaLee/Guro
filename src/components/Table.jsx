import React, {useState} from 'react'
import Tr from "./Tr.jsx";
import Form from "./Form.jsx";

const initialState = [
    {name: "John", job: "frontend", pay: 400},
    {name: "Peter", job: "frontend", pay: 400},
    {name: "Sue", job: "frontend", pay: 400},
    {name: "Susan", job: "frontend", pay: 400},
]

const Table = () => {

    const [persons, setPersons] = useState(initialState)
    const take_data = (obj) => {
        setPersons((prev)=>[...prev, obj]);
    }
  return (
    <div>
      <>
        <table>
            <Tr persons={persons}/>
        </table><br/>
        <Form take_data={take_data}/>
      </>
    </div>
  )
}

export default Table
