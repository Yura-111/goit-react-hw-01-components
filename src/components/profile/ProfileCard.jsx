import PropTypes from 'prop-types';
import {ProfileBox, 
  DescriptionBox,
  AvatarImg,
  DescriptionUserName,
  DescriptionUser,
  StatsUser,
  UserBox,
  ProfileLabel,
  ProfiQuantity} from './ProfileCard.styled'

export const Profile = ({
username,
tag,
location,
avatar,
stats: 
{followers,
views,
likes,}
}) => {
    return (<ProfileBox>
    <DescriptionBox>
      <AvatarImg
        src={avatar}
        alt="User avatar"
      />
      <DescriptionUserName>{username}</DescriptionUserName>
      <DescriptionUser>{tag}</DescriptionUser>
      <DescriptionUser>{location}</DescriptionUser>
      
    <StatsUser>
      <UserBox>
        <ProfileLabel>Followers</ProfileLabel>
        <ProfiQuantity>{followers}</ProfiQuantity>
      </UserBox>
      <UserBox>
        <ProfileLabel>Views</ProfileLabel>
        <ProfiQuantity>{views}</ProfiQuantity>
      </UserBox>
      <UserBox>
        <ProfileLabel>Likes</ProfileLabel>
        <ProfiQuantity>{likes}</ProfiQuantity>
      </UserBox>
    </StatsUser>
    </DescriptionBox>
  </ProfileBox>)
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(
      {followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
}