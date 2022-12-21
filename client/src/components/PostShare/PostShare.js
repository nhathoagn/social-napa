import {useDispatch, useSelector} from "react-redux";
import React,{useRef, useState} from "react";
import {UilPlayCircle, UilScenery} from "@iconscout/react-unicons";
import './PostShare.css'

import {GLOBALTYPES} from "../../redux/actions/globalTypes";

import openModal from "../PostModal";
const PostShare = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const  loading = useSelector(state => state.homePosts.loading)
    const imageRef = useRef();
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div className="PostShare">
            <img
                src={
                    user.avatar
                        ?  user.avatar
                        : serverPublic + "defaultProfile.png"
                }
                alt="Profile"
            />
            <div>
                <input
                    type="text"
                    placeholder="What's happening?"
                    required
                   onClick={()=> dispatch({type: GLOBALTYPES.STATUS, payload:true})}
                />
                <div className="postOptions">
                    <div
                        className="option"
                        style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>

                    <div className="option" style={{ color: "var(--video)" }}  onClick={() => imageRef.current.click()}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <button
                        className="button ps-button"
                        // onClick={handleUpload}
                        // disabled={loading}
                    >
                        {loading ? "uploading" : "Share"}
                    </button>
                </div>

            </div>
        </div>
  )
}
export default PostShare