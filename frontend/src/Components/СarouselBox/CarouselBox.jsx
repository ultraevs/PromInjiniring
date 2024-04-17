import React from 'react'

import Carousel from "react-bootstrap/Carousel"
import mvm from "../../assets/images/mvm.png";
import mvm_1 from "../../assets/images/mvm_1.jpg"
import mvm_2 from "../../assets/images/mvm_2.jpg"
import mvm_3 from "../../assets/images/mvm_3.jpg"
import mvm_4 from "../../assets/images/mvm_4.jpg"
import mvm_5 from "../../assets/images/mvm_5.jpg"
import mvm_6 from "../../assets/images/mvm_6.jpg"
import mvm_7 from "../../assets/images/mvm_7.jpg"
import mvm_8 from "../../assets/images/mvm_8.jpg"
import mvm_9 from "../../assets/images/mvm_9.jpg"
import mvm_10 from "../../assets/images/mvm_10.jpg"
import mvm_11 from "../../assets/images/mvm_11.jpg"
import mvm_12 from "../../assets/images/mvm_12.jpg"
import mvm_13 from "../../assets/images/mvm_13.jpg"
import mvm_14 from "../../assets/images/mvm_14.jpg"



import './CarouselBox.css'

const CarouselBox = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    src={mvm_1}
                    alt="Метровагонмаш"
                />
                <Carousel.Caption>
                    <h2>Метровагонмаш</h2>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    src={mvm_4}
                    alt="Метровагонмаш"

                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    src={mvm_10}
                    alt="Метровагонмаш"

                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

    );
}

export default CarouselBox;