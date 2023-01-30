//rafce
//import opcional desde react v 16.8

import React from 'react'

// const Information = (props) => {
//   return (
//     <p>Hola! {props.dato} {props.otro} !!!</p>
//   )
// }


// const Information = props => {
//     let {dato,otro} = props;
    
//     return (
//       <p>Hola! {dato} {otro} !!!</p>
//     )
//   } 


const Information = ({dato,otro}) => {
    
    return (
      <p>Hola! {dato} {otro} !!!</p>
    )
  }

export default Information
