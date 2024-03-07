import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { getUserByEmail } from '../../services/UserService';
import "./Login.css"
import { authService } from '../../services/authService';

export default function Login({isLoggedIn, setIsLoggedIn}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const getUserByUserName = async (email) =>{
        const data = await getUserByEmail(email);
        localStorage.setItem("userId", data.id);
        console.log("get user by username method Working " ,localStorage.getItem("userId"));
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const data = await authService.login(email, password);
            // Redirect the user or do something with the data
            if (data.jwtToken) {
                // User authenticated, navigate to home page
                setIsLoggedIn(true);
                const email =  localStorage.getItem("username")
                await getUserByUserName(email);
                console.log("Local Storage user id",localStorage.getItem("userId"));
                navigate('/home');
            } else {
                // Invalid username or password, show error message and navigate to login page
                setError('Invalid Username or Password');
                navigate('/login');
            }
            
           

        } catch (error) {
            console.log(password);
            setError('Failed to login');
            navigate("/login")
        }
        setEmail("");
        setPassword("");
    };

  return (
    <div className='container'>
    <form onSubmit={handleLogin}> 
    {error && <p>{error}</p>}
    <input type="email" name="email" placeholder='Enter Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required/>
    <input type="password" name="password" placeholder='Enter Your password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
    <button type='submit'>Login</button>
    
    </form>
</div>
  )
}
