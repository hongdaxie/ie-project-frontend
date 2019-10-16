import React, { Component } from 'react'
import tableau from "tableau-api";
import {Col , Collapse, Typography} from 'antd'
const {Paragraph} = Typography
const { Panel } = Collapse;

export default class Recommondation extends Component {

    constructor(props) {
        super(props);
        // this.fluAmountChart = createRef()
    }

    componentDidMount(){
        this.initViz() 
    }

    

    initViz() {  
    let vizUrl = 'https://public.tableau.com/shared/7JPGDBJP7?:display_count=yes&:origin=viz_share_link';  
    const options = {

        hideTabs: true,
        hideToolbar: true,
        // onFirstInterative: () => {
        //     // console.log("it worked")
        // }
      };
    const vizContainer = this.vizContainer;  
    this.viz = new window.tableau.Viz(this.vizContainer, vizUrl, options)  
    } 

    render() {
        return (
            <div>
            <div 
                ref={(div) => { this.vizContainer = div }}
                // ref={this.fluAmountChart}
            >
            </div>
            <Col md={24} lg={{span:22, offset:1}}>
                <div style={{marginTop:"8px"}}>
                    <Collapse 
                    // defaultActiveKey={['1']} 
                    >
                    <Panel header="Instructions of use" key="1">
                    <div id="influenza">
                        <Paragraph>
                            - Click on '+' sign to zoom in, '-' sign to zoom out
                        </Paragraph>
                        <Paragraph>
                        - Double click on a region to zoom in on that region
                        </Paragraph>
                        <Paragraph>
                        - After double clicking on a region, click the same region again to return to the map
                        </Paragraph> 
                        <Paragraph>
                        - Change Age and year from the dropdown on the right hand corner
                        </Paragraph>
                    </div>
                    </Panel>
                    </Collapse>
                </div>
            </Col>
            </div>
        )
    }
}
