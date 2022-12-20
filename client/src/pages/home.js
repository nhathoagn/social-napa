import ProfileSide from "../components/ProfileSide/ProfileSide";
import PostSide from "../components/PostSide/PostSide";

const Home = () => {
    return(
        <div className="Home">
        <ProfileSide/>
            <PostSide/>
        </div>
    )
}
export default Home