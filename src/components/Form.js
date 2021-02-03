import React from 'react';

import './Form.css'

const Form = ({formData, type}) => {

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
                            <input type={inputType} name={input[0]}/>
                        </div>
                    )
                default:
                    return (
                        <div className="input" key={index}>
                            <label htmlFor={input[0]}>{input[0]}</label>
                            <input type={inputType} name={input[0]} />
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
        <form id="form">
            { formData ? loaded() : loading() }
        </form>
    )
}
export default Form