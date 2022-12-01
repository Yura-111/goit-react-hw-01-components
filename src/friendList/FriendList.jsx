import PropTypes from 'prop-types';
import {FriendListBord} from 'friendList/FriendList.styled';
import {FriendListItem} from 'friendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <FriendListBord>
            {friends.map(({id, avatar, isOnline, name}) => (
            <FriendListItem
            key={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
            />
            ))}
        </FriendListBord>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    )
};


