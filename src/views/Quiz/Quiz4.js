import React, { Component } from 'react'
import {Radio} from 'antd'

export default class Quiz4 extends Component {
    render() {
        const {values, handleChange} = this.props
        return (
            <div>
                <Radio.Group onChange={handleChange('answer4')} defaultValue={values.answer4} >
                    <Radio value={1}>A4</Radio><br/><br/>
                    <Radio value={2}>B4</Radio><br/><br/>
                    <Radio value={3}>C4</Radio><br/><br/>
                    <Radio value={4}>D4</Radio><br/><br/>
                </Radio.Group>
            </div>
        )
    }
}
