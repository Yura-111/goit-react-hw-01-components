import {FriendListBord} from 'friend_list/FriendList.styled';
import {FriendListItem} from 'friend_list/FriendListCard';

export const FriendList = ({list}) => {
    return (
        <FriendListBord>
            {list && list.map((item) => (
            <FriendListItem
            key={item.id}
            avatar={item.avatar}
            isOnline={item.isOnline}
            name={item.name}
            />
            ))}
        </FriendListBord>
    )
}


