import {React,useState} from "react";

const Forms = () => {
const [formData, setFormdata] = useState({
    username: "",
    EmailAddress: "",
    number: "",
    textareas:"",
})

function handleChange(event) {
    const { name, value } =event.target
    setFormdata(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))
}
    function submit() {
     alert("Submitted Succesfully")
 }

    return (
        <form onSubmit={submit} className="Formmain" id="Formmain">
            <h1 className="formhead">Contact Form</h1>
            <label htmlFor="name">Name:</label>
            <input
              
                id="name"
                placeholder="Name"
                name="username"
                onChange={handleChange}
                value={formData.username}
                required
            />
            
            <label htmlFor="email">Email Address:</label>
            <input 
                placeholder="Eamil@gmail.com"
                id="email"
                name="EmailAddress"
                onChange={handleChange}
                value={formData.EmailAddress}
                required/>
                
                
            
            <label htmlFor="numb">Phone No:</label>
            <input
                
                placeholder="03xx-xxxxxxxx"
                id="numb"
                name="number"
                onChange={handleChange}
                value={formData.number}
                required/>
            <label htmlFor="text">Text Area:</label>
            <textarea
                className="TextAreas"
                id="text"
                placeholder="Enter Text Here"
                name="textareas"
                onChange={handleChange}
                value={formData.textareas}
            />
            <button className="FormButton" type="submit" >Submit</button>
        </form>
    );
}

export default Forms;