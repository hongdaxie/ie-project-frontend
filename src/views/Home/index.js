import React, { Component, createRef } from 'react'
// import Banner from '../../Home/Banner1';
import Feature from '../../Home/Feature0';
import { enquireScreen } from 'enquire-js';
// import echarts from "echarts"
import {  
    // Banner10DataSource,
    Feature00DataSource,
} from '../../Home/data.source';
import{
  Row,
  Col,
  Card,Collapse,Typography, Carousel, Statistic, Icon
} from 'antd'
import rightSiderImg2 from './homePageRightSide1_meitu_1.jpg'
import rightSiderImg3 from './homePageRightSide4_meitu_3.jpg'
import rightSiderImg4 from './homePageRightSide3_meitu_2.jpg'
import vaccine1 from './vaccine1.jpg'
import vaccine2 from './vaccine2.jpg'
import './index.css'

// const { Meta } = Card
const {Paragraph} = Typography
const { Panel } = Collapse;
let isMobile;
  enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

// const chartData = [
//   ['ageGrop','2018','2019'],
//   ['age 50-54', 716, 1797],
//   ['age 55-59', 698, 1891],
//   ['age 60-64', 662, 1739],
//   ['age 65-69', 523, 1397],
//   ['age 70-74', 440, 1287],
//   ['age 75-79', 374, 1065],
//   ['age 80-84', 295, 1088],
//   ['age 85+', 388, 1616]
// ]

