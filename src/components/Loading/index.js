import React from 'react'
import {Spin} from 'antd'

export default function Loading() {
    return (
        <Spin tip="Loading...">
        <div style={{position:'fixed', padding:'0px',margin:'0px',top:'0px',left:'0px',width:'100%',height:'100%'}}>    
        </div>
        </Spin>
    )
}
