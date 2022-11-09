import { useState } from "react"
import FormField from "./FormField";
import { login } from "./service";

const LoginPage = ({onLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);

    const handleSubmit = async event => {
        event.preventDefault();

        login({email,password}).then(onLogin)
    }



    return <div>
        <h1> Log In </h1>
        <form onSubmit={handleSubmit}>
            <FormField 
            type="email" 
            name="email" 
            placeholder="exampe@gmail.com"
            label="Email" 
            className="login-input"
            onChange={handleChangeEmail}
            value={email}/>
            
            <FormField 
            type='password' 
            name="password" 
            label="Password"
            className="login-input"
            onChange={handleChangePassword}
            value={password}/>
            
            <button type="submit" disabled={ !(email && password)}> Log In </button>
        </form>
    </div>
}

export default LoginPage