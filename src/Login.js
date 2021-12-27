import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    style={{ width: "100px" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt=""
                />
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
            </div>

            <button type="submit" onClick={signIn}>
                Login
            </button>
        </div>
    );
}

export default Login;
