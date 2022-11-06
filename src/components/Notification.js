import React from 'react'

const Notification = ({shownotification}) => {
  return (
    <div className={`notification-container ${shownotification ? 'show' : ''}`}>
        <p>You have already entered this letter</p>
    </div>
  )
}

export default Notification