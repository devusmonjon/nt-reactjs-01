import React from "react";
import "./experience.css"
import experienceImage from "../../assetes/Mask Group (1).png"
function Experience() {
    return (
        <div className="container">
            <div className="years__wrapper">

                <div className="years__content">
                    <b className="years__b">20</b>
                    <p className="years__p">Years Of Successful
                        Working
                        The Market</p>
                    <button className="years__more">Read More</button>
                </div>
                <div className="years__img">
                    <img src={experienceImage} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Experience;