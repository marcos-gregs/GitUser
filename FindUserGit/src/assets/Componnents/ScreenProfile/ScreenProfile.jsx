import './ScreeProfileStyle.css'
export const ScreenProfile = ({ ProfileImg, UserName, NickName,  Followers, PublicRepo, Following,JoinGit, Bio,Location,Blog,Twitter,Company }) =>{
    return(<>
        <section className="PersonProfile">
        <div className="TopContent">
           <div className='ImgTop'>
            <img src={ProfileImg} alt="" srcSet="" />
            </div>
            <div className='ProfileContent'>
                
                     <h1>{UserName}</h1>
                    <p>{NickName}</p><p>{Bio}</p>
              
                <p className='JoinGit'>{JoinGit}</p>
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
            <span><i className="fa-solid fa-location-dot"></i> {Location}</span>
            <span><i className="fa-brands fa-twitter"></i> {Twitter}</span>
            <span><i className="fa-solid fa-link"></i> {Blog}</span>
            <span><i className="fa-regular fa-building"></i> {Company}</span>
        </div>
        </section>
    </>)
}