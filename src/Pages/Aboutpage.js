import React from 'react'

const Aboutpage = () => {
  return (
    <div className='about_container'>
      <h3>About Page</h3>
      <div className="about__info">
        <p>Tv Show Search App (v1.0)</p>
        <div>
          <p>Things learnt from app build:</p>
          <ul className='list_items'>
            <li>React (create-react-app)</li>
            <li>Basic CSS & HTML</li>
            <li>Axios AJAX Request</li>
            <li>TVMAZE API (https://www.tvmaze.com/api)</li>
            <li>React Router</li>
            <li>React Context API</li>
            <li>Deploying to Netlify</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage