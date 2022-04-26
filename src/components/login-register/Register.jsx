import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Api from "../../api";
import { Context } from "../Context";

const Register = () => {

    const [user,setUser] = useContext(Context);

    let api = new Api();

    let [name, setName] = useState('');

    let [email, setEmail] = useState('');

    let [password, setPassword] = useState('');

    let [confirmPassword, setConfirmPassword] = useState('');

    let [address, setAddress] = useState('');

    let [phone, setPhone] = useState('');

    let [err, setErr] = useState([]);

    let history = useHistory();

    let onChange=(e)=>{
        let obj= e.target;

        if(obj.classList.contains("name")){
            setName(obj.value);
        }
        if(obj.classList.contains("email")){
            setEmail(obj.value);
        }
        if(obj.classList.contains("password")){
            setPassword(obj.value);
        }
        if(obj.classList.contains("c-password")){
            setConfirmPassword(obj.value);
        }
        if(obj.classList.contains("address")){
            setAddress(obj.value);
        }
        if(obj.classList.contains("phone")){
            setPhone(obj.value);
        }
    }

    let check=()=>{
        setErr([]);
        if(name == ""){
            setErr((prev=>{
               return [...prev, "Name is required"];
           }));
        }

       if(email == ""){
            setErr((prev=>{
                return [...prev, "Email is required"];
            }));
        }

       if(password == ""){
            setErr((prev=>{
               return [...prev,"Password is required" ];
          }));
       }

       if(confirmPassword == ""){
            setErr((prev=>{
               return [...prev, "Confirm Password is required"];
           }));
       }
       if(address == ""){
            setErr((prev=>{
                return [...prev, "Address is required"];
            }));
        }

       if(phone == ""){
            setErr((prev=>{
                return [...prev, "Phone is required"];
            }));
        }

        if(phone){
            phone = parseInt(phone);

            if(isNaN(phone)){
                setErr(prev=>{
                    return [...prev, "Phone is not a number!"];
                })
            }else{
                if(phone[0] == 0){
                    phone.shift();
                }
            }
        }
       
        if(password && confirmPassword){
            if(password != confirmPassword){
                setErr(prev=>{
                    return[...prev, "Passwords must match!"];
                })
            }
        }

    }

    let registerHandle = async()=>{
        check();

        if(err == ''){

            let obj = {
                name : name,
                email : email,
                password, password,
                confirmedPassword : confirmPassword,
                billing_address : address,
                phone : phone
            }

            let add = await api.createCustomer(obj);

            if(add == 'success'){
                setUser({email: email, password: password});
                history.push("/");
            }else{
                setErr((prev=>{
                    return [...prev, add ];
               }));
            }
        }
    }

    useEffect(()=>{
        check();
    },[name, email, password, confirmPassword, address, phone]);

    return (
        <section className="register">
            <div className="container">
                <h1>Register</h1>
                <div className="form" onChange={onChange}>
                    {
                        err && err.map(e=>{
                            if(e === 'create success'){
                                return <p key={e} className="success">{e}</p>
                            }
                            return <p key={e} className="loginErr">{e}</p>
                        })
                    }
                    <input type="text" placeholder="Name" className="name"/>
                    <input type="email" placeholder="Email" className="email"/>
                    <input type="password" placeholder="Password" className="password"/>
                    <input type="password" placeholder="Confirm Password" className="c-password"/>
                    <input type="text" placeholder="Address" className="address"/>
                    <input type="tel" placeholder="Phone" className="phone"/>
                    <a href="#" className="register-btn" onClick={registerHandle}>Register</a>
                    <Link to={"/login"} className="login-btn">Already have an account?</Link>
                </div>
            </div>
        </section>
    )
}
export default Register