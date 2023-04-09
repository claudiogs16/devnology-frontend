import React, { useEffect, useState } from "react"
import axios from 'axios';

const Head = () => {
  const [userData, setUserData] = useState(null);
  const user_id = 2;

  useEffect(()=>{
    
    axios.get(`http://devnology.test/api/users/${user_id}`).then((data) => {
      // console.log(data);
      setUserData(data.data);
      
    }, (error)=>{
      console.log(error);
    });
    // console.log("UserData: ",userData);
  }, [])

  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +55 (11) 99999-9999

</label>
            <i className='fa fa-envelope'></i>
            <label> suport@devnology.com.br</label>
          </div>
          <div className='right row RText'>
            
            
            <span className="user-span">Utilizador:</span>
            <label>{userData?.name}</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
