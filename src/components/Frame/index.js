import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import {Layout,  Form, Icon, Input, Button, Card, message } from 'antd'
import { enquireScreen } from 'enquire-js';
import '../../Home/less/antMotionStyle.less';
import Nav from "../../Home/Nav3"
import Footer from '../../Home/Footer0';
import {
  Nav30DataSource,
  Footer00DataSource,
} from '../../Home/data.source';
import './index.css'
import { connect } from 'react-redux'


const { Content} = Layout

let isMobile;
  enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;



class Frame extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isMobile,
          show: !location.port,
          isAdmin : true,
          // isLogin : false
        };
      }

    componentDidMount() {
        enquireScreen((b) => {
          this.setState({ isMobile: !!b });
        });

        if (location.port) {
          setTimeout(() => {
          this.setState({
            show: true,
          });
        }, 500);
      }
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          // this.props.login(values)
          if(values.username === 'admin' && values.password === 'age50vaccine'){
            this.setState({
              isAdmin : true
            })
          }else{
            message.error("Please enter right username and password!")
          }
        }
      });
    };
    
    render() {
      // console.log(this.props.user)
      if(this.state.isAdmin){
        return (
          <Layout style={{minHeight:"100%"}}>
              <Nav
                id = "Nav3_0"
                key = "Nav3_0"
                dataSource = {Nav30DataSource}
                isMobile = {this.state.isMobile}
                // isLogin = {this.props.isLogin}
                nickname = {this.props.nickname}
              /> 
              <Layout>
                  <Content>                    
                      {this.props.children}
                  </Content>
              </Layout>
              <Footer
                id="Footer0_0"
                key="Footer0_0"
                dataSource={Footer00DataSource}
                isMobile={this.state.isMobile}
              />
          </Layout>
      )}else{
        const { getFieldDecorator } = this.props.form;
        return(
        <Card
        title = "Admin Login"
        className = "login-wrapper"
        >  
        <Form onSubmit={this.handleSubmit} className="login-form" >
            <Form.Item
                // wrapperCol= {wrapperColStyle}
            >
            {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                />,
            )}
            </Form.Item>
            <Form.Item
                // wrapperCol= {wrapperColStyle}
            >
            {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                />,
            )}
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
            </Button>
          </Form>
          </Card>
        )
      }
        
    }
}

const mapStateToProps = state => ({

  nickname: state.user.nickname,
  // user : state.user
})
export default connect(mapStateToProps)(withRouter(Form.create()(Frame)))