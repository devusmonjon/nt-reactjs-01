import "./Services.css"
import servicesImage from "../../assetes/sr.png"
import servicesImage2 from "../../assetes/ere.png"
import servicesImage3 from "../../assetes/sd.png"
function Services() {
    return (
        <div className="container">
            <div className="services__text">
                <span className="services__tag">WHAT WE DO</span>
                <h1 className="services__title">Our Service</h1>
            </div>
            <div className="service__wrapper">
                <div className="service__item">
                    <div className="servics__img">
                    <img className="image" src={servicesImage} alt="" />
                    </div>
                    <div className="service__content">
                        <p className="service__info">Interior Design</p>
                        <p className="service__desc">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.</p>
                    </div>
                </div>
                <div className="service__item active">
                    <div className="servics__img">
                    <img className="image" src={servicesImage2} alt="" />
                    </div>
                    <div className="service__content">
                        <p className="service__info">Interior Design</p>
                        <p className="service__desc">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.</p>
                    </div>
                </div>
                <div className="service__item">
                    <div className="servics__img">
                    <img className="image" src={servicesImage3} alt="" />
                    </div>
                    <div className="service__content">
                        <b className="service__info">Interior Design</b>
                        <p className="service__desc">Lorem ipsum dolor amet consectetur
                            adipiscing elit sed eiusmod tempor
                            incididunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services