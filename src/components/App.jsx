import user from 'data/user.json';
import data from 'data/data.json';
import friends from "data/friends.json";
import transactions from "data/transactions.json";

import {Section, Container, Heading} from './Container.styled';
import {Profile} from 'profile/ProfileCard';
import {Statistics} from 'statistics/Statistics';
import {FriendList} from 'friendList/FriendList';
import {TransactionHistory} from 'transactions/Transactions'

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
        {<FriendList friends={friends} />}

        <Heading>
          Task 4
        </Heading>
        {<TransactionHistory items={transactions} />}
      </Container>
    </Section>
  );
};
