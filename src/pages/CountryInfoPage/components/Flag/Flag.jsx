import React from 'react'
import './Flag.css'

export const Flag = ({currentData}) => {
  return (
	<img className='flag' src={currentData.flags.svg} alt={currentData.name.common} width='560' height='480'  />
  )
}
