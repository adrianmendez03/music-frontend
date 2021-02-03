import React ,{ useState } from 'react';

import './Form.css'

const Form = ({formData, type, handleSubmit}) => {

    //create a controlled form with state
    const [formInputs, setFormInputs] = useState(formData)

    const handleChange = event => {
        let key = event.target.name
        setFormInputs({
            ...formInputs,
            [key]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        handleSubmit(formInputs)
    }

    const renderFormInputs = () => {
        // Turns formData Object into a mappable array
        return Object.entries(formData).map((input, index) => {
            // Gets the type of value to render an appropriate input
            let inputType = typeof input[1]
            switch(inputType) {
                case "number": 
                    return (
                        <div className="input" key={index}>
                            <label htmlFor={input[0]}>Year Released</label>
                            <input type={inputType} name={input[0]} value={formInputs[input[0]]} onChange={handleChange}/>
                        </div>
                    )
                default:
                    return (
                        <div className="input" key={index}>
                            <label htmlFor={input[0]}>{input[0]}</label>
                            <input type={inputType} name={input[0]} value={formInputs[input[0]]} onChange={handleChange}/>
                        </div>
                    )
            }
        })
    }
    
    const loading = () => <h2>Loading ...</h2>

    const loaded = () => {
        return (
            <>  
                {renderFormInputs()}
                <button type="submit">{type}</button>
            </>
        )
    }

    return (
        <form id="form" onSubmit={handleFormSubmit}>
            { formInputs ? loaded() : loading() }
        </form>
    )
}
export default Form