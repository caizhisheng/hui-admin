/**
 * @description button
 * button
 * @time 2018/05/15
 * @author Mike.Cai
 */
import * as React from 'react';
import * as classNames from 'classnames';
import * as module from './module';
import './index.scss';
import { Button } from 'antd';
import { others } from 'fit-transmit-transparently';


export default class HRButton extends React.Component<module.IPropsInterface, any> {
    static defaultProps = new module.DefaultProps();
    constructor(props: module.IPropsInterface) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
    }
    handleClick = (event: React.MouseEvent<any>) => {
        if (this.props.disabled || this.props.loading) {
            return;
        };
        this.props.onClick(event);
    }
    render() {
        others(HRButton.defaultProps, this.props); // props透传111
        console.log(this.props);
        let addon: any = null;
        if (this.props.addonLeft || this.props.addonRight) {
            const addonClass = classNames({
                'fa': true,
                ['fa-' + (this.props.addonLeft || this.props.addonRight)]: true,
                'btn-addon-left': this.props.addonLeft,
                'btn-addon-right': this.props.addonRight
            })
            addon = (
                <i className={addonClass} />
            )
        }
        const btnClass = classNames({
            'customize': true // 自定义style
        })
        return (
                <Button {...this.props}
                    onClick={this.handleClick}
                    className={btnClass}>
                    {this.props.text}
                    <div className="button-container">
                        {(this.props.icon === undefined && this.props.addonLeft) ? addon : null}
                        {(this.props.icon === undefined && this.props.addonRight) ? addon : null}
                    </div>
                </Button>
        )
    }
} 
