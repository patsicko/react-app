import React,{useState,useEffect} from "react";
import styles from "./user.module.css";
import avatar from "./image-avatar.png"


const User=()=>{
const[user,setUser]=useState([]);

const fetchData=async()=>{
    const data=await (await fetch("https://api.github.com/users")).json();
    console.log(data);
    setUser(data);
}
// {fetchData()}
useEffect(()=>{
    fetchData();
},[])

    return(

<>
{user.map(item=>(
    
    <div className={styles.container} key={item.id}  >

        <div className={styles.displayUser}>
            <div className={styles.userImage}>
               
              {/* <img src={avatar} alt=""/> */}
              <img src={item.avatar_url} alt=""/>
               
            </div>
            <div className={styles.userName}>
           {item.login}
            </div>

        </div>

        {text()}

        <div className={styles.days}>
            <div className="id">
                {item.id}
            </div>
        </div>

        <div className={styles.userFooter}>
            <div className={styles.footerPhoto}>
            <img src={item.avatar_url} alt=""/>
             </div> 

             <div className={styles.footerName}>
                     {item.login}
             </div>
        </div>

</div>
   
)
    
    )} 

</>

    );


    function text() {
        return <div className={styles.text}>
            Our Equilibrium collection promotes balance and calm
        </div>;
    }
}

export default User;