import React from 'react';
import defaultpic from '../images/profile.png'

const About = () => {
    return (
        <>
        <div className="container emp-profile">
        <form >
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <figure>
                  <img
                    src={defaultpic}
                    alt="defaultpic"
                    id="defaultpic"
                  />
                </figure>
              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>Name</h5>
                <h6>Web Developer</h6>
                <br/>
                <br/>

                <h3>About</h3>
                <hr />
              </div>
            </div>
            <div className="col-md-2">
            <input type="submit" className="profile-edit-btn" value="Edit profile" name="btnAddmore" />
            </div>
          </div>

          {/* left side url */}
          <div className="row mt-auto">
            <div className="col-md-4">
              
            </div>

            {/* right side data toggle */}
            <div className="col-md-8 mt-auto pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade active show"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Name</h5>
                    </div>
                    <div className="col-md-6">
                      <p>Ashish</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h5>Work</h5>
                    </div>
                    <div className="col-md-6">
                      <p>Sde</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h5>Email</h5>
                    </div>
                    <div className="col-md-6">
                      <p>Email</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h5>Phone</h5>
                    </div>
                    <div className="col-md-6">
                      <p>Phone</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <h5>Profession</h5>
                    </div>
                    <div className="col-md-6">
                      <p>Work</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>

        </>
    )
}

export default About
