import React from 'react'
import arghya from './all-img/Arghya.jpg'
import shreyasi from './all-img/Shreyasi.jpg'
import saheli from './all-img/Saheli.jpg'
import alapan from './all-img/Alapan.jpg'
import kids from './all-img/Kids.jpg'
import cdf from './all-img/CookedFood.jpg'

export default function About() {
    return (
        <>
            <div className='about-page' style={{ width: "100%" }}>
                <div
                    style={{
                        margin: 0,
                        width: "100%",
                        padding: "0",
                        background: "black",
                        overflow: "hidden",
                        position: "relative",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <img
                        src={kids}
                        className="d-block w-100"
                        alt="..."
                        style={{ opacity: "0.4", objectFit: "cover", height: "100vh" }}
                    />
                    <div className="center-text">
                        “Cutting food waste is a delicious way of helping to feed the world
                        and protect the planet.”{" "}
                    </div>
                </div>
                <div className='feat'>
                    <hr className="featurette-divider" />
                    <div className="row featurette" style={{ width: "100%" }}>
                        <div className="col-md-7">
                            <h2 className="featurette-heading">Our Mission</h2>
                            <p className="lead">At Green Spoon, our mission is to combat hunger and improve the well-being of vulnerable individuals and communities. We firmly believe that access to nutritious food is a fundamental right that every person deserves. Guided by compassion and a commitment to social responsibility, we work tirelessly to alleviate food insecurity by sourcing and distributing quality food supplies to those in need. Our collaborative efforts aim not only to nourish bodies but also to foster a sense of hope and dignity among those facing difficult circumstances. Through partnerships, innovative solutions, and unwavering dedication, we strive to create a hunger-free world where every individual has the opportunity to thrive and lead a healthier, happier life.</p>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={cdf} alt="..."></img>
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    <div className="row featurette" style={{ width: "100%" }}>
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Our Vision</h2>
                            <p className="lead">Our vision at the Green Spoon is a world where no one goes to bed hungry and where communities flourish with resilience and empowerment. We aspire to be a driving force in eradicating food insecurity, setting an example for sustainable and equitable food distribution practices. By fostering a culture of compassion and inclusivity, we envision a society where individuals not only receive nourishment but also have access to educational resources, skill development, and opportunities that uplift them from the cycle of poverty. Through continuous innovation and collaborative partnerships, we aim to inspire positive change, creating a future where the basic right to nutritious food is realized for all, and where the potential of each person is unlocked, contributing to the betterment of our global community</p>
                        </div>
                        <div className="col-md-5 order-md-1">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={cdf} alt="..."></img>
                        </div>
                    </div>
                    <hr className="featurette-divider" />

                </div>
            </div>
            <div className="container marketing" style={{ width: "100%" }}>
                <div className="row">
                    <div className="col-lg-3">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={shreyasi} alt="..."></img>
                        <h3>Shreyasi Debnath</h3>
                        <div><ul className='about-links'>
                            <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/shreyasidebnath/" target="_blank" rel="noreferrer"> </a></li>
                            <li><a className="fa fa-github" href="https://github.com/ShreyasiDebnath" target="_blank" rel="noreferrer"> </a></li>
                        </ul></div>
                        <p >Hey there!, I am Shreyasi Debnath, a Full stack Web Developer.Love to create web application and design them . We can connect through Linkedin  .</p>

                    </div>
                    <div className="col-lg-3">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={arghya} alt="..." style={{ backgroundColor: "black" }}></img>
                        <h3 >Arghyadip Dhara</h3>
                        <div><ul className='about-links'>
                            <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/arghyadip-dhara-68a3b51b7/" target="_blank" rel="noreferrer"> </a></li>
                            <li><a className="fa fa-github" href="https://github.com/arghyadip700" target="_blank" rel="noreferrer"> </a></li>
                        </ul></div>
                        <p >Web Developer || Full Stack Developer || IT Undergrad'25 || Tech Enthusiast || Learner</p>

                    </div>
                    <div className="col-lg-3">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={alapan} alt="..."></img>
                        <h3>Alapan Das</h3>
                        <div>

                            <ul className='about-links'>
                                <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/alapandas3/" target="_blank" rel="noreferrer"> </a></li>
                                <li><a className="fa fa-github" href="https://github.com/AlapanDas" target="_blank" rel="noreferrer"> </a></li>
                            </ul>

                        </div>
                        <p >Hey, I am Alapan Das, aspiring Frontend and Machine-Learning Developer from India. We can connect through Linkedin and Twitter .
                        </p>

                    </div>
                    <div className="col-lg-3">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={saheli} alt="..."></img>
                        <h3>Saheli Pal</h3>
                        <div><ul className='about-links'>
                            <li><a className="fa fa-linkedin" href="https://www.linkedin.com/in/saheli-pal-0932671bb/" target="_blank" rel="noreferrer"> </a></li>
                            <li><a className="fa fa-github" href="https://github.com/sahelipal1" target="_blank" rel="noreferrer"> </a></li>
                        </ul></div>
                        <p >Web Developer || Tech Enthusiast || IT Undergrad'25 || Learner</p>

                    </div>
                </div>
            </div>
        </>
    )
}
