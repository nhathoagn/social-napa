import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";
import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import {useSelector} from "react-redux";

const FollowersModal = ({ modalOpened, setModalOpened}) => {
    const theme = useMantineTheme();
    const { suggestions } = useSelector(state => state)
    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={modalOpened}
            onClose={() =>
                setModalOpened(false)

            }
        >


            <div className="suggestions">
                {
                    suggestions.users.map( (user,index) => {

                            return  <UserCard key={user._id} user={user} >
                                <FollowBtn user={user} />
                            </UserCard>

                    })
                }
            </div>



        </Modal>
    );
};

export default FollowersModal;
