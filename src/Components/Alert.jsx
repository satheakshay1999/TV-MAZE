import React from 'react'

const Alert = ({type , message}) => {
  return (
    <div className={`alert alert-${type}`}>
        <i className='fa fa-info-circle' ></i>{message}
    </div>
  )
}

export default Alert