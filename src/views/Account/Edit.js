import React, { Component } from 'react'
import { getGrandparentById, updateGrandparent } from '../../requests'
import { Form, Input, Tooltip, Icon, Col, Button, Card, message, Spin, DatePicker,Select } from 'antd'
import { withRouter } from 'react-router-dom'
import moment from 'moment';

const { Option } = Select;
const { MonthPicker } = DatePicker
class Edit extends Component {
    constructor(){
        super()
        this.state= {
            isLoading: false,
            isUpdating: false
        }
    }

    getItemData = ()=>{
        this.setState({
            isLoading: true
        })
        getGrandparentById(this.props.match.params.id)
            .then(resp => {
                if(resp.data){
                    // console.log(resp.data)
                    // console.log(this.props.form)
                    this.props.form.setFieldsValue({
                        email: resp.data.email,
                        name: resp.data.name,
                        relationship: resp.data.relationship,
                        lastVaccineDate: moment(resp.data.lastVaccineDate, "YYYY-MM-DD"),
                        phoneNumber : resp.data.phoneNumber
                        // receiveNotification: resp.data.receiveNotification
                    })
                }
            })
            .finally(()=>{
                this.setState({
                    isLoading: false
                })
            })
    }

    handleSubmit = (e) =>{
        // console.log(e)
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                const currentYear = new Date().getFullYear()
                if(values["lastVaccineDate"].year() < currentYear){
                    values["nextVaccineDate"] = moment().format('YYYY-MM-DD')
                }else{
                    values["nextVaccineDate"] = `${currentYear+1}-04-01`
                }
                // console.log(values["nextVaccineDate"])
                const date = values['lastVaccineDate'].format("YYYY-MM-01")
                values["lastVaccineDate"] = date
                this.setState({
                    isUpdating: true
                })
                const user = {id: this.props.location.state.userid}
                values.userid = user
                values.id = this.props.match.params.id
                const newGrandparentInfo = JSON.stringify(values)
                updateGrandparent(newGrandparentInfo)
                    .then(resp => {
                        if(resp.data){
                            message.success("You have updated successfully!")
                            this.props.history.push({
                                pathname: `/account`,
                            })
                        }else{
                            message.error("Failed to update!")
                        }
                    })
                    .finally(()=>{
                        this.setState({
                            isUpdating: false
                        })
                    })
            }
        })
    }

    validateToPhoneNumber = (rule, value, callback) => {
        const phonePattern = /^04\d{8}$/
        console.log("111")
        if(!phonePattern.test(value)){
            console.log("222")
            callback('You should input legal phone number! Such as: 0413174686 ');
        }else{
            console.log("333")
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

    componentDidMount(){
        this.getItemData()
    }

    render() {
        // console.log(this.props.match.params.id)
        // console.log(this.props.location.state.userid)
        // console.log(this.props)
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
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

        return (
            <div>
                <Col lg={{span:12, offset:6}} md = {{span: 22, offset:1}} style={{marginTop:"24px", marginBottom:"24px"}}>
                <Card 
                    style={{maxWidth: "500px", margin: "auto"}}
                >
                    <div style={{textAlign:"center", fontWeight:"bold", fontSize: "24px", marginBottom:"20px"}}>Update your grandparent information</div>
                    <Spin spinning={this.state.isLoading}>
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
                    })(<Input disabled = {this.state.isUpdating} />)}
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
                    })(<Input disabled = {this.state.isUpdating}/>)}
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
                            { required: true, message: 'Please input relationship!', whitespace: true },
                            { validator: this.validateLength},
                            { validator: this.validateName},
                    ],
                    })(<Input disabled = {this.state.isUpdating}/>)}
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
                        })(<Input addonBefore={prefixSelector} placeholder="eg.0431374686" style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" loading={this.state.isUpdating}>
                        Update
                    </Button>
                    </Form.Item>
                </Form>
                </Spin>
                </Card>
            </Col>
            </div>
        )
    }
}

export default Form.create({ name: 'editGrandparent' })(withRouter(Edit)) 