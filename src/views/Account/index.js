import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { Tag, Col, Card, Icon, Layout, List, Modal, Typography, message, Button } from 'antd'
import { getAllGrandparentsById , deleteGrandparentById, sendNotificationById} from '../../requests'

const {Content } = Layout;

// const customizeRenderEmpty = () => (
//     <div style={{ textAlign: 'center' }}>
//     <Icon type="smile" style={{ fontSize: 20 }} />
//     <div>No Grandparent infomration</div>
//     <div>You can click add new card to add</div>
//     </div>
// )

class Account extends Component {
    constructor(){
        super() 
        this.state = {
            dataSource: [],
            loadingData: false,
            isShowDeleteModal : false,
            deleteItemName: '',
            deleteItemConfirmLoading: false,
            selectedItemId: null,
            isSendingNotification: false,
        }
    }


    addNewHandle = ()=>{
        // console.log("111")
        // console.log(this.props.id)
        this.props.history.push({
            pathname: `/account/addNew/${this.props.id}`,
        })
    }

    toEdit = (id) => {
        // console.log(id)
        this.props.history.push({
            pathname: `/account/edit/${id}`,
            state:{
                userid: this.props.id
            }
        })
    }

    showDeleteModal = (item) => {
        // console.log(item)
        this.setState({
            isShowDeleteModal: true,
            deleteItemName: item.name,
            selectedItemId: item.id
        })
    }

    deleteItem =() => {
        // console.log(this.state.selectedItemId)
        this.setState({
            deleteItemConfirmLoading: true
        })
        deleteGrandparentById(this.state.selectedItemId)
            .then(resp => {
                if(resp.data){
                    this.setState({
                    }, ()=>{
                        this.loadData(this.props.id)
                    })
                    message.success(`You have deleted ${this.state.deleteItemName} successfully!`)
                }else{
                    message.error("Failed to delete!")
                }
            })
            .finally(()=>{
                this.setState({
                    deleteItemConfirmLoading: false,
                    deleteItemName: "",
                    selectedItemId: null,
                    isShowDeleteModal: false
                })
            })
    }

    sendNotification = (id) => {
        console.log(id)
        this.setState({
            loadingData: true
        })
        sendNotificationById(id)
            .then(resp => {
                console.log(resp.data)
                if(Object.keys(resp.data)[0] === "success"){
                    message.success(resp.data.success)
                }else{
                    message.error(resp.data.error)
                }
            })
            .finally(()=>{
                this.setState({
                    loadingData: false
                })
            })
    }

    hideDeleteModal = () =>{
        this.setState({
            isShowDeleteModal:false,
            deleteItemConfirmLoading: false
        })
    }

    loadData = (id) => {
        this.setState({
            loadingData: true
        })
        getAllGrandparentsById(id)
            .then(resp=>{
                // console.log(resp.data)
                this.setState({
                    dataSource: resp.data
                })
            })
            .finally(() => {
                this.setState({
                    loadingData: false
                })
            })
    }
    componentDidMount(){
        this.loadData(this.props.id)
    }


    render() {
        // console.log("11")
        // console.log(this.state)
        const currentYear = new Date().getFullYear()
        const year = currentYear.toString()
        return (
            !this.props.isLogin
            ?
            <Redirect to="./login"/>
            :
            <Layout>
                {/* <Sider style={{margin: "24px", background: '#fff'}}>
                
                    <div style={{textAlign:"center", fontWeight:"bold", fontSize:"18px"}}>{`Hi, ${this.props.nickname}!`}</div>

                </Sider> */}
                <Content style={{ padding: '24px', minHeight: 280 }}>
                <Col lg={{span:16, offset:4}} md = {{span: 22, offset:1}}>               
                {/* <ConfigProvider renderEmpty={customizeRenderEmpty}> */}
                <List
                    loading= {this.state.loadingData}
                    locale = {{emptyText:<div>You can click add new to add your grandparent infomration</div>}}
                    grid={{
                        gutter: 16,
                        md: 1,
                        lg: 2
                    }}
                    dataSource = {this.state.dataSource}
                    renderItem = {
                        (item,i) => (
                            <List.Item>
                                {/* <Row lg={{span:12, offset:5}} md = {{span: 22, offset:1}}> */}
                                <Card
                                actions={[
                                    <Icon type="edit" key="edit" theme="filled" style={{color:"#1890ff"}} onClick={this.toEdit.bind(this, item.id)} />,
                                    <Icon type="delete" key="delete" theme="filled" style={{color:"#FF0000"}} onClick={this.showDeleteModal.bind(this, item)} />,
                                ]}
                                >
                                <div style={{textAlign:"center"}}>
                                    <div style={{fontSize: "24px", fontWeight: "bold"}}>{item.name}</div>
                                    <div>email : {item.email}</div>
                                    <div>relationship: {item.relationship}</div>
                                    {/* <div>Recerive notification: <Tag color={item.receiveNotification? "#87d068" : "#f50"}>{item.receiveNotification? "Yes": "No"}</Tag></div> */}
                                    <div>Phone: {item.phoneNumber}</div>
                                    <div>Next Vaccine date: <Tag color={item.nextVaccineDate.substring(0,4)=== year ? "#f50" : "#87d068"}>{item.nextVaccineDate}</Tag></div>
                                    <br />
                                    <Button type="primary" onClick = {this.sendNotification.bind(this, item.id)} >Send notification</Button>
                                </div>
                                    
                                </Card>
                                {/* </Row> */}
                            </List.Item> 
                        )
                        }
                >
                </List>
                {/* </ConfigProvider> */}
                <Modal
                  title= {<Typography level={1}>This action is unreoverable!!!</Typography>}
                  visible = {this.state.isShowDeleteModal}
                  onCancel= {this.hideDeleteModal}
                  maskClosable = {false}
                  confirmLoading = {this.state.deleteItemConfirmLoading}
                  onOk = {this.deleteItem}
                >
                    <Typography>Are you sure to delete <span style={{color:"#f00"}}>{this.state.deleteItemName}</span>?</Typography>
                </Modal>
                <Card
                    hoverable
                    cover={<Icon type="user-add" style={{fontSize:"64px"}}></Icon>}
                    onClick= {this.addNewHandle}
                >
                    <div style={{textAlign:"center"}}>Add new</div>
                </Card>
                </Col>
                </Content>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.user.isLogin,
    nickname: state.user.nickname,
    email: state.user.email,
    id: state.user.id
})

export default connect(mapStateToProps)(withRouter(Account))