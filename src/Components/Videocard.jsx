import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteAvideo } from '../services/allAPI';


function Videocard({ displayData, setdeleteVideoStatus, insideCategory }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // make api call http://localhost:4000/history
    const { caption, embedLink } = displayData
    let today = new Date()
    let timestamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(today)
    let videoDeails = {
      caption, embedLink, timestamp
    }
    await addToHistory(videoDeails)
  }

  // deleting a video

  const removeVideo = async (id) => {
    // make a api call
    await deleteAvideo(id)
    setdeleteVideoStatus(true)
  }


  const dragStarted = (e, id) => {
    console.log('Drag Started...Video Id:' + id);
    e.dataTransfer.setData("VideoId", id)
  }
  return (

    <>
      <Card className='mb-3' draggable onDragStart={(e) => dragStarted(e, displayData?.id)}>
        <Card.Img onClick={handleShow} height={'180px'} variant="top" src={displayData?.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-item-center'>
            <h6>{displayData?.caption}</h6>
           {insideCategory?"":<button onClick={() => removeVideo(displayData?.id)} className='btn' ><i className='fa-solid fa-trash text-danger'></i></button>}
          </Card.Title>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={"100%"} height="350" src={`${displayData?.embedLink}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title={displayData?.caption}></iframe>
        </Modal.Body>
      </Modal>

    </>

  )
}

export default Videocard