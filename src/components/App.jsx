import {Section, Container, Heading} from './Container.styled';
// import {Heading} from './Heading.styled';
import user from 'data/user.json';
import data from 'data/data.json';
import { Profile } from 'profile/ProfileCard';
import {Statistics} from 'statistics/Statistics'

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading>
          Task 1
        </Heading>
        {<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>}
        

        <Heading>
          Task 2
        </Heading>
        {<Statistics title="Upload stats" stats={data} />}

        <Heading>
          Task 3
        </Heading>
        {/* <ForbesList list={forbes} /> */}

        <Heading>
          Task 4
        </Heading>
        {/* <CryptoHistory /> */}
      </Container>
    </Section>
  );
};
