import { useState } from "react";



export default function Picker() {
    const [name, setName] = useState([]);

    const handleChange = (event) => {
        
        const value = event.target.value;
        setName(values => ([...values,value])) 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name);
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Item:
                <input
                    type="text"
                    name="item"
                    value= {name[name.length]}
                    onChange={handleChange}
                />
            </label>
            <label>Number of Items:
                <input
                    type="number"
                    name="noi"
                    value={name[name.length]}
                    onChange= {handleChange}
                />                
            </label>
            <button type="submit">Add</button>
        </form>
    </>
  )
}

