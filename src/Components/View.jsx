import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getAllVideos } from '../services/allAPI'



function View({ uploadVideoServerResponse }) {
  
  const [deleteVideoStatus, setdeleteVideoStatus] = useState(false)


  const [allVideos, setallVideos] = useState([])


  const getAllUploadedVideos = async () => {
    // make API call getAllvideos
    const { data } = await getAllVideos()
    setallVideos(data)
  }

  useEffect(() => {
    getAllUploadedVideos()
    setdeleteVideoStatus(false)
  }, [uploadVideoServerResponse, deleteVideoStatus])

  // console.log(allVideos);
  return (
    <>
      <Row>
        {allVideos.length > 0 ? allVideos.map(video => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Videocard displayData={video} setdeleteVideoStatus={setdeleteVideoStatus} />
          </Col>
        ))
          :
          <p className='fw-bolder fs-5 text-danger'>Nothing to Display!!!</p>

        }

      </Row>
    </>
  )
}

export default View