import { useEffect, useState } from "react";
import { ScreenProfile } from "../ScreenProfile/ScreenProfile";

const token = import.meta.env.GIT_TOKEN_ACCESS;

const ConsultGitApi = async (eve) =>{
    const GetUser = await fetch(`https://api.github.com/users/${eve}`,{
        headers: {
            Authorization: token
        }
    })
    const Data = GetUser.json()
    return Data

}

export const FindInput = ()=>{


    const[ GetUser, setGetUser ]= useState('')

    const[DataUser,setDataUser] = useState({})
   
    const OnUser = (eve)=>{
        setGetUser(eve.target.value)
    }

    const GetElement = (eve)=> {
        const ConsultUser = ConsultGitApi(eve).then(res =>{setDataUser(res)})
        ConsultUser()
        
    }
    useEffect(()=>{ConsultGitApi('octocat').then(res=> setDataUser(res))},
    []
  
    )
    return(
    <><h1>DevFinder</h1>
   
            <span></span>
            <input type="text"  value={GetUser} onChange={OnUser}/>
            <button onClick={ ()=> { GetElement(GetUser) }}> teste </button>
        
            <ScreenProfile  ProfileImg = {DataUser.avatar_url}
             UserName={DataUser.name} 
             NickName={ DataUser.login}  
             Followers={DataUser.followers}
             PublicRepo={DataUser.public_repos}
             Following={DataUser.following}
             JoinGit ={DataUser.created_at}
             Bio={DataUser.bio}
             Location ={DataUser.location}
             Blog = {DataUser.blog} 
             Twitter={DataUser.twitter_username}
             Company={DataUser.company} 
              />
            {console.log(DataUser)}

    </>)
}