// const recentChartData = [
//   // {date: "May-20", value: 1149},
//   ['year','0-4','5-64','65+'],
//   // ['2004', 3, 3, 30],
//   // ['2005', 2, 9, 28],
//   // ['2006', 3, 2, 11],
//   // ['2007', 5, 13, 55],
//   // ['2008', 0, 12, 34],
//   // ['2009', 3, 78, 46],
//   // ['2010', 2, 26, 17],
//   // ['2011', 2, 28, 39],
//   ['2012', 5, 16, 131],
//   ['2013', 2, 26, 52],
//   ['2014', 5, 57, 197],
//   ['2015', 4, 29, 256],
//   ['2016', 3, 47, 414],
// ]

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isMobile,
          show: !location.port,
        };
        this.fluAmountChart = createRef()
      }

      // initFluChart = () => {
      //   this.fluChart = echarts.init(this.fluAmountChart.current)
      //   const option = {
      //     title:{
      //       text: "Influenza cases for Victoria"
      //     },
      //     legend: {},
      //     tooltip: {},
      //     dataset: {
      //         dimensions:['ageGrop','2017','2018','2019'],
      //         source: chartData
      //     },
      //     xAxis: {type: 'category'},
      //     yAxis: {},
      //     // Declare several bar series, each will be mapped
      //     // to a column of dataset.source by default.
      //     series: [
      //         {type: 'bar'},
      //         {type: 'bar'},
      //         // {name: "Number of cases"}
      //     ]
      // };
      //   this.fluChart.setOption(option)
      // }  


      // initRecentFluChart = () => {
      //   this.recentFluChart = echarts.init(document.getElementById("recentFluChart"))
      //   const option1 = {
      //       title: {
      //           text: 'Death by Influenza'
      //       },
      //       legend: {},
      //       tooltip: {},
      //       dataset: {
      //         dimensions:['year','age0-4','age5-64','age65+'],
      //         source: recentChartData
      //     },
      //       xAxis: {
      //           type: 'category',
      //           // boundaryGap: true,
      //           // data: recentChartData.map(item => item.date),
      //           // axisTick: {
      //           //     alignWithLabel: true
      //           // }
      //       },
      //       yAxis: {
      //           // type: 'value'
      //       },
      //       series: [
      //         {
      //           // data: recentChartData.map(item => item.value),
      //           // type: 'line',
      //           // // areaStyle: {},
      //           // name: "Number of cases",
      //           // itemStyle : { normal: {label : {show: true}}}
      //         type:'bar'
      //         },
      //         {type:'bar'},
      //         {type:"bar"}
      //       ],
      //   }
      //   this.recentFluChart.setOption(option1)
      // }

    componentDidMount() {
        enquireScreen((b) => {
          this.setState({ isMobile: !!b });
        });

        if (location.port) {
          setTimeout(() => {
          this.setState({
            show: true,
          });
        }, 500);
      }
      // this.initFluChart()
      // this.initRecentFluChart()
    }

    render() {
        return (
            <div>
              <Row>
                <Col span= {24} >
                <Carousel autoplay>
                <div className="bg0">
                  <div style={{fontSize: "36px", fontWeight: "bold", marginTop:'1%'}}>
                      <div style={{color: 'rgb(40,40,40)', fontSize: 48, width:'100%', height: 50}}>Secure the future of your loved ones 
                      </div>
                      <div> <span><a href="./register" style={{color: 'red'}}> Register now!!</a></span>
                      </div> 
                  </div>
                </div>
                  <div className="bg1">
                    {/*
                    Todo :   move the text to left top side     change the font size to largger    change the font color to white
                    */}
                  <div style={{fontSize: "36px", fontWeight: "bold", marginLeft: "250px"}}>
                      Let`s Fight Flu Together! 
                  </div>
                  </div>
                  <div className="bg2">
                  <div style={{fontSize:"36px", fontWeight: "bold", marginLeft: "250px", color: "#66d9ff"}}>
                    Take Vaccines Stay Healthy
                  </div>
                  </div>
                </Carousel>
                </Col> 
              </Row>
              <Row>
                  <Col>
                      <Feature
                        id="Feature"
                        key="Feature"
                        dataSource={Feature00DataSource}
                        isMobile={this.state.isMobile}
                      >
                      </Feature>
                  </Col>
              </Row>
              <Row>
                {/* <Col md={24} lg={{span:16, offset:1}}>
                  <Card 
                      title="" 
                      bordered={true} 
                      style={{height:'590px'}} 
                  >
                      <div ref={this.fluAmountChart} style={{height:'590px'}}/>
                      
                  </Card>
                </Col> */}

                <Col md={24} lg={{span:8}} >
                <Card 
                    style={{height:"350px", marginLeft:'48px'}}
                  >
                    <div style={{position: "relative", top:'50px', textAlign: "center" }}>
                    <div style={{fontWeight: "bold", fontSize: "16px"}}>
                      During the influenza season, people aged 50 years or above accounted for more than
                    </div>
                      <Statistic
                        title=""
                        value={90}
                        // precision={2}
                        valueStyle={{ color: '#3f8600', fontSize: "36px" }}
                        prefix={<Icon type="arrow-up" />}
                        suffix="%"
                      />
                      {/*
                        During the influenza season, people aged 50 years or above accounted for more than
                        
                        Receiving flu shot each year can reduce your chances of contracting flu by 60%
                        
                        Experts predict that by the end of 2019 in Australia, the number of flu related deaths will be 
                        Replace "up to" to "be"
                      */}
                    </div>
                    <img  src={rightSiderImg2} alt="example" style={{width:"150px", position: "absolute", left:"50%", marginLeft:"-75px", bottom:"24px"}} />
                  </Card>
                </Col>
                <Col md ={24} lg={{span:8}} >
                  <Card 
                      style={{height:"350px", marginLeft:'48px'}}
                    >
                      <div style={{position: "relative", top:'50px', textAlign: "center" }}>
                        <div
                          style={{fontWeight: "bold", fontSize: "16px"}}
                        >
                          Receiving flu shot each year can reduce your chances of contracting flu by
                        </div>
                      <Statistic
                        title=""
                        value={60}
                        // precision={2}
                        valueStyle={{ color: '#3f8600', fontSize: "36px" }}
                        prefix={<Icon type="arrow-up" />}
                        suffix="%"
                      />
                    </div>
                    <img  src={rightSiderImg4} alt="example" style={{width:"150px", position: "absolute", left:"50%", marginLeft:"-75px", bottom:"24px"}} />
                  </Card>
                </Col>
                <Col md ={24} lg={{span:8}} >
                  <Card 
                      style={{height:"350px", marginLeft:'48px', marginRight:'48px'}}
                    >
                      <div style={{position: "relative", top:'50px', textAlign: "center" }}>
                        <div style={{fontWeight: "bold", fontSize: "16px"}}>
                          By the end of 2019 in Australia, the number of flu related deaths will be
                        </div>
                        <Statistic
                        title=""
                        value={4000}
                        // precision={2}
                        valueStyle={{ color: '#3f8600', fontSize: "36px" }}
                        prefix={<Icon type="arrow-up" />}
                        // suffix="%"
                      />
                    </div>
                    <img  src={rightSiderImg3} alt="example" style={{width:"150px", position: "absolute", left:"50%", marginLeft:"-75px", bottom:"24px"}} />
                  </Card>
                </Col>
              </Row>
                {/* <Col md={24} lg={{span:16, offset:1}}>
                  <Card 
                      title="" 
                      bordered={true}  
                      style={{height:'590px'}}
                  >
                      <div id="recentFluChart" style={{height:'590px'}}/>
                  </Card>
                    </Col> */}
              
                <Col md={24} lg={{span:22, offset:1}}>
                <div style={{marginTop:"8px"}}>
                            <Collapse 
                            // defaultActiveKey={['1']} 
                            >
                                <Panel header="What is influenza?" key="1">
                                <div id="influenza">
                                    <Paragraph>
                                    Influenza (flu) is a potentially life threatening illness. It is a contagious disease of the
                                    respiratory tract caused by viruses of influenza. Each year, influenza causes serious
                                    infection and death around the globe, usually in the winter months (seasonal
                                    influenza).<br/><br/>
                                    Influenza can lead to complications and for some people - the elderly, people with
                                    poor immune systems and people with pre-existing respiratory, cardiac and
                                    endocrine disease—influenza can be a significant disease and cause death. It can
                                    also cause the death of healthy adults and children.
                                    The best way to prevent the flu is by getting a flu vaccine each year.
                                    </Paragraph>
                                </div>
                                </Panel>
                                <Panel header="How do vaccines work?" key="2">
                                <div id="vaccineWorks">
                                    <Paragraph>
                                        Our immune system is made up of special cells and chemicals (called antibodies) that fight infection.
                                        We gain immunity against diseases either naturally (by catching an illness), or through immunisation.<br/><br/>
                                        Vaccines are made up of a modified version of a disease-causing germ or toxin (known as ‘antigens’). 
                                        They are usually given by injection or a small drink that contains the vaccine. <br/><br/>
                                        The immune system responds to the weakened, partial or dead germ or inactivated toxin (antigen) as 
                                        if it was a fully-fledged germ and makes antibodies to destroy it. These antibodies are made without us catching the illness.
                                    </Paragraph>
                                </div>
                                </Panel>
                                <Panel header="A Flu Vaccine is the Best Protection Against Flu" key="3">
                                <div id="importance">
                                    <Paragraph>
                                    The best way to protect against flu and its potentially serious complications is with a CDC recommends that everyone 6 months of age and older get a seasonal flu vaccine each year by the end of October. However, as long as flu viruses are circulating, vaccination should continue throughout flu season, even in January or later. <br/><br/>

                                    Flu vaccination is especially important for people 65 years and older because they are at high risk of developing serious complications from flu. Flu vaccines are updated each season as needed to keep up with changing viruses. Also, immunity wanes over a year so annual vaccination is needed to ensure the best possible protection against influenza. A flu vaccine protects against the flu viruses that research indicates will be most common during the upcoming season. (See Vaccine Virus Selection for this season’s exact vaccine composition.) The 2018-2019 flu vaccine has been updated from last season’s vaccine to better match circulating viruses. Immunity from vaccination sets in after about two weeks. <br/><br/>

                                    Older people with weaker immune systems often have a lower protective immune response after flu vaccination compared to younger, healthier people. This can make them more susceptible to the flu. Although immune responses may be lower in the elderly, vaccine effectiveness has been similar in most flu seasons among older adults and those with chronic health conditions compared to younger, healthy adults. Despite the fact that older adults have weaker immune responses to vaccine flu vaccines, there are many reasons why people in that age group should be vaccinated each year.<br/><br/>
                                    </Paragraph>
                                </div>
                                </Panel>
                                <Panel header="Types of Flu Shots for People 65 and Older" key="4">
                                <div id="fluShotType">
                                    <Paragraph>
                                    People 65 years and older should get a flu shot and not a nasal spray vaccine. They can get any flu vaccine approved for use in that age group with no preference for any one vaccine over another. There are regular flu shots that are approved for use in people 65 and older and there also are two vaccines designed specifically for people 65 and older:
                                    </Paragraph>
                                </div>                                
                                <Row gutter={16}>
                                    <div id="type1">
                                        <Col md={24} lg={12}>
                                        <Card 
                                            title="High dose vaccine" 
                                            cover={<img alt="example" src= {vaccine1} />}
                                        >
                                            The “high dose vaccine” contains 4 times the amount of antigen as a regular flu shot. It is associated with a stronger immune response following vaccination (higher antibody production). Results from a clinical trial of more than 30,000 participants showed that adults 65 years and older who received the high dose vaccine had 24% fewer influenza infections as compared to those who received the standard dose flu vaccine. The high dose vaccine has been approved for use in the United States since 2009.
                                        </Card>
                                        </Col>
                                    </div>
                                    <div id="type2">
                                    <Col md={24} lg={12}>
                                    <Card 
                                        title="Adjuvanted flu vaccine" 
                                        cover={<img alt="example" src= {vaccine2} />}
                                    >
                                        The adjuvanted flu vaccine, Fluad, is made with MF59 adjuvant&nbsp;an additive that creates a stronger immune response to vaccination. In a Canadian observational study of 282 people aged 65 years and older conducted during the 2011-12 season, Fluad was 63% more effective than regular-dose unadjuvanted flu shots. There are no randomized studies comparing Fluad with Fluzone High-Dose. This vaccine was available for the first time in the United States during the 2016-2017 season.                                    
                                        </Card>
                                    </Col>
                                    </div>
                                </Row>
                                </Panel>
                            </Collapse>
                            </div>
                            </Col>
            </div>
        )
    }
}
