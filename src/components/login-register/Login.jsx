import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Api from "../../api";
import { Context } from "../Context";

const Login = () => {


    let api = new Api();

    let [email, setEmail] = useState("");
    
    let [pass, setPass] = useState("");

    let [err, setErr] = useState([]);

    const [user,setUser] = useContext(Context);

    const history = useHistory();

    let onChange=(e)=>{
        let obj= e.target;

        if(obj.classList.contains("email")){
            setEmail(obj.value);
        }
        if(obj.classList.contains("password")){
            setPass(obj.value);
        }
    }

    let check=()=>{
        setErr([]);

       if(email === ""){
            setErr((prev=>{
               return [...prev,"Email is required" ];
          }));
       }

       if(pass === ""){
            setErr((prev=>{
               return [...prev, "Password is required"];
           }));
       }
       
    }

    let loginHandle = async()=>{
        check();
        
        if(err == ''){
            let obj = {email: email, password: pass};

            let rez = await api.login(obj);

            if(rez === "success"){
                setUser(obj);
                history.push("/");
                
            }else{
                setErr((prev=>{
                    return [...prev, rez ];
               }));
            }


        }
        
    }

    useEffect(()=>{
        check();
    },[email, pass]);

    return (
        <section className="login">
            <div className="container" onChange={onChange}>
                <h1>Login</h1>
                <div className="form">
                    {
                        err && err.map(e=>{
                            return <p key={e} className="loginErr">{e}</p>
                        })
                    }
                    <input type="email" className="email" placeholder="Email"/>
                    <input type="password" className="password" placeholder="Password"/>
                    <a href="#" className="login-btn" onClick={loginHandle}>Login</a>
                    <Link to={"/register"} className="register-btn">Register</Link>
                </div>
            </div>
        </section>
    )
}

export default Login