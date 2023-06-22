import { MdOutlineGroupAdd } from 'react-icons/md';
import PostDetails from '../PostDetails/PostDetails';

const AllPosts = () => {
    return (
        <div className='position-relative'>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                    <p className='fw-medium'>All Posts(32)</p>
                    <p>Article</p>
                    <p>Event</p>
                    <p>Education</p>
                    <p>Job</p>
                </div>
                <div className='d-flex gap-3'>
                    <select className="form-select w-50 fw-medium" aria-label="Disabled select example" disabled>
                        <option selected>Write a post</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button className="btn btn-primary d-flex p-2 align-content-center justify-content-center "> <span><MdOutlineGroupAdd></MdOutlineGroupAdd></span> <span className='ms-2'>Join Group</span></button>
                </div>
            </div>
            <hr className='border-black' />
            <hr className='position-absolute border-2 border-black' style={{ width: '90px' , top:'41.3px' }} />
            <PostDetails></PostDetails>
        </div>
    );
};

export default AllPosts;