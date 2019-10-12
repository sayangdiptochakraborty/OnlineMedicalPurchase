import React from 'react';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import { Card, Icon, Button, Input, Upload, Divider } from 'antd';
import Header from './header';
import Footer from './footer';
import { List, Avatar} from 'antd';
const { Meta } = Card;

const listData = [];
for (let i = 0; i < 6; i++) {
  listData.push({
    href: 'javascript:void(0)',
    title: `Product ${i}`,
    description:
      'Product Description',
    img: `/images/product_0${i+1}.png`
  });
}
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
export default class UserDashboard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            detailsVisible: false,
            settings: false,
            orderHistory: false,
            monthlySubscription: false,
        }
    }
    render()
    {
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        return(
            <div>
              <Header/>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
                                <strong className="text-black">Dashboard</strong>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.detailsVisible?<div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <a href="javascript:void(0);" onClick={(e)=>{this.setState({detailsVisible:false,settings:false,monthlySubscription:false,orderHistory:false})}}><span className="mx-2 mb-0"><Icon type="arrow-left" style={{fontSize: '27px'}}/></span>Back</a>
                            </div>
                        </div>
                    </div>
                    <Divider/>{
                        this.state.settings?
                        <div>
                        <Row type="flex" justify="space-around">
                        <Col span={7}></Col>
                        <Col span={6}>
                            <Upload className="avatar-uploader" listType="picture-card" showUploadList={false}>{uploadButton}</Upload>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={8}><Input addonBefore={<Icon type="user" />} size="large"/></Col>
                        <Col span={8}><Input disabled="true" addonBefore={<Icon type="mail" />} size="large"/></Col>
                    </Row>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={8}><Input addonBefore={<Icon type="phone" />} size="large"/></Col>
                        <Col span={8}><Input addonBefore={<Icon type="environment" />} size="large"/></Col>
                    </Row>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={8}><Input.Password addonBefore={<Icon type="lock" />} size="large"/></Col>
                        <Col span={8}><Input.Password addonBefore={<Icon type="lock" />} size="large"/></Col>
                    </Row>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={12}><Input.Password addonBefore={<Icon type="lock" />} size="large"/></Col>
                    </Row>
                    <br/>
                    <Row type="flex" justify="space-around">
                        <Col span={12}><Button type="primary" block>Update</Button></Col>
                    </Row>
                    </div>:null
                    }
                    {
                        this.state.orderHistory?
                        <Row type="flex" justify="space-around">
                            <Col span={2}></Col>
                            <Col span={12}>
                            <List
                        itemLayout="vertical"
                        size="small"
                        pagination={{pageSize: 3,
                        }}
                        dataSource={listData}
                        renderItem={item => (
                          <List.Item
                            key={item.title}
                            actions={[
                              <IconText type="edit"/>,
                              <IconText type="delete"/>
                            ]}
                            extra={
                              <img
                                width={100}
                                alt="logo"
                                src={item.img}
                              />
                            }
                          >
                            <List.Item.Meta
                              title={<a href={item.href}>{item.title}</a>}
                              description={item.description}
                            />
                          </List.Item>)}/>
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                        :null
                    }
                    {
                        this.state.monthlySubscription?
                        <Row type="flex" justify="space-around">
                            <Col span={2}></Col>
                            <Col span={12}>
                            <List
                        itemLayout="vertical"
                        size="small"
                        pagination={{pageSize: 3,
                        }}
                        dataSource={listData}
                        renderItem={item => (
                          <List.Item
                            key={item.title}
                            actions={[
                              <IconText type="edit"/>,
                              <IconText type="delete"/>
                            ]}
                            extra={
                              <img
                                width={100}
                                alt="logo"
                                src={item.img}
                              />
                            }
                          >
                            <List.Item.Meta
                              title={<a href={item.href}>{item.title}</a>}
                              description={item.description}
                            />
                          </List.Item>)}/>
                            </Col>
                            <Col span={2}></Col>
                        </Row>
                        :null
                    }
                </div>:
                <div>
                <br/>
                <Row type="flex" justify="space-around">
                    <Col span={2}></Col>
                    <Col span={6}><Card style={{height: 220}} hoverable cover={<Icon type="history" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,orderHistory:true})}}><Meta title="Order History" description="View all your current and ongoing orders." /></Card></Col>
                    <Col span={6}><Card style={{height: 220}} hoverable cover={<Icon type="schedule" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,monthlySubscription: true})}}><Meta title="Monthly Subscription" description="Manage your monthly medicine subscriptions here." /></Card></Col>
                    <Col span={2}></Col>
                </Row>
                <br/>
                <br/>
                <Row type="flex" justify="space-around">
                    <Col span={6}><Card style={{height: 220}} hoverable cover={<Icon type="setting" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,settings:true})}}><Meta title="Settings" description="Change and update your profile settings." /></Card></Col>
                </Row>
                
                </div>}
                <br/>
                <br/>
                <Footer/>
            </div>
        )
    }
}