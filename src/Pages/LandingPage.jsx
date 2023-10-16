import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

const navigateByURL=useNavigate()


  return (
    <>
      <Row className="mt-5 mb-5 align-item-center justify-content-between w-100">
        <Col></Col>
        <Col lg={4}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Media players provide most or all of the following features. They allow users to organize their multimedia collection, play songs and movies, rip CD tracks to MP3 and other audio formats, burn CDs, listen to Internet radio, download content from online music stores and stream content from the Internet.</p>
          <button onClick={()=>navigateByURL('/home')} className='mt-4 btn btn-info'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col></Col>

        <Col lg={5}>
          <img src="https://static.wixstatic.com/media/4a5235_a5050a2f3611422c9ba50c9bf10c76a7~mv2.gif" alt="landing" className='img-fluid' />

        </Col>
      </Row>
      <div className="container mt-5 mb-5 d-flex align-item -center justify-content-center flex-column">
        <h3>Features</h3>
        <div className="cards mt-5 mb-5 d-flex align-item -center justify-content-between w-100">
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://content.presentermedia.com/files/animsp/00014000/14495/three_simple_gears_turning_lg_wm.gif" width={'300px'} height={'300px'} />
            <Card.Body>
              <Card.Title>Managing Video</Card.Title>
              <Card.Text>
                Managing the Media Player. Admins can control the navigation and display of CLM presentations for end users using the following functionalities:.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://cliply.co/wp-content/uploads/2021/09/142109580_MUSIC_TONES_400px.gif" width={'300px'} height={'300px'} />
            <Card.Body>
              <Card.Title>Managing Video</Card.Title>
              <Card.Text>
                Managing the Media Player. Admins can control the navigation and display of CLM presentations for end users using the following functionalities:.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='p-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" src="https://img1.picmix.com/output/stamp/normal/8/3/5/3/463538_d4bd6.gif" width={'300px'} height={'300px'} />
            <Card.Body>
              <Card.Title>Managing Video</Card.Title>
              <Card.Text>
                Managing the Media Player. Admins can control the navigation and display of CLM presentations for end users using the following functionalities:.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container border rounded p-5 border-secondary  b-5 mt-5 d-flex align-item-center justify-content-between w-100 mb-5">
        <div className="col-lg-5">
          <h3 className='mb-5 text-warning'>Simple,fast and Powerful</h3>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Media players</span>provide most or all of the following features.</h6>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Category videoss</span>provide most or all of the following features.</h6>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managin History</span>provide most or all of the following features.</h6>
        </div>
        <div className="video col-lg-6">
          <iframe width="100%" height="350" src="https://www.youtube.com/embed/87JIOAX3njM" title="What Jhumka? | Rocky Aur Rani Kii Prem Kahaani | Ranveer | Alia | Pritam | Amitabh | Arijit | Jonita" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>

  )
}

export default LandingPage
