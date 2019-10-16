import React, { Component } from 'react'
import {Radio} from 'antd'

export default class Quiz5 extends Component {
    render() {
        const {values, handleChange} = this.props
        return (
            <div>
                <Radio.Group onChange={handleChange('answer5')} defaultValue={values.answer5}  >
                    <Radio value={1}>A5</Radio><br/><br/>
                    <Radio value={2}>B5</Radio><br/><br/>
                    <Radio value={3}>C5</Radio><br/><br/>
                    <Radio value={4}>D5</Radio><br/><br/>
                </Radio.Group>
            </div>
        )
    }
}
