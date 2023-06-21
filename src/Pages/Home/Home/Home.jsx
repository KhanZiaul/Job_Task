import AllPosts from "../../AllPosts/AllPosts";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="mb-5">
            <Banner></Banner>
            <div style={{ margin: '40px 200px 0px 200px' }}>
                <AllPosts></AllPosts>
                <hr />
            </div>
        </div>
    );
};

export default Home;