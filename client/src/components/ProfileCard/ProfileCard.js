import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './ProfileCard.css'
const ProfileCard = () => {
    const {user} = useSelector(state => state.auth)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const posts = useSelector(state => state.homePosts)
  return (
      <div className="ProfileCard">
          <div className="ProfileImages">
              <img src={
                  user.coverPicture
                      ? serverPublic + user.coverPicture
                      : serverPublic + "defaultCover.jpg"
              } alt="CoverImage" />
              <img
                  src={
                      user.profilePicture
                          ? serverPublic + user.profilePicture
                          : serverPublic + "defaultProfile.png"
                  }
                  alt="ProfileImage"
              />
          </div>
          <div className="ProfileName">
              <span>{user.firstname} {user.lastname}</span>
              <span>{user.worksAt? user.worksAt : 'Write about yourself'}</span>
          </div>

          <div className="followStatus">
              <hr />
              <div>
                  <div className="follow">
                      <span>{user.followers.length}</span>
                      <span>Followers</span>
                  </div>
                  <div className="vl"></div>
                  <div className="follow">
                      <span>{user.following.length}</span>
                      <span>Following</span>
                  </div>
                  {/* for profilepage */}
                {/*  {location === "profilePage" && (*/}
                {/*      <>*/}
                {/*          <div className="vl"></div>*/}
                {/*          <div className="follow">*/}
                {/*<span>{*/}
                {/*    posts.filter((post)=>post.userId === user._id).length*/}
                {/*}</span>*/}
                {/*              <span>Postssssss</span>*/}
                {/*          </div>{" "}*/}
                {/*      </>*/}
                {/*  )}*/}
              </div>
              <hr />
          </div>

        {/*  {location === "profilePage" ? (*/}
        {/*      ""*/}
        {/*  ) : (*/}
        {/*      <span>*/}
        {/*  <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>*/}
        {/*    My Profile*/}
        {/*  </Link>*/}
        {/*</span>*/}
        {/*  )}*/}
      </div>
  );
};

export default ProfileCard;