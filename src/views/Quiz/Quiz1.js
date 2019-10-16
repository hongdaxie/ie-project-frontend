import React, { Component } from 'react'
import {Radio} from 'antd'

export default class Quiz1 extends Component {
    render() {
        const {values, handleChange} = this.props
        return (
            <div>
                <Radio.Group onChange={handleChange('answer1')} defaultValue={values.answer1}>
                    <Radio value={1}>A1</Radio><br/><br/>
                    <Radio value={2}>B1</Radio><br/><br/>
                    <Radio value={3}>C1</Radio><br/><br/>
                    <Radio value={4}>D1</Radio><br/><br/>
                </Radio.Group>
            </div>
        )
    }
}
