import { useState } from 'react';
import './register.css';
function Register() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
        <div className="Register">
        <header className="Register-header">
            <h1>Fuel Prediction App</h1>
        <form onSubmit={handleSubmit} className="Form">
                <div>
                    <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} placeholder="Username" required />
                </div>
                <div>
                    <input type="password" name="password" value={inputs.password || ""} onChange={handleChange} placeholder="Password" required />
                </div>
                <div>
                    <button id="register" type="submit"> Register</button>
                    
                </div>
            </form>
        </div>
    );
}

export default Register;