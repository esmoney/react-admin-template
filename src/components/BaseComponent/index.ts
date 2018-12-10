import React from 'react';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { Dispatch } from 'redux';

export interface Props {
  dispatch: Dispatch<any>;
  form: WrappedFormUtils;
}

export class Component<P = {}, S = {}> extends React.Component<P & Props, S> {}

export class PureComponent<P = {}, S = {}> extends React.PureComponent<
  P & Props,
  S
> {}
