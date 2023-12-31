import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {
  const [uploadVideoServerResponse, setuploadVideoServerResponse] = useState({})
  return (
    <>
      <div className="container d-flex mt-5 mb-5 jutify-content-between align-item-center">
        <div className='add-video'>
          <Add setuploadVideoServerResponse={setuploadVideoServerResponse} />
        </div>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between">
        <div className='all-videos col-lg-9'>
          <h2>All Videos</h2>
          <View uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
        <div className="category col-lg-3">
          <Category />

        </div>

      </div>
    </>
  )
}

export default Home