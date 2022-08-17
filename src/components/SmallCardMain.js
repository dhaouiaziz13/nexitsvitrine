import React from 'react'
import "../css/Main.css"
export default function SmallCardMain({imageurl,title,text}) {
  return (
    <div classname="SmallCardMain-cont">
        <img src={imageurl} alt=' ' width="260px" height="174px"/>
        <div className='SmallCardMain-text'>
            <span className='SmallCardMain-title'>{title}</span><br/>
            <span className='SmallCardMain-text'>{text}</span><br/>
            <span className='SmallCardMain-tryit'>free trial {'->'} </span>
        </div>
    </div>
  )
}
