import React, { Component, createRef } from 'react'
import {Layout,Col, Row, Card, Radio, Form, Button, Modal, Checkbox } from 'antd'
import { enquireScreen } from 'enquire-js';
import Questionaire from './Questionaire'
// import echarts from "echarts"
const {Content} = Layout




let isMobile;
  enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

class Vaccination extends Component {

    constructor(props) {
        super(props);
        this.fluAmountChart = createRef()
        this.state = {
          isMobile,
          show: !location.port,
          radioValue: 1,
          radioValue1: 1,
          vaccineAdviceVisible: false,
          suggestion: "",
          checkedValue: [],
          answerVisible: false,
          answer:"",
        };
      }

      onChange = e => {
        this.setState({
            radioValue: e.target.value,
        });
      };

      onChange1 = e => {
        this.setState({
            radioValue1: e.target.value,
        });
      }

      onCheckboxChange = e => {
        // console.log(e)
        this.setState({
            checkedValue: e
        })
      }

    handleSubmit = ()=>{
        // console.log(this.state.radioValue)
        // console.log(this.state.radioValue1)
        if(this.state.radioValue === 2 && this.state.radioValue1 === 2){
            this.setState({
                vaccineAdviceVisible: true,
                suggestion: "Please go to clinic to get a flu vaccine!"
            })
        }else{
            this.setState({
                vaccineAdviceVisible: true,
                suggestion: "You do not need flu vaccine in this year."
            })
        } 
    }  


    handleSubmit1 = e => {
        e.preventDefault()
        // console.log(this.state.checkedValue)
        // console.log()
        if((this.state.checkedValue.includes("A"))&&(this.state.checkedValue.includes("B"))
        &&(this.state.checkedValue.includes("C"))&&(this.state.checkedValue.includes("D"))&& 
        this.state.checkedValue.length === 4){
            this.setState({
                answerVisible: true,
                // answer: "Your answer is correct!"
                answer: "yes"
            })
        }else{
            this.setState({
                answerVisible: true,
                answer: "no"
            })
        }
    }

    
      handleOk = e => {
        // console.log(e);
        this.setState({
            vaccineAdviceVisible: false,
        });
      };

      handleOk1 = e => {
        // console.log(e);
        this.setState({
            answerVisible: false,
        });
      };
    
      handleCancel = e => {
        // console.log(e);
        this.setState({
            vaccineAdviceVisible: false,
        });
      };

      handleCancel1 = e => {
        // console.log(e);
        this.setState({
            answerVisible: false,
        });
      };

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

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 24 },
          };
            return (
                <>
                <Layout>
                    <Layout style={{ padding: '8px' }}>
                        <Content style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}>
                        <div>
                            <Row gutter={16}>
                                <div >
                                    <Col md={24} lg={12}>
                                    <Card 
                                        title="Do I need to have flu vaccination now?" 
                                    >
                                    <div>
                                    <Form {...formItemLayout} >
                                        <Form.Item>
                                            When was the last time you received the vaccinations for influenza/flu?<br />
                                            <Radio.Group onChange={this.onChange} value={this.state.radioValue}>
                                                <Radio value={1}>Less than 3 months</Radio><br/>
                                                <Radio value={2}>More than 3 months</Radio>
                                                {/** not sure */}
                                            </Radio.Group>
                                            <br />
                                            Did you get the vaccine in April this year?<br />
                                            <Radio.Group onChange={this.onChange1} value={this.state.radioValue1}>
                                                <Radio value={1}>Yes</Radio>
                                                <Radio value={2}>No</Radio><br/>
                                            </Radio.Group>
                                        </Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
                                            Submit
                                        </Button>
                                    </Form>
                                    </div>
                                    </Card>
                                    <Modal
                                        title="Suggestion"
                                        visible={this.state.vaccineAdviceVisible}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}
                                    >
                                        <p>{this.state.suggestion}</p>
                                    </Modal>
                                    </Col>
                                    <Col md={24} lg={12}>
                                    <Card 
                                        title="Which category do you believe is most prone to Influenza/Flu?" 
                                    >
                                        <Form {...formItemLayout} >
                                            <Form.Item>
                                            {getFieldDecorator('checkbox-group', {
                                                initialValue: [],
                                            })(
                                                <Checkbox.Group style={{ width: '100%' }} onChange={this.onCheckboxChange}>
                                                <Row>
                                                    <Col>
                                                    You can choose more than one option. <br /><br />
                                                    </Col>
                                                    <Col span={24}>
                                                    <Checkbox value="A">
                                                    Those with chronic respiratory conditions
                                                    </Checkbox>
                                                    </Col>
                                                    <br /><br />
                                                    <Col span={24}>
                                                    <Checkbox value="B">
                                                    Pregnant women (especially 2nd and 3rd trimester)
                                                    </Checkbox>
                                                    </Col>
                                                    <br /><br />
                                                    <Col span={24}>
                                                    <Checkbox value="C">
                                                    Aboriginal and Torres Strait Islander people
                                                    </Checkbox>
                                                    </Col>
                                                    <br /><br />
                                                    <Col span={24}>
                                                    <Checkbox value="D">
                                                    People aged 65 years or older
                                                    </Checkbox>
                                                    </Col>
                                                    <br /><br />
                                                    <Col span={24}>
                                                    <Checkbox value="E">
                                                    Young adults
                                                    </Checkbox>
                                                    </Col>
                                                </Row>
                                                </Checkbox.Group>,
                                            )}
                                            </Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit1}>
                                            Submit
                                        </Button>
                                        </Form>
                                    </Card>
                                    <Modal
                                        title="Answer"
                                        visible={this.state.answerVisible}
                                        onOk={this.handleOk1}
                                        onCancel={this.handleCancel1}
                                    >
                                        
                                        {this.state.answer === "yes" 
                                        ? 
                                        <p style={{color:"green"}}>Your answer is correct!</p>
                                        :
                                        <div>
                                        <p style={{color: "red"}} >Sorry, your answer is not correct.</p>
                                        <p><b>The correct answer is:</b></p>
                                        <p>1.Those with chronic respiratory conditions</p>
                                        <p>2.Pregnant women (especially 2nd and 3rd trimester</p>
                                        <p>3.Aboriginal and Torres Strait Islander people</p>
                                        <p>4.People aged 65 years or older</p>
                                        </div>
                                        }
                                    </Modal>
                                    </Col>
                                </div>
                                <div>
                                {/* <Col md={12} lg={24}>
                                <Card 
                                    // title="Recent flu cases" 
                                    bordered={true}  
                                >
                                    <div ref={this.fluAmountChart} style={{height:'350px'}}/>
                                </Card>
                                </Col> */}
                            </div>
                            </Row>
                            
                            
                        </div>          
                            
                            
                        </Content>
                    </Layout>

                    <Row>
                    <Card style={{margin:'8px'}}>
                    <Questionaire />
                    </Card>
                    </Row>
                </Layout>
                </>
            )
        // }
        
    }
}


export default Form.create()(Vaccination)