import React, { Component } from 'react'
import {Radio} from 'antd'

export default class Quiz2 extends Component {
    render() {
        const {values, handleChange} = this.props
        return (
            <div>
                <Radio.Group onChange={handleChange('answer2')} defaultValue={values.answer2} >
                    <Radio value={1}>A2</Radio><br/><br/>
                    <Radio value={2}>B2</Radio><br/><br/>
                    <Radio value={3}>C2</Radio><br/><br/>
                    <Radio value={4}>D2</Radio><br/><br/>
                </Radio.Group>
            </div>
        )
    }
}
