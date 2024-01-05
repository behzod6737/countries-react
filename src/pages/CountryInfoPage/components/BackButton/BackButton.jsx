import React from 'react'
import './BackButton.css'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

export const BackButton = () => {
  return (
		<Link className='backButton-link' to={'/'}> <FaArrowLeftLong className='arrow' />Back</Link>
  )
}
