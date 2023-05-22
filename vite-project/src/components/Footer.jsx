import React from 'react'
import '../components/Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div>


                            <div className="footer-day-time">
                                <div className="row">
                                    <div className="col-md-8">
                                        <ul>
                                            <li>Opening Hours: Mon - Friday: 8AM - 5PM</li>

                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="words">

                                    <h4>About us</h4>
                                    <p>The Digital Academy is dedicated to developing cutting-edge <br />
                                        digital products in Africa.
                                        Our mission is to provide chances for <br />
                                        adolescents through incentive-based learning with
                                        strategic <br />
                                        corporate partners who share a similar vision. We were founded <br />
                                        in response to
                                        the irritating lack of digital skills on the continent.</p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <p className="copyrights">Copyright © 2023, Team B
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer