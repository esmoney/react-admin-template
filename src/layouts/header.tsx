import React from 'react';
import router from 'umi/router';
import { Layout, message } from 'antd';
import { connect } from 'dva';
import { formatMessage } from 'umi-plugin-react/locale';
import GlobalHeader from '@/components/global-header';
import { ConnectProps } from '@/models/connect';
import './header.less';

export interface IHeaderViewProps extends Required<ConnectProps>{
  isMobile?: boolean;
  autoHideHeader?: boolean;
}

interface IState {
  visible: boolean;
}

const { Header } = Layout;

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class HeaderView extends React.Component<IHeaderViewProps, IState> {
  handleMenuClick = (key) => {
    const { dispatch } = this.props;

    // 跳转到个人中心
    if (key === 'account-center') {
      router.push('/account/center');
      return;
    }

  };

  render() {
    return (
      <Header style={{ padding: 0 }}>
        <GlobalHeader
          onMenuClick={this.handleMenuClick}
          {...this.props}
        />
      </Header>
    )
  }
}

export default HeaderView;
