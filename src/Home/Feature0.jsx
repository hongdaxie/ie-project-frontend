import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Card } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';
import { withRouter } from "react-router-dom"

class Content extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    return (
      <div {...props} {...wrapper}>
        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>
          <OverPack {...overPackData}>
            <QueueAnim
              type="bottom"
              key="block"
              leaveReverse
              component={Row}
              componentProps={childWrapper}
            >
              {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <div {...item}>
                      <Card
                        hoverable = {true}
                        title={`${item.title}`}
                        onClick = {()=> {this.props.history.push(item.target)}}
                      >
                      {item.children.map(getChildrenToRender)}
                      </Card>
                    </div>
                  </Col>
                );
              })}
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default withRouter(Content);
