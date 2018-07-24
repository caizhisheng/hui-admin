import * as React from 'react';
import { ButtonType } from 'antd/lib/button';
import { BaseButtonProps, ButtonSize } from 'antd/lib/button/button';

export interface IPropsInterface extends BaseButtonProps {
    href?: string,
    htmlType?: string,
    loading?: boolean,
    disabled?: boolean,
    target?: string,
    text?: string,
    addonLeft?: any,
    addonRight?: any,
    onClick?: (event?: React.MouseEvent<any>) => void,
}

export default class DefaultProps implements IPropsInterface {
    type = "primary" as ButtonType;
    htmlType = "button";
    size = "default" as ButtonSize;
    // text = "";
    disabled = false;
    //  addonLeft: any = null;
    //  addonRight: any = null;
    onClick = () => { }
}
