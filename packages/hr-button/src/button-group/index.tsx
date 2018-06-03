/**
 * @description button-group
 * button
 * @time 2018/05/15
 * @author Mike.Cai
 */
import * as React from 'react';
import { Button } from 'antd';
// import * as module from './module';
import './index.scss';
const ButtonGroup = Button.Group;

export default class HButtonGroup extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
      return true;
    }
    render() {
        return (
            <ButtonGroup className="ant-btn-group">
                { this.props.children }
            </ButtonGroup>
        )
    }
} 
