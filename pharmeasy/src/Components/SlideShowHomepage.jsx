import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    "https://cms-contents.pharmeasy.in/banner/a2915b53111-Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/5aeebb1a134-Dweb2.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/b287e359a6f-Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/a16798e4a2f-Dweb.jpg?dim=1440x0&dpr=1&q=100",
    "https://cms-contents.pharmeasy.in/banner/a16798e4a2f-Dweb.jpg?dim=1440x0&dpr=1&q=100"
];


const Slideshow = () => {
    const [autoplay, setAutoplay] = useState(true);

    return (
        <>
            <div style={{ width: "100%", MaxHeight: "100%" }}>
                <Slide autoplay={autoplay}>
                    {slideImages.map((item) => (
                        <div className="each-slide" >
                            {/* <div style={{ 'backgroundImage': `url(${slideImages[0]})`, height: "355px" }}> */}
                            <div style={{ width: "100%", height: "auto" }}>
                                <img src={item} style={{ maxWidth: "100%", maxHeight: "100%" }} />
                            </div>
                        </div>
                    ))}

                </Slide>
            </div >
        </>
    )
};

export default Slideshow;