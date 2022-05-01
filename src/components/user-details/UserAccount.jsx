import { useContext, useRef, useState } from "react"
import Api from "../../api";
import { Context } from "../Context";


const UserAccount = () => {

    let api = new Api();

    let [user, setUser] = useContext(Context);

    let username = useRef();

    let pass = useRef();

    let address = useRef();

    let phone = useRef();

    let handleChange = async (e, type)=>{
        e.preventDefault();

        if(type == 'username'){

            if(username.current.value == ''){
                alert("You must fill the input !");
            }else{

                let obj= {name: username.current.value};

                let update = await api.updateCustomer(obj, user.id);
            
                if(update == 'update success'){

                    let username = user;
                    username.name = obj.name;
                    setUser(username);

                    alert(update);
                }
            }
        }

        if(type == 'pass'){

            if(pass.current.value == ''){
                alert("You must fill the input !");
            }else{
                
                if(window.confirm("Are you sure you want to change your password?") == true){
                    let obj= {
                        password: pass.current.value,
                        confirmedPassword: pass.current.value
                    };
    
                    let update = await api.updateCustomer(obj, user.id);
                
                    if(update == 'update success'){
    
                        let username = user;
                        username.password = obj.password;
                        setUser(username);
    
                        alert(update);
                    }
                }
            }
        }

        if(type == 'address'){

            if(address.current.value == ''){
                alert("You must fill the input !");
            }else{
                
                let obj= { billing_address: address.current.value };

                let update = await api.updateCustomer(obj, user.id);
            
                if(update == 'update success'){

                    let username = user;
                    username.billing_address = obj.billing_address;
                    setUser(username);

                    alert(update);
                }
            }
        }

        if(type == 'phone'){

            if(phone.current.value == ''){
                alert("You must fill the input !");
            }else{
                
                let obj= { phone: parseInt(phone.current.value)};

                if( isNaN(obj.phone) == true){
                    alert("Phone must be a number!");
                }else{
                    let update = await api.updateCustomer(obj, user.id);
            
                    if(update == 'update success'){

                        let username = user;
                        username.phone = obj.phone;
                        setUser(username);

                        alert(update);
                    }

                }
            }
        }
       
    }

    const handleDeleteCustomer = async()=>{
        if(window.confirm("Are you sure your want to delete your account?") == true){
            
            let rez = await api.deleteCustomer(user.id);
        
            if(rez == 'delete success'){
                setUser(undefined);
            }
        }
    }

  return (

    <div className="accountInfo">
      <div className="card">
          <div className="box">
              <p>Change your user name :</p>
              <div className="inputBox">
                  <input type="text" className="changeName" ref={username}/>
                  <button className="changeNameBtn" onClick={(e)=>handleChange(e,'username')}>Save</button>
              </div>

              <p>Change your password :</p>
              <div className="inputBox">
                  <input type="password" className="changePassword" ref={pass}/>
                  <button className="changePasswordBtn" onClick={(e)=>handleChange(e,'pass')}>Save</button>
              </div>
          </div>
      
          <div className="box">
              <p>Change your adress :</p>
              <div className="inputBox">
                  <input type="text" className="changeAddress" ref={address}/>
                  <button className="changeAddressBtn" onClick={(e)=>handleChange(e,'address')} >Save</button>
              </div>

              <p>Change your phone :</p>
              <div className="inputBox">
                  <input type="number" className="changePhone" ref={phone}/>
                  <button className="changePhoneBtn" onClick={(e)=>handleChange(e,'phone')}>Save</button>
              </div>

          </div>

          <a href="#" className="deleteAccBtn" onClick={handleDeleteCustomer}>Delete Account</a>
      </div>
  </div>
  )
}

export default UserAccount