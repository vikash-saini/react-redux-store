import React from 'react'

export default function Image(props) {

    if (!props.src || props.src=='') {
        
        throw new  Error("Image Not Found");
    }
  return (
    <><img src={props.src} {...props} /></>
  )
}
