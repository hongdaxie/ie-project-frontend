import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu,Icon, Dropdown  } from 'antd';
import { getChildrenToRender } from './utils';
import { withRouter,Link } from "react-router-dom"
import { connect } from 'react-redux'
import { logout } from '../actions/user'

const { Item, SubMenu } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  onMenuClick = ({key}) =>{
    // console.log(key)
    this.props.history.push(key)
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  onDropdownMenuSelected = ({key}) =>{
    // console.log(key)
    if(key === "/login"){
      this.props.logout()
    }
    this.props.history.push(key)
}

  // This is equal to create a new react component
  renderMenu = () => (
    <Menu onClick={this.onDropdownMenuSelected} >
      <Menu.Item key="/Account">
            <Icon type="setting" />
            Manage My Acount
      </Menu.Item>
      <Menu.Item key="/login">
            <Icon type="logout" />
            Logout 
      </Menu.Item>
    </Menu>
  );

  render() {
    const { dataSource, isMobile, isLogin, nickname, ...props } = this.props;
    console.log(this.props)
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;
    const account = 
                    isLogin 
                    ?
                    <div className="my-notification" style={{float:"right"}}>
                      <Dropdown overlay={this.renderMenu} trigger={['click','hover']}>
                          <div style={{display:'flex', alignItems:'center', fontSize: "16px", fontWeight: "bold"}}>
                              {/* <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />  */}
                              <span>Welcome {nickname}! </span>
                                  <Icon type="down" />
                          </div>
                      </Dropdown>
                    </div>
                    :
                    <div style={{float:"right"}}>
                      <Menu
                        mode={isMobile ? 'inline' : 'horizontal'}
                        theme="light"
                        onClick={this.onMenuClick}
                      >
                        <Item key = "login" style={{fontWeight:"bold", fontSize:"16px"}}>
                          <a>Login</a>
                        </Item>
                      </Menu>
                    </div>

    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        return (
          <SubMenu
            key={item.name}
            {...itemProps}
            title={
              <div
                {...a}
                className={`header3-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header3-item-child"
          >
            {subItem.map(($item, ii) => {
              const { children: childItem } = $item;
              const child = childItem.href ? (
                <a {...childItem} >
                  {childItem.children.map(getChildrenToRender)}
                </a>
              ) : (
                <div {...childItem}>
                  {childItem.children.map(getChildrenToRender)}
                </div>
              );
              return (
                <Item key={$item.name || ii.toString()} {...$item}>
                  {child}
                </Item>
              );
            })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header3-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <Link to='./Home'><img width="100%" src={dataSource.logo.children} alt="img" /></Link>
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    x: 0,
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              // defaultSelectedKeys={['sub0']}
              theme="light"
              onClick={this.onMenuClick}
            >
              {navChildren}
              {account}
            </Menu>
            
          </TweenOne>
          
        </div>
        
      </TweenOne>
    );
  }
}

const mapStateToProps = state => ({
  isLogin : state.user.isLogin,
})

export default connect(mapStateToProps,{logout})(withRouter(Header));
