// import {Container} from './Container.styled';
// import {Heading} from './Heading.styled';
import user from 'data/user.json';
import { Profile } from 'profile/ProfileCard';

export const App = () => {
  return (
    <section>
      <div style={{
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto',
}}>
        <h2 style={{
  fontSize: 22,
  fontWeight: 700,
  color: "dark",
  marginBottom: 50,
  textAlign: "center",
}}>
          Task 1
        </h2>
        {<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>}
        

        <h2 style={{
  fontSize: 22,
  fontWeight: 700,
  color: "dark",
  marginBottom: 50,
  textAlign: "center",
}}>
          Task 2
        </h2>
        {/* <Statistics title='Main Statistics' stats={data} /> */}

        <h2 style={{
  fontSize: 22,
  fontWeight: 700,
  color: "dark",
  marginBottom: 50,
  textAlign: "center",
}}>
          Task 3
        </h2>
        {/* <ForbesList list={forbes} /> */}

        <h2 style={{
  fontSize: 22,
  fontWeight: 700,
  color: "dark",
  marginBottom: 50,
  textAlign: "center",
}}>
          Task 4
        </h2>
        {/* <CryptoHistory /> */}
      </div>
    </section>
  );
};
