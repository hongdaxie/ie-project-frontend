import React, { Component } from 'react'
import { Form, Input, Tooltip, Icon, Col, Button, Card, message, DatePicker, Select } from 'antd'
import { addNewGrandparent } from '../../requests'
import { withRouter } from 'react-router-dom'
import * as moment from 'moment'


const { Option } = Select;
const { MonthPicker } = DatePicker
class AddNew extends Component {
    constructor(){
        super()
        this.state= {
            isLoading: false
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            // console.log(values["lastVaccineDate"].year())
            const currentYear = new Date().getFullYear()
            if(values["lastVaccineDate"].year() < currentYear){
                values["nextVaccineDate"] = moment().format('YYYY-MM-DD')
            }else{
                values["nextVaccineDate"] = `${currentYear+1}-04-01`
            }
            // console.log(values["nextVaccineDate"])
            const date = values['lastVaccineDate'].format("YYYY-MM-01")
            values["lastVaccineDate"] = date
            console.log('Received values of form: ', values)
            // values.receiveNotification = values.receiveNotification? values.receiveNotification : false
            const user =  {id: this.props.match.params.id}
            values.userid = user
            const parentInfo =  JSON.stringify(values)
            this.setState({
                isLoading: true
            })
            addNewGrandparent(parentInfo)
                .then(resp=>{
                    // console.log(resp)
                    if(resp.data){
                        message.success("You have added successfully!")
                        this.props.history.push({
                            pathname: `/account`,
                        })
                    }else{
                        message.error("Failed to add!")
                    }
                })
                .finally(()=>{
                    this.setState({
                        isLoading: false
                    })
                })
            }
        });
    };
    
    validateToPhoneNumber = (rule, value, callback) => {
        const phonePattern = /^04\d{8}$/
        // console.log("111")
        if(!phonePattern.test(value)){
            // console.log("222")
            callback('You should input legal phone number! Such as: 0413174686 ');
        }else{
            // console.log("333")
            callback()
        }
    }

    validateName = (rule, value, callback) => {
        const namePattern = /^[A-Za-z\s]+$/
        // console.log("111")
        if(!namePattern.test(value)){
          callback('You should input legal name!');
        }else{
          callback()
        }
      }
    
    validateLength = (rule, value, callback) => {
        if(value.length> 20){
            callback("The length of the name should no more than 20.")
        }else{
            callback()
        }
    }

    render() {
        // console.log(moment().format('YYYY-MM-DD'))
        // console.log(this.props.match.params.id)
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '61',
          })(
            <Select style={{ width: 70 }}>
              <Option value="61">+61</Option>
            </Select>,
          )
        
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
            };
        const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
            },
        };

        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        return (
            <div>
                <Col lg={{span:12, offset:6}} md = {{span: 22, offset:1}} style={{marginTop:"24px", marginBottom:"24px"}}>
                <Card 
                    style={{maxWidth: "500px", margin: "auto"}}
                >
                    <div style={{textAlign:"center", fontWeight:"bold", fontSize: "24px", marginBottom:"20px"}}>Add new</div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} >
                    <Form.Item label="E-mail" >
                    {getFieldDecorator('email', {
                        rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ],
                    })(<Input disabled = {this.state.isLoading} />)}
                    </Form.Item>
                    <Form.Item
                    label='name'
                    >
                    {getFieldDecorator('name', {
                        rules: [
                            { required: true, message: 'Please input name!', whitespace: true },
                            { validator: this.validateName},
                            { validator: this.validateLength}
                        ],
                    })(<Input disabled = {this.state.isLoading}/>)}
                    </Form.Item>
                    <Form.Item
                    label={
                        <span>
                        Relationship&nbsp;
                        <Tooltip title="What`s the relationship with he/she?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    }
                    >
                    {getFieldDecorator('relationship', {
                        rules: [
                            {required: true, message: 'Please input relationship!', whitespace: true },
                            { validator: this.validateLength},
                            { validator: this.validateName},
                    ],
                    })(<Input disabled = {this.state.isLoading}/>)}
                    </Form.Item>
                    <Form.Item 
                        label={
                            <span>
                            Vaccine record&nbsp;
                            <Tooltip title="When was the last tiem that the person took the flu shot?">
                            <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        }
                    >
                        {getFieldDecorator('lastVaccineDate', config)(<MonthPicker />)}
                    </Form.Item>
                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phoneNumber', {
                        rules: [{ required: true, message: 'Please input your phone number!' }, { validator: this.validateToPhoneNumber }],
                        })(<Input addonBefore={prefixSelector} placeholder="e.g.0431374686" style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.state.isLoading}>
                        Add
                    </Button>
                    </Form.Item>
                </Form>
                </Card>
            </Col>
            </div>
        )
    }
}

export default Form.create({ name: 'newGrandparent' })(withRouter(AddNew))