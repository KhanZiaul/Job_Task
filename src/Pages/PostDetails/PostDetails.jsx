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

const PostDetails = () => {
    return (
        <div style={{gap:'90px'}} className='d-flex justify-content-between'>
            <div>
                <div>
                    <img src={image1} alt="" />
                    <img src={article} alt="" />
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
                    <img style={{width:'15px',height:'15px'}} src={baseline} alt="" />
                    <p style={{color:'gray' , fontSize:'11px'}} className='ms-1'>Your location will help us serve better and extend a personalised experience</p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;