import React, { Component } from 'react';

import { Table } from 'antd';
import '../App.css';

import { normalChData, specialChData, qualifyChData, locateChData } from "../mydata/RegGrammerData"


// 列数据
const columns = [
    {
      title: '字符',
      dataIndex: 'character',
      width: 60,
    },
    {
      title: '描述',
      dataIndex: 'description',
      width: 300,
    },
  ];

const myNormalChData = normalChData;
const mySpecialChData = specialChData;
const myQualifyChData = qualifyChData;
const myLocateChData = locateChData;

class MyRegGrammar extends Component {

    render() {
        return (
            <center>
                <div style={{height:44, background:'#ffffff'}}>
                    <h1>正则表达式语法</h1>
                </div> 

                <div>
                    <Table 
                        title={() => '普通字符'}
                        style={{marginTop:10,width:900}}
                        columns={columns} 
                        dataSource={myNormalChData} 
                        size="small" 
                        bordered 
                        pagination={false} 
                    />
                </div>

                <div>
                    <Table 
                        title={() => '特殊字符'}
                        style={{marginTop:16,width:900}}
                        columns={columns} 
                        dataSource={mySpecialChData} 
                        size="small" 
                        bordered 
                        pagination={false} 
                    />
                </div>

                <div>
                    <Table 
                        title={() => '限定符'}
                        style={{marginTop:16,width:900}}
                        columns={columns} 
                        dataSource={myQualifyChData} 
                        size="small" 
                        bordered 
                        pagination={false} 
                    />
                </div>

                <div>
                    <Table 
                        title={() => '定位符'}
                        style={{marginTop:16, width:900}}
                        columns={columns} 
                        dataSource={myLocateChData} 
                        size="small" 
                        bordered 
                        pagination={false} 
                    />
                </div>
            </center>
               
        );
    }
}

export default MyRegGrammar;