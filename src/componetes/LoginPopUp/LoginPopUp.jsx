import React, { useEffect, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/frontend_assets/assets'

export default function LoginPopUp({ setshowlogin }) {

    const [currState, setCurrstate] = useState("Login");

    useEffect(()=>{

    })

    return (
        <div className='login-popup'>
            <form className="login-popup-container">

                <div className="login-popup-tital">
                    <h2>{currState}</h2>
                    <img
                        src={assets.cross_icon}
                        alt="close"
                        onClick={() => setshowlogin(false)}
                    />
                </div>

                <div className="login-popup-input">
                    {currState !== 'Login' && (
                        <input type="text" placeholder="Your Name" required />
                    )}

                    <input type="email" placeholder="Your Email" required />
                    <input type="password" placeholder="Password" required />
                </div>

                <button type="submit">
                    {currState === 'Sign Up' ? "Create Account" : "Login"}
                </button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>
                        By continuing, I agree to the terms of use & privacy policy
                    </p>
                </div>

                {currState === "Login" ? (
                    <p>
                        Create a New Account?{" "}
                        <span style={{ color: "#ff6347",cursor:"pointer" }} onClick={() => setCurrstate("Sign Up")}>
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Already have an Account?{" "}
                        <span style={{ color: "#ff6347",cursor:"pointer" }}
                            onClick={() => setCurrstate("Login")}>
                            Login here
                        </span>
                    </p>
                )}

            </form>
        </div>
    )
}
