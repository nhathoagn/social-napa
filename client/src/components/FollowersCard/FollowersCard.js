import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAPI } from "../../utils/fetchData";
import RightSideBar from "../home/RightSideBar";
import UserCard from "../UserCard";
import { getSuggestions } from "../../redux/actions/suggestionsAction";
import LoadIcon from "../../images/loading.gif";
import FollowBtn from "../FollowBtn";
import "./FollowersCard.css";

import FollowersModal from "../FollowersModal/FollowersModal";
import {AiOutlineReload} from "react-icons/ai";
const FollowersCard = ({ location }) => {
  const { auth, suggestions } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="FollowersCard">
      <div className="head-FollowersCard flex">
          <h3>
              People you may know{" "}
          </h3>
          <div className="reload-follower mt-9 ml-12">
              {!suggestions.loading && (
                  <AiOutlineReload
                      onClick={() => dispatch(getSuggestions(auth.token))}
                  />
              )}
          </div>
      </div>

      {suggestions.loading ? (
        <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" />
      ) : (
        <div className="suggestions">
          {suggestions.users.map((user, index) => {
            if (index < 3) {
              return (
                <UserCard key={user._id} user={user}>
                  <FollowBtn user={user} />
                </UserCard>
              );
            }
          })}
        </div>
      )}
      {!location ? (
        <span
          onClick={() => {
            setModalOpened(true);
          }}
        >
          Show more
        </span>
      ) : (
        ""
      )}
      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  );
};

export default FollowersCard;
