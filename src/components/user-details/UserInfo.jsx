import React from 'react'
import UserDetails from './UserDetails'
import UserOrders from './UserOrders';
import UserFavorite from "./UserFavorite"
import UserAccount from "./UserAccount"

const UserInfo = ({right, favLocal}) => {

  return (
      <div className='userInfoContainer'>
        {
          right == 'details' && <UserDetails favLocal={favLocal}/> 
        }  
        {
          right == 'orders' && <UserOrders/>
        }
        {
          right == 'favorite' && <UserFavorite favLocal={favLocal}/>
        }
        {
          right == 'account' &&<UserAccount/>
        }
      </div>
  )
}

export default UserInfo