import React from 'react';
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import { Card, Icon, Button, Input, Upload, Divider } from 'antd';

const { Meta } = Card;
export default class VendorDashboard extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            detailsVisible: false,
            settings: false,
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
                                <a href="javascript:void(0);" onClick={(e)=>{this.setState({detailsVisible:false,settings:false})}}><span className="mx-2 mb-0"><Icon type="arrow-left" style={{fontSize: '27px'}}/></span>Back</a>
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
                </div>:
                <div>
                <br/>
                <Row type="flex" justify="space-around">
                    <Col span={2}></Col>
                    <Col span={6}><Card style={{height: 250}} hoverable cover={<Icon type="plus-circle" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true})}}><Meta title="Add Medicine" description="Add a medicine, vitamin or supplement in the shop alongwith all the details" /></Card></Col>
                    <Col span={6}><Card style={{height: 250}} hoverable cover={<Icon type="bars" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true})}}><Meta title="View Medicines" description="Get a list of all your medicines, view and edit the items as per your need." /></Card></Col>
                    <Col span={2}></Col>
                </Row>
                <br/>
                <br/>
                <Row type="flex" justify="space-around">
                    <Col span={2}></Col>
                    <Col span={6}><Card style={{height: 250}} hoverable cover={<Icon type="file-done" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true})}}><Meta title="Orders and Report" description="Get a list of all your orders, download the report and revenue generated." /></Card></Col>
                    <Col span={6}><Card style={{height: 250}} hoverable cover={<Icon type="setting" style={{fontSize: '100px',paddingTop: '20px'}}/>} onClick={(e)=>{this.setState({detailsVisible:true,settings:true})}}><Meta title="Settings" description="Change and update your profile settings." /></Card></Col>
                    <Col span={2}></Col>
                </Row>
                
                </div>}
                <br/>
                <br/>
            </div>
        )
    }
}