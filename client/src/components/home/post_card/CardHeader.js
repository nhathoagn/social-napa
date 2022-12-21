import React from 'react'
import Avatar from '../../Avatar'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { GLOBALTYPES } from '../../../redux/actions/globalTypes'
import { deletePost } from '../../../redux/actions/postAction'
import { BASE_URL } from '../../../utils/config'
import {Dropdown} from "flowbite-react";
import {AiOutlineEllipsis} from "react-icons/ai";

const CardHeader = ({post}) => {
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()

    const history = useHistory()

    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: {...post, onEdit: true}})
    }

    const handleDeletePost = () => {
        if(window.confirm("Are you sure want to delete this post?")){
            dispatch(deletePost({post, auth, socket}))
            return history.push("/")
        }
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${BASE_URL}/post/${post._id}`)
    }

    return (
        <div className="card_header">
            <div className="flex">
                <Avatar src={post.user.avatar} size="big-avatar" />

                <div className="card_name">
                    <h6 className="m-0">
                        <Link to={`/profile/${post.user._id}`} className="text-dark">
                            {post.user.username}
                        </Link>
                    </h6>
                    <small className="text-muted">
                        {moment(post.createdAt).fromNow()}
                    </small>
                </div>
            </div>

            <div className="nav-item dropdown">
                <Dropdown   arrowIcon={false} inline={true} label={ <AiOutlineEllipsis/>}>

                        {auth.user._id === post.user._id && (
                            <>
                                <Dropdown.Item>
                                    <div className="dropdown-item" onClick={handleEditPost}>
                                        <span className="material-icons">create</span> Edit Post
                                    </div>
                                </Dropdown.Item>
                               <Dropdown.Item>
                                   <div className="dropdown-item" onClick={handleDeletePost}>
                                       <span className="material-icons">delete_outline</span> Remove
                                       Post
                                   </div>
                               </Dropdown.Item>
                            </>
                        )}

                    <Dropdown.Item>
                        <span className="material-icons">content_copy</span> Copy Link
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    )
}

export default CardHeader
