import AllPosts from "../../AllPosts/AllPosts";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="mb-5">
            <Banner></Banner>
            <div style={{ margin: '40px 180px 0px 180px' }} className="position-relative">
                <AllPosts></AllPosts>
            </div>
        </div>
    );
};

export default Home;