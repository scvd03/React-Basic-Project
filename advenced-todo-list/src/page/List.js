import React, { useState } from 'react';
import styled from 'styled-components';

import BackButton from '../components/List/BackButton';
import More from '../components/List/More';
import Item from '../components/List/Item';
import CreateBtn from '../components/List/CreateBtn';
import Creator from '../components/List/Creator';

const Layout = styled.div`
  position: relative;
  width: 320px;
  height: 530px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.color_primary_light2};

  overflow: hidden;
`;
const Header = styled.header`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;
const Body = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export default function List() {
  const [popup, setPopup] = useState(false);
  return (
    <Layout>
      <Header>
        <BackButton />
        <More />
      </Header>
      <Body></Body>
      <CreateBtn onClick={() => setPopup(true)} />
      <Creator show={popup} close={() => setPopup(false)} />
    </Layout>
  );
}
