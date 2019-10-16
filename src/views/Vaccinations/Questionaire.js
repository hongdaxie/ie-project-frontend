import React, { Component } from 'react'
import {Form, Input,Icon, Radio, Button, InputNumber} from 'antd'


class QuestionaireForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: 0,
            gender: "male"
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

      onGenderChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          gender: e.target.value,
        });
      };

      validateAge = (rule, value, callback) => {
          const age = value 
          if(age<0 || age > 150){
              callback("Please input legal age!")
              
          }
          callback()
      }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="Questionaire">
                <Form.Item>
                {getFieldDecorator('age', {
                    rules: [
                        {required: true, message: 'Please input your age!' },
                        {validator : this.validateAge}
                    ],
                })(
                    <InputNumber
                    placeholder="age"
                    />
                )}
                </Form.Item>
                <Form.Item>
                    <Radio.Group onChange={this.onGenderChange} value={this.state.gender}>
                        <Radio value={"male"}>Male</Radio>
                        <Radio value={"female"}>Female</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('Region', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    placeholder="Region"
                    />,
                )}
                </Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Check
                </Button>
            </Form>
        )
    }
}

export default Form.create({ name: 'Questionaire' })(QuestionaireForm);
