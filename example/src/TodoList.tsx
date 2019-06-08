// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved

import {css} from 'emotion';
import React, { useCallback } from 'react';
// import React, { useContext } from 'react';
// import { StoreContext } from './Store';
import {IState, useMappedState } from './Store';
import TodoItem from './TodoItem';

export default function TodoList() {
  const render = 'render';
  console.log(render);
  // const store = useContext(StoreContext);
  // const state = store && store.getState();

  // let todoCount = 0;
  // let lastUpdated = 0;
  // if (state) {

  //   lastUpdated = state.lastUpdated;
  //   var { todos } = state;
  //   todoCount = todos.length;
  // }

  const {lastUpdated, todoCount} = useMappedState(
    useCallback(
      (state: IState) => ({
        lastUpdated: state.lastUpdated,
        todoCount: state.todos.length,
      }),
      [],
    ),
  );
  return (
    <div>
      <div className={styles.count}>You have {todoCount} todos</div>
      <ul className={styles.todos}>
        {new Array(todoCount).fill(null).map((_, index) => (
          <TodoItem index={index} key={index} />
        ))}
      </ul>
      <div className={styles.lastUpdated}>
        Last updated: {lastUpdated ? new Date(lastUpdated).toString() : 'never'}
      </div>
    </div>
  );
}

const styles = {
  count: css`
    font-size: 12px;
  `,
  lastUpdated: css`
    color: #666;
    font-size: 10px;
  `,
  todos: css`
    padding-left: 0;
  `,
};
