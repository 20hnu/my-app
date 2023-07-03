import React from 'react'
import './services.css'

const Services = () => {
  const Services = [{
    id: 1,
    service: 'one',
    content: 'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id: 2,
    service: 'two',
    content: 'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id: 3,
    service: 'three',
    content: 'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id: 4,
    service: 'four',
    content: 'lorem ipsum dolor sit amet, consectetur adip'
  },
  {
    id: 5,
    service: 'five',
    content: 'lorem ipsum dolor sit amet, consectetur adip'
  }]
  return (
    <div className="services">
      <h1 className='service_text '><u>Our Services:</u></h1>
      {Services.map(({ id, service, content }) => (
        <div key={id} className="row featurette text_long">
      <hr className="featurette-divider"></hr>
      <div className={ id % 2 === 0 ?"col-md-7 order-md-2":"col-md-7"} id="align">
        <h2 className="featurette-heading fw-normal lh-1"> {service}<span className="text-body-secondary">It’ll blow your mind.</span></h2>
        <p className="lead">{content}</p>
      </div>
      <div className="col-md-5">
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
      </div>
    </div>
  ))
};
    </div >
  )
}

export default Services
