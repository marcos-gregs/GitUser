import './ScreeProfileStyle.css'
import { NewTime } from './NewTime/NewTime'

export const ScreenProfile = ({ ProfileImg, UserName, NickName,  Followers, PublicRepo, Following,JoinGit, Bio,Location,Blog,Twitter,Company }) =>{
   
   return(<>
        <section className="PersonProfile">
        <div className="TopContent">
           <div className='ImgTop'>
            <img src={ProfileImg} alt="" srcSet="" />
            </div>
            <div className='ProfileContent'>
                
                    <h1>{UserName}</h1>
                    <p>{NickName}</p>
                    <p>{Bio ? "" : "No has bio"}</p>
              
            <NewTime JoinComunity= {JoinGit} />
            </div> 
           
        </div>
        <div className='MiddleCotent'>
            
            <div>
            <p>Followers</p>
            <p>{Followers}</p> 
            </div>
            
            <div>
            <p>Public Repositories</p>
            <p>{PublicRepo}</p>
            </div>
           
           <div>
            <p>
            Following
            </p>
            <p>{Following}</p>
           </div>
 
        </div>
        <div className='BottomContent'>
            <span><i className="fa-solid fa-location-dot"></i> { Location ? "" : "No has location"}</span>
            <span><i className="fa-brands fa-twitter"></i> {Twitter ? "" :  "No has twitter"}</span>
            <span><i className="fa-solid fa-link"></i> {Blog ? "" : "No has blog"}</span>
            <span><i className="fa-regular fa-building"></i> {Company ? "" : "No has company"}</span>
        </div>
        </section>
    </>)
}