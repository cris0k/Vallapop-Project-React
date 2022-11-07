import { useState } from "react"
import FormField from "./FormField";

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const handleChangeUsername = event => setUsername(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);

    const handleSubmit = async event => {
        event.preventDefault();
    }

    return <div>
        <h1> Log In </h1>
        <form onSubmit={handleSubmit}>
            <FormField 
            type='text' 
            name="username" 
            label="Username" 
            className="login-input"
            onChange={handleChangeUsername}
            value={username}/>
            
            <FormField 
            type='password' 
            name="password" 
            label="Password"
            className="login-input"
            onChange={handleChangePassword}
            value={password}/>
            
            <button type="submit"> Log In </button>
        </form>
    </div>
}

export default LoginPage