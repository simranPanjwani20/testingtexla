import React from 'react'
import EmergencyCard from '../../../sections/@dashboard/emergencyCard/emergencyCard'

const EmergencyScreen = () => {
  const dates= [
    {
      date: 12,
      day:"Mon",
      month: "Jan"
    },
    {
      date: 22,
      day:"Tue",
      month: "Apr"
    },
    {
      date: 16,
      day:"Wed",
      month: "Mar"
    },
    {
      date: 25,
      day:"Thu",
      month: "Feb"
    }
  ]
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '10px'}}>
    {
      dates.map((item)=>{
        return  <EmergencyCard date={item.date} day={item.day} month={item.month}/>
      })
    }
   
   </div>
  )
}

export default EmergencyScreen