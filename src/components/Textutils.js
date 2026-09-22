import React, { useState } from 'react'

export default function Textutils(props) {
    function handleUpClick() {
        let newText = text.toUpperCase();
        if (text == "") {
            props.showAlert("Please Enter Some Text", "danger")
        }
        else {
            setText(newText);
            props.showAlert("Changed to Uppercase", "success");
        }
    }
    function handleLoClick() {
        let newText = text.toLowerCase();
        if (text == "") {
            props.showAlert("Please Enter Some Text", "danger");
        }
        else {
            setText(newText);
            props.showAlert("Changed to Lowercase", "success");
        }
    }
    function handleClear() {
        if (text == "") {
            props.showAlert("Please Enter Some Text", "danger");
        }
        else {
            setText("");
            props.showAlert("Text Cleared", "success");
        }
    }

    function countWords(text) {
        return text.trim().split(/\s+/).filter(word => word !== '').length;
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="main" style={props.Text}>
                <div className="container">
                    <div className='left'>
                        <h1 className='heading'>Enter The Text To Analyze</h1>
                        <textarea className='text form-control' value={text} onChange={handleOnChange} name="text" id="text" placeholder='Enter text here'></textarea>
                        <div className="buttons">
                            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                            <button type="button" className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
                            <button type="button" className="btn btn-primary" onClick={handleClear}>Clear</button>
                        </div>
                    </div>
                    <div className='right'>
                        <h3>Word Counter</h3>
                        <p className='para'>{countWords(text)} words and {text.length} characters</p>
                        <h2 className='preview'>Preview</h2>
                        <p className='para'>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
