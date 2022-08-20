import React, { ReactElement } from 'react';

export enum Status {
  LOADING = 'LOADING',
  FAILURE = 'FAILURE',
  SUCCESS = 'SUCCESS',
}

const WrapperMapStatus = (props: { status: Status }): ReactElement => {
  const { status } = props;

  if (status === Status.FAILURE) return <h4>{status} ...</h4>;
  else return <h4>loading....</h4>;
};

export default WrapperMapStatus;
