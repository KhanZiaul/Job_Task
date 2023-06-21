import bagImage from '../../../assets/images/bgImage.jpg'

const Banner = () => {
    return (
        <div className='position-relative'>
            <img style={{ height: '500px' }} className='w-100' src={bagImage} alt="" />
            <div style={{bottom:'107px' , left:'200px'}} className='position-absolute text-light'>
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Banner;