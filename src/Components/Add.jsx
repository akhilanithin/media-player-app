import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({ setuploadVideoServerResponse }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video, setvideo] = useState({
    id: "", caption: "", url: "", embedLink: ""
  })

  const getEmbedLink = (e) => {
    const { value } = e.target
    if (value) {
      const Link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setvideo({ ...video, embedLink: Link })
    }
    else {
      setvideo({ ...video, embedLink: "" })
    }
  }

  // console.log(video);

  const handleUpload = async () => {
    const { id, caption, url, embedLink } = video
    if (!id || !caption || !url || !embedLink) {
      toast.warning("Please Fill the Form Completely!!!")
    } else {

      // make api call Upload video
      const response = await uploadVideo(video)
      // console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success(`'${response.data.caption}' video uploaded sucessfully!!!`)
        // set server response
        setuploadVideoServerResponse(response.data)
        // reset Video
        setvideo({
          id: "", caption: "", url: "", embedLink: ""
        })

        // hide modal
        handleClose()
      } else {
        // console.log(response);
        toast.error("Cannot perform the operation now.Please try after some time....")
      }
    }
  }



  return (
    <>
      <div className='d-flex align-item-center'>
        <h5>Upload Video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-circle-plus"></i></button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Please Fill the Following Details!!!</p>
          <Form className='border brder-secondary rounded p-3'>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e) => setvideo({ ...video, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e) => setvideo({ ...video, caption: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Image URL" onChange={(e) => setvideo({ ...video, url: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={getEmbedLink} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored" />

    </>
  )
}

export default Add