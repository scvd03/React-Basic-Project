import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Layout = styled.div`
  position: absolute;
  right: 20%;
  padding: 8rem;
`;

export default function List({ posts }) {
  return (
    <Layout>
      {posts.map(post => (
        <Item key={post.id} id={post.id} title={post.title} desc={post.body} />
      ))}
    </Layout>
  );
}