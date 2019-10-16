import React, { Component } from 'react'
import {Radio} from 'antd'

export default class Quiz3 extends Component {
    render() {
        const {values, handleChange} = this.props
        return (
            <div>
                <Radio.Group onChange={handleChange('answer3')} defaultValue={values.answer3} >
                    <Radio value={1}>A3</Radio><br/><br/>
                    <Radio value={2}>B3</Radio><br/><br/>
                    <Radio value={3}>C3</Radio><br/><br/>
                    <Radio value={4}>D3</Radio><br/><br/>
                </Radio.Group>
            </div>
        )
    }
}
