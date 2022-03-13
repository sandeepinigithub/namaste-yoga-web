import React from 'react'
import './HomeComponent.styles.scss'
import top_art from '../../assets/images/top-art.svg'
import banner_img from '../../assets/images/banner_img/banner_img.png'
import icon from '../../assets/images/icon/icon.png'
import app_store_icon from  '../../assets/images/app-store.svg'
import play_store_icon from '../../assets/images/play-store.svg'

export default function HomeComponent() {
    return (
        <div className='wrapper'>
            <img className='img-fluid' src={top_art} alt="top_art" />
            <div className='wrapper__banner position-absolute w-100 h-100' >
                <div className='container mx'>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-4'>
                            <div className="container d-flex mt-5 p-0">
                                <img className='img-icon me-3' src={icon} alt="icon" />
                                <span className='d-flex align-items-end fs-2 fw-bold'>Namaste-Yoga</span>
                            </div>
                            <div>
                                <p className='mt-3'>An initiative by Ministry of Ayush, Government of India to Promote Yoga to all beneficieries (public,trainers, centers) and events all around the globe.</p>
                                <p>
                                    <span className='d-inline-block fw-bold'>App available on</span>
                                </p>
                                <p>
                                    <button className='btn btn-primary p-2 me-3 custom-btn-width'>
                                       <img className='' src={play_store_icon} alt="app_store_icon" />
                                        play store
                                    </button>
                                    <button className='btn btn-primary p-2 custom-btn-width'>
                                       <img className='' src={app_store_icon} alt="app_store_icon" />
                                        app store
                                    </button>
                                </p>
                            </div>
                        </div>
                        <div className='col-4'><img className='img-fluid' src={banner_img} alt="banner_img" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
