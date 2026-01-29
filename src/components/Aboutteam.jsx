import React from 'react'

function Aboutteam() {
  return (
    <>
      <section className="team-section py-5">
        <div className="container">

          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="fw-bold">Meet Our Team</h2>
              <p className="text-muted">The people behind our success</p>
            </div>
          </div>

          <div className="row justify-content-center">

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                  className="card-img-top"
                  alt="Rahul Sharma"
                />
                <div className="card-body">
                  <h5 className="card-title">Rahul Sharma</h5>
                  <p className="text-muted mb-0">Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                  className="card-img-top"
                  alt="Anjali Verma"
                />
                <div className="card-body">
                  <h5 className="card-title">Anjali Verma</h5>
                  <p className="text-muted mb-0">UI/UX Designer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                  className="card-img-top"
                  alt="Aman Gupta"
                />
                <div className="card-body">
                  <h5 className="card-title">Aman Gupta</h5>
                  <p className="text-muted mb-0">Backend Developer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card text-center h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                  className="card-img-top"
                  alt="Priya Singh"
                />
                <div className="card-body">
                  <h5 className="card-title">Priya Singh</h5>
                  <p className="text-muted mb-0">Project Manager</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Aboutteam