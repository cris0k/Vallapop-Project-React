import { useState } from "react"
import {FormField, Checkbox } from "./FormField";
import { login } from "./service";

const LoginPage = ({onLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);
    const resetError = () => setError(null);
    const [isFetching, setIsFetching] = useState(false);
    const [checked, setChecked] = useState(false)

    
    const handleChecked = () => setChecked(!checked)

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            resetError();
            setIsFetching(true);
            await login({email,password});
            onLogin();
            
        } catch (error) {
            setError(error);
            setIsFetching(false);
            
        }

    };

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

            <Checkbox 
            name="selector"
            label="Stay logged in"
            onChange={handleChecked}
            checked={checked}
            />
            
            <button 
            type="submit" 
            disabled={ !(email && password && !isFetching)}> Log In </button>
        </form>
        {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
}

export default LoginPage