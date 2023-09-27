import React from 'react'
import SliderImgOne from './../assets/img/png/sliderone.png'
import SliderImgtwo from './../assets/img/png/slidertwo.png'
import SliderImgthree from './../assets/img/png/sliderthree.png'
import SliderImgfour from './../assets/img/png/sliderfour.png'
const StrackSlider = () => {
    window.onload = () => {
        let sliderImagesBox = document.querySelectorAll('.cards-box');
        sliderImagesBox.forEach(el => {
            let imageNodes = el.querySelectorAll('.card:not(.hide)')
            let arrIndexes = []; // Index array
            (() => {
                // The loop that added values to the arrIndexes array for the first time
                let start = 0;
                while (imageNodes.length > start) {
                    arrIndexes.push(start++);
                }
            })();

            let setIndex = (arr) => {
                for (let i = 0; i < imageNodes.length; i++) {
                    imageNodes[i].dataset.slide = arr[i] // Set indexes
                }
            }
            el.addEventListener('click', () => {
                arrIndexes.unshift(arrIndexes.pop());
                setIndex(arrIndexes)
            })
            setIndex(arrIndexes) // The first indexes addition
        });
    };


    return (
        <>
            <section className='relative'>
                <div className='container pt-5  relative pb-[500px]'>
                    <div className='flex flex-row flex-wrap pt-0 justify-center lg:items-start items-center pb-5 md:pb-[100]'>
                        <div className=' lg:w-6/12 mt-lg-0 mt-lg-0 pt-lg-0 mt-5 pt-5 og' data-aos="fade-down">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StrackSlider