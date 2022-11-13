import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import storage from "../../../utils/storage";
import { useAuth } from "./Context";
import {FormField, Checkbox } from "./FormField";
import { login } from "./service";

const LoginPage = () => {
    const { handleLogin } = useAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [checked, setChecked] = useState(false)

    const handleChangeEmail = event => setEmail(event.target.value);
    const handleChangePassword = event => setPassword(event.target.value);
    
    const resetError = () => setError(null);
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleChecked = () => setChecked(!checked)

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            resetError();
            setIsLoading(true);
            await login({email,password});
            handleLogin();

            if (!checked){
                storage.clear()
            }
            const to = location.state?.from?.pathname || '/';
            navigate(to, { replace: true });
            

        } catch (error) {
            setError(error);
            setIsLoading(false);
            
        }

    };

    return <div className="login-form">
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
            disabled={ !(email && password && !isLoading)}> Log In </button>
        </form>
        {error && (
        <div onClick={resetError} className="page-error">
          {error.message = 'Wrong email or password'}
          
        </div>
      )}
    </div>
}

export default LoginPage