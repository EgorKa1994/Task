import React from 'react';
import { ShowList } from './Dumb/HistoryDumb';
import { History } from './Smart/HistorySmart';

export const HistoryWrap = () => {
  return (
    <History>
      {({ history, isLoading, error }) => {
        if (isLoading) {
          return '...Loading...';
        }

        if (error) {
          return `Error: ${error.message}`;
        }

        return (
          <>
            <ShowList history={history} />
          </>
        );
      }}
    </History>
  );
};
