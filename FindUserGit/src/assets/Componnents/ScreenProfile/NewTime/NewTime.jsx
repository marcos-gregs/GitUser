import dayjs from 'dayjs'
import './TimeStyle.css'

import { useEffect, useState } from 'react'

export const NewTime =( { JoinComunity } )=>{
    let newprops = `${JoinComunity}`
    let date = dayjs( newprops.slice(0,9) ).format('YYYY MMM DD')
   
    return( <>
     <p className='JoinGit'>
        Joined {date}
    </p>
  
    </>)
}