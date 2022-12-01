import PropTypes from 'prop-types';
import {FriendItem, FriendListSpan, AvatarImg, FriendListName} from 'components/friendListItem/FriendListItems.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
    <FriendItem>
        <FriendListSpan isOnline={isOnline}></FriendListSpan>
        <AvatarImg src={avatar} alt={name} width="48" />
        <FriendListName>{name}</FriendListName>
    </FriendItem>
);
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}