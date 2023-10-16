import { useState } from 'react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllcategory, updateCategory } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'




function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("")

  const handleAddCategory = async () => {
    if (categoryName) {
      let body = {
        categoryName, allVideos: []
      }
      // make api call
      const response = await addCategory(body)
      if (response.status >= 200 && response.status < 300) {

        toast.success(`'${response.data.categoryName}'added sucessfully!!!`)
        // hide modal
        handleClose()
        // reset category
        setCategoryName("")

      } else {
        // console.log(response);
        toast.error("Cannot perform the operation now.Please try after some time....")
      }

    } else {
      toast.warning("Please Provide Category Name !!!")
    }
  }

  const [allcategories, setallcategories] = useState([])


  const getCategories = async () => {
    // make API call getAllvideos
    const { data } = await getAllcategory()
    setallcategories(data)
  }

  console.log(allcategories);

  useEffect(() => {
    getCategories()

  }, [])

  const handleDelete = async (id) => {
    await deleteCategory(id)
    getCategories()
  }


  const dragOver = (e) => {
    console.log("Video Drag over category");
    e.preventDefault()
  }
  const videoDrop = async (e, categoryId) => {
    console.log("video dropped inside category Id:", +categoryId);
    const videoId = e.dataTransfer.getData("VideoId")
    console.log("Video Card Id", videoId);
    // get video details
    const { data } = await getAVideo(videoId)
    console.log(data);
    // get category details 
    const selectCategory = allcategories?.find(item => item.id === categoryId)
    selectCategory.allVideos.push(data)
    console.log(selectCategory);

    // make api callto update category
    await updateCategory(categoryId, selectCategory)
    getCategories()

  }
  return (
    <>
      <div className="d-grid ">
        <div className='d-flex flex-column'> <Link to={'/watch-history'} className='fs-5 ' style={{ textDecoration: "none", color: "black" }}>Watch History</Link></div>
        <button onClick={handleShow} className=' btn btn-info'>Add category</button>
      </div>{
        allcategories.length > 0 ? allcategories?.map(item => (
          <div className='mt-3 ms-3 border rounded p-3' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item?.id)}>
            <div className='d-flex justify-content-between align-item-center'>
              <h6>{item?.categoryName}</h6>
              <button onClick={() => handleDelete(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Row>
              {
                item?.allVideos &&
                item?.allVideos.map(card => (
                  <Col sm={12}>
                    <Videocard displayData={card} insideCategory={true}/>
                  </Col>
                ))
              }
            </Row>




          </div>
        )) : <p className='fw-bolder fs-5 ms-3 mt-3 text-danger'>No Categories are added !!!</p>

      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <p> Please Fill the Following Details!!!</p> */}
          <Form className='border brder-secondary rounded p-3'>
            {/* <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Category ID" />
            </Form.Group> */}
            <Form.Group className="mb-3" controlId='FormBasicEmail'>
              <Form.Label>Enter Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored" />

    </>
  )
}

export default Category