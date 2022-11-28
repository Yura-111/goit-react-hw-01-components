import {ProfileBox, 
  DescriptionBox,
  AvatarImg,
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
      <DescriptionUser>{username}</DescriptionUser>
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
}