import { useSelector, useDispatch } from 'react-redux'
import { setUsers, setToken } from "../stores/slices/loginSlice"
import React, { useState } from "react";
import { useHistory, Redirect } from 'react-router-dom';
import { GetUserList } from '../service/ApiCalls';


const LoginPage = () => {
    const [loginButtonState, setButtonState] = useState(false);
    const dispatch = useDispatch()
    const regex = new RegExp("^([a-z0-9]{2,})$");
    const tokenItem = document.getElementById("floatingToken");
    const history = useHistory();
    const { auth } = useSelector(state => state.login);

    const handlerUserName = (event) => {
        let userName = event.target.value;
        if (userName.length > 3) {
            setButtonState(true);
        } else {
            setButtonState(false);
        }
    }

    const handlerLoginButton = async (event) => {
        event.preventDefault()
        const feedBack = document.getElementById("feedBack");
        let token = tokenItem.value;
        if (regex.test(token)) {
            try {
                let response = await GetUserList(token);
                dispatch(setUsers(response.data));
                dispatch(setToken(token));
                history.push("/home");
                feedBack.style.display = "none"
            } catch (error) {
                feedBack.style.display = "block"
                feedBack.innerText = "Token not accepted!"
            }
        } else {
            feedBack.innerText = "Please enter a valid token!"
            feedBack.style.display = "block"
        }
    }
    const showToken = (event) => {
        if (tokenItem.type === "password") {
            tokenItem.type = "text";
        } else {
            tokenItem.type = "password";
        }
    }

    return (
        !auth ? <div className="d-flex justify-content-center mt-5 h-100 d-inline-block">
            <main className="card form-signin col-md-3 p-4">
                <form onSubmit={handlerLoginButton}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="mb-3 form-floating text-left">
                        <label for="floatingInput">Email address</label>
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handlerUserName} />
                    </div>
                    <div className="mb-3 form-floating text-left">
                        <label for="floatingToken">Token</label>
                        <input type="password" className="form-control" id="floatingToken" placeholder="Enter Token" />
                        <div className="invalid-feedback" id='feedBack'>
                            You must agree before submitting.
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <input className="m-2 " onClick={showToken} type="checkbox" value="" aria-label="Checkbox for following text input"></input>
                            <div className='' onClick={showToken}>Show Token</div>
                        </div>
                    </div>
                    <button disabled={!loginButtonState} className="w-100 btn btn-lg btn-primary" type="submit" >Sign in</button>
                </form>
            </main>
        </div> : <Redirect to="/home" />
    );
}

export default LoginPage;
