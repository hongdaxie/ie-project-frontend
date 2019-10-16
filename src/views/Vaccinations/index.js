import React, { Component } from 'react'
import { Input, Col ,Row, Card, Icon, Spin, List,Tag, message, Modal, AutoComplete} from 'antd';
import { getHospitalsBySuburb, getSuburbList } from '../../requests'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarked} from '@fortawesome/free-solid-svg-icons'
import GoogleMap from './GoogleMap'
import './index.css'


const { Search } = Input;


export default class Vaccination extends Component {

    constructor(){
        super()
        this.state={
            isSearching: false,
            value: '',
            suburbList: []
        }
    }


    searchHandle = (value) => {
        this.setState({
            isSearching: true
        })  
        // console.log(value)
        if(value.trim().length>0){
            getHospitalsBySuburb(value)
            .then(resp => {
                const respData = resp.data
                respData.map( item => {
                    item.isMapVisible = false
                    return item
                })
                this.setState({
                    dataSource: respData
                })
                // console.log(this.state.dataSource)
            })
            .catch(err => {
            // deal with error
                message.error(err)
            })
            .finally(() => {
            this.setState({
                isSearching: false
                })
            })     
        }else{
            message.error("Please enter some words in input area!")
            this.setState({
                isSearching: false
                }) 
        }
        
    }

    searchSuggestion = () => {
        getSuburbList()
            .then(resp => {
                let respData = resp.data
                // console.log(respData)
                respData = respData.map((item) => {
                    return item.trim()
                })
                this.setState({
                    suburbList : respData
                })
            })
            .catch(err => {
            // deal with error
                message.error(err)
            })
            .finally(() => {
                // console.log()
            })     
    }

    componentDidMount(){
        this.searchSuggestion()
        getHospitalsBySuburb("KINGSTON")
            .then(resp => {
                const respData = resp.data
                respData.map( item => {
                    item.isMapVisible = false
                    return item
                })
                this.setState({
                    dataSource: respData
                })
                // console.log(this.state.dataSource)
            })
        
    }


    handleMapClick = (i) => {
        const newDataSource = this.state.dataSource
        newDataSource[i].isMapVisible = true
        this.setState({
            dataSource: newDataSource
        })
        // console.log(this.state.dataSource)
    }

    handleModalOk = (i) => {
        const newDataSource = this.state.dataSource
        newDataSource[i].isMapVisible = false
        this.setState({
            dataSource: newDataSource
        })
        // console.log(this.state.dataSource)
    }

    handleModalCancel = (i) => {
        const newDataSource = this.state.dataSource
        newDataSource[i].isMapVisible = false
        this.setState({
            dataSource: newDataSource
        })
    }

    render() {
        return (
            <Spin spinning= {this.state.isSearching}>
            <div>
                
                <Col lg={{span:12, offset:6}} md = {{span: 22, offset:1}} >
                    <Card
                        bordered = {false}
                        style = {{marginTop:'8px'}}
                        title = "Find a clinic or hospital!"
                    >
                    <Row >
                    <AutoComplete 
                        style={{width:"100%"}}
                        size="large"
                        defaultValue="KINGSTON"
                        dataSource={this.state.suburbList}
                        filterOption={(inputValue, option) =>
                            option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                          }
                        // onSearch={this.searchHandle} 
                        // onSelect={this.searchHandle}
                    >
                    <Search 
                        prefix={<Icon type="search" />}
                        placeholder="input region name (like kingston, monash)" 
                        size="large"
                        onSearch={this.searchHandle} 
                        // defaultValue= "KINGSTON"
                        enterButton  = "Search"
                    />
                    </AutoComplete>
                    {/* <div style={{align:'left', border:'1px solid #A5ACB2'}}>aaaaa</div>  */}
                    </Row> 

                    </Card>  
                </Col>

                <Col span={12} offset={6} style={{marginTop:'16px'}}>
                <List
                    grid={{column: 1}}
                    dataSource = {this.state.dataSource}
                    renderItem = {
                        (item,i) => (
                            <List.Item>
                                <Card 
                                    hoverable
                                    onClick={this.handleMapClick.bind(this, i)}
                                >
                                <Row gutter={16}>
                                <Col
                                    span = {6}
                                >
                                    <Card
                                        cover={<img src={item.image}  alt={item.name} style={{overflow:"hidden"}} />}
                                        bordered = {false}
                                    >
                                    </Card>
                                </Col>
                                 <Col
                                    span = {14}
                                >
                                    <p style={{marginBottom:'8px', fontSize:'16px', fontWeight:'bold'}}>
                                    {item.name} 
                                    </p>
                                    <p>
                                        <Tag color={item.type === "PRIVATE"?"#87d068":"#108ee9"}>{item.type}</Tag>
                                    </p>
                                    <p style={{marginTop:'8px'}}>
                                        {item.streetNumber} {item.roadName} {item.roadType}, {item.suburb} {item.postcode}, {item.state}
                                    </p>
                                </Col>
                                <Col
                                    span = {4}
                                >
                                    <div className={"mapIcon"} ><FontAwesomeIcon  icon={faMapMarked}  /> Map </div>
                                </Col>
                                </Row>
                                </Card>
                                <Modal
                                    visible={this.state.dataSource[i].isMapVisible}
                                    title={item.name}
                                    onOk={this.handleModalOk.bind(this, i)}
                                    onCancel={this.handleModalCancel.bind(this, i)}
                                    footer={null}
                                >
                                    <GoogleMap item = {item} />
                                </Modal>
                            </List.Item>
                        )
                    }
                >
                </List>
                </Col>
                
            </div>
            </Spin>
        )
    }
}
