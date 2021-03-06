import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import useInput from '../../hooks/useInput';

import { FiCheck } from 'react-icons/fi';
import { FiTrash } from 'react-icons/fi';

const Wrapper = styled.div`
  width: 90%;
  height: 50px;
  background-color: ${({ theme: { colors } }) => colors.color_primary};
  border-radius: 5px;
  padding: 0 2rem;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;

  ${({ done }) =>
    done &&
    css`
      height: 30px;
      background-color: transparent;
      color: ${({ theme: { colors } }) => colors.color_primary_dark};
      &::after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 60%;
        height: 2px;
        background-color: ${({ theme: { colors } }) => colors.color_primary};
      }
    `}
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-family: bold;
  margin-right: auto;
`;
const CheckBtn = styled.a`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1px solid ${({ theme: { colors } }) => colors.color_secondary};

  cursor: pointer;
`;

const Checked = styled(FiCheck)`
  font-size: 2rem;
  color: 1px solid ${({ theme: { colors } }) => colors.color_check};
`;

const Remover = styled(FiTrash)`
  font-size: 1.8rem;
  transition: all 0.3s ease;
  margin-left: 1rem;
  &:hover {
    color: tomato;
  }
`;

const UpdateInput = styled.input``;

export default function Item({
  id,
  title,
  isDone,
  onToggle,
  onRemoveTodo,
  onUpdateTodo,
}) {
  const [update, setUpdate] = useState(false);
  const [updateText, onChange] = useInput(title);

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onUpdateTodo(id, updateText);
      setUpdate(prev => !prev);
    }
  };
  return (
    <Wrapper done={isDone} onDoubleClick={() => setUpdate(prev => !prev)}>
      {update ? (
        <UpdateInput
          value={updateText}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      ) : (
        <Title>{title}</Title>
      )}

      {isDone ? (
        <Checked onClick={() => onToggle(id)} />
      ) : (
        <CheckBtn onClick={() => onToggle(id)} />
      )}
      <Remover onClick={() => onRemoveTodo(id)} />
    </Wrapper>
  );
}
