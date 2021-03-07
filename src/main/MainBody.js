import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';

import { Link, Route, Switch } from 'react-router-dom';

import MyReg from '../page/MyReg';
import MyRegGrammar from '../page/MyRegGrammar';
import MyJson from '../page/MyJson';

const { SubMenu } = Menu;

class MainBody extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current: '',
            visible: true
        }
    }

    render() {
        return (
            <div style={{height:460, background:'white'}}>
                <Layout >
                    <center>
                        <Menu 
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            theme='light'
                        >
                            <SubMenu
                                title={
                                    <span className="submenu-title-wrapper">
                                        <text style={{fontSize:16}}>正则表达式 </text>
                                    </span>
                                }
                                >
                                <Menu.Item key="uReg"><Link to='/uReg'>正则表达式匹配</Link></Menu.Item>
                                <Menu.Item key="uRegGrammar"><Link to='/uRegGrammar'>正则表达式语法</Link></Menu.Item>
                            </SubMenu>
                            {/* <Menu.Item key="uReg">
                                <Link to='/uReg'><text style={{fontSize:16}}>正则表达式 </text><Icon type="retweet" /></Link>
                            </Menu.Item> */}
                            <Menu.Item key="uJson" style={{marginRight:0, marginLeft:180}}>
                                <Link to='/uJson'><text style={{fontSize:16}}>JSON格式化 </text></Link>
                            </Menu.Item>
                            
                            {/* <Menu.Item key="collect">
                                <Link to='/collect'><Icon type="appstore" />收藏</Link>
                            </Menu.Item> */}
                        </Menu>
                    </center>

                    <Layout style={{minHeight:400, background:'#ffffff', padding:24}}>
                        <Switch>
                            <div>
                                <Route exact path='/uReg' component={MyReg}></Route>
                                <Route exact path='/uRegGrammar' component={MyRegGrammar}></Route>
                                <Route exact path='/uJson' component={MyJson}></Route>
                            </div>
                        </Switch>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default MainBody;