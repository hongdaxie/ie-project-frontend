import React, { Component } from 'react'
import { Form, Icon, Input, Button, Col, Card, Checkbox } from 'antd';
import './index.css'
import {connect} from 'react-redux'
import { login } from '../../actions/user'
import { Redirect } from 'react-router-dom'



class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log(userInfo)
        this.props.login(values)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        this.props.isLogin
        ?
        <Redirect to="./Account"/>
        :
        <Col lg={{span:12, offset:6}} md = {{span: 22, offset:1}} style={{marginTop:"24px", marginBottom:"24px"}} >
        <div style={{width:'60%',textAlign: 'center', margin: '0% auto',height: '30%',fontSize: 18,display: 'flex',marginTop: '5%', justifyContent: 'center', alignItems: 'center', }}>Our Vaccination management and notification system would assist you in organizing and keeping track of the vaccination schedule of your loved ones</div>
        <Card id="components-form-demo-normal-login" style= {{maxWidth: "500px", margin: "auto"}}>
            
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('email', {
                    rules: [{
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    { 
                      required: true, 
                      message: 'Please input your Email!' 
                    }],
                })(
                    <Input
                    disabled = {this.props.isLoading}
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    disabled = {this.props.isLoading}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <Button loading={this.props.isLoading} type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="./register">register now!</a>
                </Form.Item>
            </Form>
        </Card>
        </Col>
    );
  }
}

const mapStateToProps = state => ({
  isLogin: state.user.isLogin,
  isLoading: state.user.isLoading
})

export default connect(mapStateToProps, {login})(Form.create({ name: 'normal_login' })(Login));

