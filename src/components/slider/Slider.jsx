import { useEffect, useState } from 'react'
import "../slider/slider.css"


const Slider = () => {

    const images = [
        {
            id: 0,
            name: "img1",
            url: "../../../public/logos/logo-javascript.png"
        },
        {
            id: 1,
            name: "img2",
            url: "../../../public/logos/html_logo.png"
        },
        {
            id: 2,
            name: "img3",
            url: "../../../public/logos/css-logo.png"
        },
        {
            id: 3,
            name: "img4",
            url: "../../../public/logos/react-logo.png"
        },
        {
            id: 4,
            name: "img5",
            url: "../../../public/logos/nodejs-logo.png"
        },
        {
            id: 5,
            name: "img6",
            url: "../../public/logos/github-logo.png"
        }
    ]


    const [sliderNumber, setSliderNumber] = useState(0);


    const handleRight = () => {
        if (sliderNumber >= 0 && sliderNumber < images.length) setSliderNumber(sliderNumber + 1)
        if (sliderNumber == images.length - 1) setSliderNumber(0)
    }

    const handleLeft = () => {
        if (sliderNumber <= images.length - 1 && sliderNumber > 0) setSliderNumber(sliderNumber - 1)
        if (sliderNumber == 0) setSliderNumber(images.length - 1)
    }


    useEffect(() => {
        const timeout = setTimeout(() => {
            
            setSliderNumber((prevSliderNumber) =>
                prevSliderNumber === images.length - 1 ? 0 : prevSliderNumber + 1
            );
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };

    }, [sliderNumber]);


    return (
        <div className='slider__container'>
            <div className="slider__outer">

                <i onClick={handleRight} className='slider__arrow bx bx-lg bxs-right-arrow-square'></i>

                <div className={`slider__inner`} style={{ transform: `translateX(calc(-${sliderNumber}/${images.length}*100%`, width: `${images.length}00%` }}>

                    {
                        images?.map(image => (

                            <div className="slider__img-container" key={image.id}>

                                <img
                                    className='slider__img'
                                    src={image.url}
                                    alt={image.name} 
                                    title={image.name} 
                                />
                            </div>
                        ))
                    }

                </div>

                <i onClick={handleLeft} className='slider__arrow bx bx-lg bxs-left-arrow-square '></i>

            </div>
        </div>
    )
}

export default Slider