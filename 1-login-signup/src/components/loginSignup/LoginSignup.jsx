import React, { useState } from "react";
import './style.css';



const LoginSignup = () => {
    
    const [action, setAction] = useState('Signup');
    
    return(
        <div className="from-parent">
            <div className="login-heading">
                <h2>{action}</h2>
                <div className="login-underline"></div>
            </div>
            <div className="from-inputs">
                <form action="#" method="#">
                    <div className={action == 'Login' || action == 'Forget' ? 'name-none' : 'form-control mb-6'}>
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="form-control mb-6">
                        <label htmlFor="Email">Email</label>
                        <input name="email" type="email" placeholder="Email" />
                    </div>
                    <div className={action == 'Forget'? 'name-none' : 'form-control mb-6'}>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" placeholder="Password" />
                    </div>
                    <div onClick={()=>{setAction('Forget')}} className={action == 'Signup' ? 'name-none' : 'forget'}>
                        <span>Forget Password?</span>
                    </div>
                    <div className="submit-btn">
                        {action == 'Forget'? <button className={action == 'Forget' ? 'purpal' : 'login'}>Submit</button> : <><button onClick={()=>{setAction('Signup')}} className={action == 'Signup' ? 'purpal' : 'signup'}>Signup</button>
                        </>}
                        <button onClick={()=>{setAction('Login')}} className={action == 'Login' ? 'purpal' : 'login'}>Login</button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginSignup;