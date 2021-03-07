import React, { Component } from 'react';
import '../App.css';

import { Layout, Button, Input, Table, Modal } from 'antd';

import { regData } from '../mydata/RegData'

const { Header, Content, Sider } = Layout;
const { TextArea } = Input;

// 列数据
const columns = [
    {
      title: '示例',
      dataIndex: 'example',
      width: 100,
    },
    {
      title: '表达式',
      dataIndex: 'expression',
      width: 150,
    },
  ];

const data = regData;

class MyReg extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedRowValue: '',
            textAreaText: '',
            myAreaText: '',
            modalVisible: false,
            javaCodeText: ''
        };
    }

    handleInputChange = (value) => {
        this.setState({
            textAreaText: value.target.value
        })
    }

    selectRow = (record) => {
        this.setState({ 
            selectedRowValue: record.expression
        });
    }

    MyInputChange = (e) => {
        this.setState({ 
            selectedRowValue: e.target.value
        });
    }

    MyButtonClick =() => {
        // 获取输入框的正则
        // var str = this.state.selectedRowValue.replace('\\','\\\\');
        var str = this.state.selectedRowValue;

        var pattern = new RegExp(str);
        var areaText = this.state.textAreaText;
        var matchs = pattern.exec(areaText); 
        console.log(matchs)
        if (null !== matchs && matchs.length > 0) {
            // matchs.forEach(element => {
            //     // var text = '';
            //     // if (typeof(element) !== 'undefined') {
            //     //     text =  text + "\n" + element;
            //     //     console.log(text)
            //     // }
            //     // this.setState({
            //     //     myAreaText: text
            //     // })
            // });
            this.setState({
                myAreaText: "匹配通过: " + areaText
            })
        } else {
            this.setState({
                myAreaText: '没有匹配'
            })
        }
    }

    createBtnClick =() => {
        // 有bug，应用replaceAll
        var patternText = this.state.selectedRowValue.replace(/\\/g,"\\\\");
        if (patternText === '') {
            patternText = "你的正则表达式";
        }
        var myText = this.state.textAreaText;
        if (myText === '') {
            myText = "你要匹配的字符串"
        }
        var text = "<pre>import java.util.regex.Matcher;<br/>" + 
                   "import java.util.regex.Pattern;<br/><br/>" +
                   "public class 你的类名 {<br/>" +
                   "&#9;public static void main(String args[]) {<br/>" +
                   "&#9;&#9;String str = \"" + myText + "\";<br/>" +
                   "&#9;&#9;String pattern = \"" + patternText + "\";<br/>" +
                   "&#9;&#9;Pattern r = Pattern.compile(pattern);<br/>" +
                   "&#9;&#9;Matcher m = r.matcher(str);<br/>" +
                   "&#9;&#9;System.out.println(m.matches());<br/>" +
                   "&#9;}<br/>}</pre>"
        
        this.setState({
            javaCodeText: text,
            modalVisible : true,
        });
    }
    
    handleCancel = () => {
        this.setState({
            modalVisible: false,
        });
    };

    render() {

        return (
            <div class="display-flex" style={{height:500, background:'#ffffff'}}>
                <Layout> 
                    <Layout>
                        <Sider width={450} style={{background:'#ffffff'}}>
                            <h3 style={{textAlign:'center'}}>常用正则表达式</h3>
                            <Table 
                                style={{marginTop:16}}
                                columns={columns} 
                                dataSource={data} 
                                size="small" 
                                bordered 
                                pagination={{pageSize:7}} 
                                onRow={(record) => ({
                                    onClick: () => {
                                        this.selectRow(record);
                                    },
                                })}
                                />
                        </Sider>
                    
                        <Layout style={{padding: '0 24px 24px', background:'#ffffff'}}>

                            <Header style={{height:40, background:'#ffffff'}}>
                                <div className='div-center'>
                                    <text style={{fontSize:16}}>正则表达式匹配</text>
                                    <Button type='primary' style={{marginLeft:10}} onClick={this.createBtnClick}>生成代码</Button>
                                </div>
                            </Header>
                            
                            <Content style={{height:150, marginRight:50, marginLeft:10}}>
                                <TextArea  
                                    placeholder='请输入匹配文本'
                                    rows={8}
                                    onChange={this.handleInputChange}/>
                                <div className='div-center' style={{marginTop:30}}>
                                    <text style={{fontSize:16}}>正则表达式：</text>
                                    <span/>
                                    <Input 
                                        style={{width:200}} 
                                        allowClear
                                        value={this.state.selectedRowValue}
                                        onChange={this.MyInputChange.bind(this)}
                                        />
                                    <Button type='primary' style={{marginLeft:10}} onClick={this.MyButtonClick}>匹配</Button>
                                </div>
                                
                                <TextArea  
                                    style={{marginTop:60, color: "black"}}
                                    value={this.state.myAreaText}
                                    rows={8}
                                    disabled={true}/>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
                <Modal
                    title="Java 代码"
                    visible={this.state.modalVisible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <text dangerouslySetInnerHTML={{__html:this.state.javaCodeText}}/>
                </Modal>
            </div>    
        );
    }
}

export default MyReg;