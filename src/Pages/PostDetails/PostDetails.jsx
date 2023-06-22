import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import baseline from '../../assets/images/baseline-error_outline-24px.png'
import article from '../../assets/images/✍️ Article.png'
import education from '../../assets/images/🔬️ Education.png'
import meetup from '../../assets/images/🗓️ Meetup.png'
import job from '../../assets/images/💼️ Job.png'
import { GrLocation } from 'react-icons/gr';
import { MdModeEdit } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiShoppingBagLine } from "react-icons/ri";
import dots from '../../assets/images/dots.png'
import one from '../../assets/images/1.png'
import two from '../../assets/images/2.png'
import three from '../../assets/images/3.png'
import four from '../../assets/images/4.png'
import share from '../../assets/images/share.png'
import './PostDetails.css'

const PostDetails = () => {
    return (
        <div style={{ gap: '90px' }} className='d-flex justify-content-between align-content-center'>
            <div>
                <div className='border mb-3'>
                    <img src={image1} alt="" />
                    <img className='mt-3 ms-3' src={article} alt="" />
                    <div className='d-flex mx-3 mt-3'>
                        <h5 className='fw-bold'>What if famous brands had regular fonts?Meet RegulaBrands!</h5>
                        <div>
                            <img style={{ height: '7px' }} src={dots} alt="" />
                        </div>
                    </div>
                    <p style={{ color: 'gray' }} className='mx-3 mt-2 fs-5'>I&apos;ve worked in UX for the better part of a decade.From nw on, I plan to rei...</p>

                    <div className='d-flex justify-content-between align-items-center mx-3 mb-3'>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <img src={one} alt="" />
                            <h6 className='fw-bold'>Sarthak Kamra</h6>
                        </div>
                        <div className='d-flex align-items-center gap-5'>
                            <div>
                                <AiOutlineEye></AiOutlineEye>
                                <span className='ms-2'>1.4k views</span>
                            </div>
                            <img className='px-3 py-2' style={{ height: '34px', backgroundColor: '#e5e5e5', borderRadius: '4px' }} src={share} alt="" />
                        </div>
                    </div>
                </div>

                <div className='border mb-3'>
                    <img src={image2} alt="" />
                    <img className='mt-3 ms-3' src={education} alt="" />
                    <div className='d-flex mx-3 mt-3'>
                        <h5 className='fw-bold'>Tax Benefits for Investment under National Pension Scheme launched by Government</h5>
                        <div>
                            <img style={{ height: '7px' }} src={dots} alt="" />
                        </div>
                    </div>
                    <p style={{ color: 'gray' }} className='mx-3 mt-2 fs-5'>I&apos;ve worked in UX for the better part of a decade.From nw on, I plan to rei...</p>

                    <div className='d-flex justify-content-between align-items-center mx-3 mb-3'>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <img src={two} alt="" />
                            <h6 className='fw-bold'>Sarah West</h6>
                        </div>
                        <div className='d-flex align-items-center gap-5'>
                            <div>
                                <AiOutlineEye></AiOutlineEye>
                                <span className='ms-2'>1.4k views</span>
                            </div>
                            <img className='px-3 py-2' style={{ height: '34px', backgroundColor: '#e5e5e5', borderRadius: '4px' }} src={share} alt="" />
                        </div>
                    </div>
                </div>

                <div className='border mb-3'>
                    <img src={image3} alt="" />
                    <img className='mt-3 ms-3' src={meetup} alt="" />
                    <div className='d-flex justify-content-between mx-3 mt-3'>
                        <h5 className='fw-bold'>Finance & Investment Elite Social Mixer@Lujiazui</h5>
                        <div>
                            <img style={{ height: '7px' }} src={dots} alt="" />
                        </div>
                    </div>

                    <div className='d-flex mt-1 mb-3 mx-3 gap-5'>
                        <div className='d-flex align-items-center gap-1 '>
                            <RiCalendarEventFill className='d-block' style={{ height: '20px' }}></RiCalendarEventFill>
                            <span className='fw-medium'>Fri, 12 Oct, 2018</span>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <div className=''>
                                <GrLocation className='d-block' style={{ height: '20px' }}></GrLocation>
                            </div>
                            <span className='fw-medium'>Ahmedabad, India</span>
                        </div>
                    </div>

                    <div className='d-grid gap-2 mx-3'>
                        <button className="btn btn-outline-secondary  mb-3 text-danger btn-hover fw-semibold" type="button">Visit Website</button>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mb-3'>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <img src={three} alt="" />
                            <h6 className='fw-bold'>Ronal Jones</h6>
                        </div>
                        <div className='d-flex align-items-center gap-5'>
                            <div>
                                <AiOutlineEye></AiOutlineEye>
                                <span className='ms-2'>1.4k views</span>
                            </div>
                            <img className='px-3 py-2' style={{ height: '34px', backgroundColor: '#e5e5e5', borderRadius: '4px' }} src={share} alt="" />
                        </div>
                    </div>
                </div>


                <div className='border mb-3'>
                    <img className='mt-3 ms-3' src={job} alt="" />
                    <div className='d-flex justify-content-between mx-3 mt-3'>
                        <h5 className='fw-bold'>Software Developer</h5>
                        <div>
                            <img style={{ height: '7px' }} src={dots} alt="" />
                        </div>
                    </div>

                    <div className='d-flex mt-1 mb-3 mx-3 gap-5'>
                        <div className='d-flex align-items-center gap-1 '>
                            <RiShoppingBagLine className='d-block' style={{ height: '20px' }}></RiShoppingBagLine>
                            <span className='fw-medium'>Innovaccer Analytics Private Ltd.</span>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <div className=''>
                                <GrLocation className='d-block' style={{ height: '20px' }}></GrLocation>
                            </div>
                            <span className='fw-medium'>Noida, India</span>
                        </div>
                    </div>

                    <div className='d-grid gap-2 mx-3'>
                        <button className="btn btn-outline-secondary  mb-3 text-success btn-hover fw-semibold" type="button">
                            Apply on Timesjobs
                        </button>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mx-3 mb-3'>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <img src={four} alt="" />
                            <h6 className='fw-bold'>Joseph Gray</h6>
                        </div>
                        <div className='d-flex align-items-center gap-5'>
                            <div>
                                <AiOutlineEye></AiOutlineEye>
                                <span className='ms-2'>1.4k views</span>
                            </div>
                            <img className='px-3 py-2' style={{ height: '34px', backgroundColor: '#e5e5e5', borderRadius: '4px' }} src={share} alt="" />
                        </div>
                    </div>
                </div>

            </div>





            <div style={{ marginTop: '50px' }}>
                <div className="mb-3 row position-relative">
                    <div className="col-sm-10">
                        <input type="text" defaultValue='Nodia, India' className=" border-start-0 border-top-0 border-end-0 ps-4 pb-1 w-full" id="inputPassword" />
                        <GrLocation style={{ top: '6px', left: '12px' }} className='position-absolute'></GrLocation>
                        <MdModeEdit style={{ top: '6px', right: '10px' }} className='position-absolute'></MdModeEdit>
                    </div>
                </div>
                <div className='d-flex align-content-center mt-4'>
                    <img style={{ width: '15px', height: '15px' }} src={baseline} alt="" />
                    <p style={{ color: 'gray', fontSize: '11px' }} className='ms-1'>Your location will help us serve better and extend a personalised experience</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;