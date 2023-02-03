import React from 'react'
import plans from '../../utils/plans'
import PlanCard from '../ui/PlanCard'
import Switch from '../ui/Switch'

export default function SelectPlan() {

  return (
    <div  className='plans-section fade-in'>
      <div className='plans-container'>
        {
          plans.map(plan => (
            <PlanCard plan={plan} key={plan.name} />
          ))
        }
      </div>

      <Switch/>
    </div>
  )
}
