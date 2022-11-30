import {FriendListBord} from 'friend_list/FriendList.styled';
import {FriendListItem} from 'friend_list/FriendListCard';

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
}


