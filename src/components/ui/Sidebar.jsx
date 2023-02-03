import React from 'react'
import stepsForm from '../../utils/steps'
import StepNavItem from './StepNavItem'

export default function Sidebar() {
  return (
    <div className='sidebar'>
       <ul className="sidebar__nav">
          {
            stepsForm.map(step => (
              <StepNavItem key={step.id} step={step}/>
            ))
          }
       </ul>
    </div>
  )
}
