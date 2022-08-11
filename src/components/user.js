import React,{useState,useEffect} from "react";
import styles from "./user.module.css";
import avatar from "./image-avatar.png"


const User=()=>{
const[user,setUser]=useState([]);

const fetchData=async()=>{
    const data=await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
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
               
              <img src={avatar} alt=""/>
               
            </div>
            <div className={styles.userName}>
           {item.name}
            </div>

        </div>

        <div className={styles.text}>
            
        </div>

        <div className={styles.days}>
            
        </div>

        <div className={styles.userFooter}>
            <div className={styles.footerPhoto}>
    
             </div> 

             <div className={styles.footerName}>
    
             </div>
        </div>

</div>


    
)
    
    )} 




</>

    );

}

export default User;