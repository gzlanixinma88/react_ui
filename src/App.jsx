import React, { Component } from 'react';

import Button from 'antd-mobile/lib/button'
import Toast from 'antd-mobile/lib/toast'

export default class App extends Component {
    handleBtn = () =>{
        Toast.info('提交成功')
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleBtn}>提交</Button>
            </div>
        );
    }
}
