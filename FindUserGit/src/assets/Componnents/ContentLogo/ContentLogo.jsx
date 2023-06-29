import { useState } from 'react'
import'./ContentLogo.css'

export const ContentLogo = ()=>{
    const [Icon ,setIcon] =useState('Moon')
    const [Mode,SetMode] = useState('Dark')
    const AlterMode = ()=>{
        if(Mode ==='Light'){
             SetMode('Dark')
        }
        if(Mode ==='Dark'){
            SetMode('Light')
        }
        const body = document.querySelector('body')
        body.classList.toggle('light-theme')
       AlterIcon()
    }

    const AlterIcon = () =>{
        if(Icon ==='Moon'){
            setIcon('Sun')
       }
       if(Icon ==='Sun'){
        setIcon('Moon')
        }
    }
    return(<>
      <div className="DivHeader">
            <h1>DevFinder</h1>
            <p>{Mode} <div className={Icon} onClick={AlterMode}></div></p>
        </div></>)
}