import React, { Component } from 'react'
import {Layout, Row, Col, Card,Typography, Radio, Button, message} from 'antd'
// import Teams1 from '../../Home/Teams1';
// import {  Teams10DataSource } from '../../Home/data.source';
import Quiz1 from './Quiz1'
import Quiz2 from './Quiz2'
import Quiz3 from './Quiz3'
import Quiz4 from './Quiz4'
import Quiz5 from './Quiz5'
import Result from './Result'


const { Title } = Typography;
const Quizs = [Quiz1, Quiz2, Quiz3, Quiz4, Quiz5]

export default class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {
            current: 1,
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
        }
    }

    handleChange = radio => e => {
        console.log(e.target.value)
        this.setState({
            [radio]: e.target.value,
        });
      };


    next= (i) => {
        if(i === ""){
            message.error("Please select one answer!")
        }else{
            const current = this.state.current + 1;
            this.setState({ current });
        } 
    }

    previous = () => {
        const current = this.state.current - 1;
        this.setState({current})
    }

    render() {
        console.log(this.state.answer1)
        const {current, answer1, answer2,answer3,answer4,answer5} = this.state
        const values = {answer1, answer2,answer3,answer4,answer5}
        switch (current) {
            case 1:
                return (
                    <Layout>
                        <Row style={{margin:'20px'}}>
                            <Col span={22} offset={1}>
                                <div style={{textAlign:'center'}}>
                                <Title>Test your Knowledge</Title>
                                </div>
                                <Card title={"Question"+` ${current}`}>
                                <Quiz1
                                    handleChange = {this.handleChange}
                                    values = {values}
                                /> 
                                <br/><br/>
                                {current < 4 && (
                                    <Button type="primary" onClick={() => this.next(this.state.answer1)}>
                                    Next
                                    </Button>
                                )}
                                {current === 4 && (
                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                    </Button>
                                )}
                                </Card>
                            </Col>
                        </Row>
                    </Layout>
                )
                break;
        
            case 2:
                return (
                    <Layout>
                        <Row style={{margin:'20px'}}>
                            <Col span={20} offset={2}>
                                <div style={{textAlign:'center'}}>
                                <Title>Test your Knowledge</Title>
                                </div>
                                <Card title={"Question"+` ${current}`}>
                                <Quiz2
                                handleChange = {this.handleChange}
                                values = {values}
                                /> 
                                <br/><br/>
                                <Button type="primary" onClick={() => this.previous()} style={{marginRight:'20px'}}>
                                    Previous
                                </Button>
                                <Button type="primary" onClick={() => this.next(this.state.answer2)}>
                                Next
                                </Button>

                                </Card>
                            </Col>
                        </Row>
                    </Layout>
                )
                break;

            case 3:
                return (
                    <Layout>
                        <Row style={{margin:'20px'}}>
                            <Col span={20} offset={2}>
                                <div style={{textAlign:'center'}}>
                                <Title>Test your Knowledge</Title>
                                </div>
                                <Card title={"Question"+` ${current}`}>
                                <Quiz3
                                handleChange = {this.handleChange}
                                values = {values}
                                /> 
                                <br/><br/>
                                <Button type="primary" onClick={() => this.previous()} style={{marginRight:'20px'}}>
                                    Previous
                                </Button>
                                <Button type="primary" onClick={() => this.next(this.state.answer3)}>
                                Next
                                </Button>
                                </Card>
                            </Col>
                        </Row>
                    </Layout>
                )
                break;

            case 4:
                return (
                    <Layout>
                        <Row style={{margin:'20px'}}>
                            <Col span={20} offset={2}>
                                <div style={{textAlign:'center'}}>
                                <Title>Test your Knowledge</Title>
                                </div>
                                <Card title={"Question"+` ${current}`}>
                                <Quiz4
                                handleChange = {this.handleChange}
                                values = {values}
                                /> 
                                <br/><br/>
                                <Button type="primary" onClick={() => this.previous()} style={{marginRight:'20px'}}>
                                    Previous
                                </Button>
                                <Button type="primary" onClick={() => this.next(this.state.answer4)}>
                                Next
                                </Button>
                                </Card>
                            </Col>
                        </Row>
                    </Layout>
                )
                break;

            case 5:
                return (
                    <Layout>
                        <Row style={{margin:'20px'}}>
                            <Col span={22} offset={2}>
                                <div style={{textAlign:'center'}}>
                                <Title>Test your Knowledge</Title>
                                </div>
                                <Card title={"Question"+` ${current}`}>
                                <Quiz5
                                handleChange = {this.handleChange}
                                values = {values}
                                /> 
                                <br/><br/>
                                <Button type="primary" onClick={() => this.previous()} style={{marginRight:'20px'}}>
                                    Previous
                                </Button>
                                <Button type="primary" onClick={() => this.next(this.state.answer5)}>
                                    Done
                                </Button>
                                </Card>
                            </Col>
                        </Row>
                    </Layout>
                )
                break;
            default:
                return (
                    <Layout>
                        <Row style={{margin:'20px'}}>
                            <Col span={20} offset={2}>
                                <div style={{textAlign:'center'}}>
                                <Title>Test your Knowledge</Title>
                                </div>
                                <Card title={"Your result is:"}>
                                <Result
                                    values = {values}
                                /> 
                                <br/><br/>
                                </Card>
                            </Col>
                        </Row>
                    </Layout>
                ) 
                break;
        }
        
    }
}
