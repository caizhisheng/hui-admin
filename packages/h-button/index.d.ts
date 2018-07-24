import * as React from "react";
import { IPropsInterface } from "./src/button/module";

// import { ButtonType, ButtonSize } from "antd/lib/button";
// import { BaseButtonProps } from "antd/lib/button/button";


// declare interface IPropsInterface extends BaseButtonProps {
//     href?: string,
//     htmlType?: string,
//     loading?: boolean,
//     disabled?: boolean,
//     target?: string,
//     text?: string,
//     addonLeft?: any,
//     addonRight?: any,
//     onClick?: (event?: React.MouseEvent<any>) => void,
// }
// declare class DefaultProps implements IPropsInterface {
//     type: ButtonType;
//     htmlType: string;
//     size: ButtonSize;
//     disabled: boolean;
//     onClick?: (event?: React.MouseEvent<any>) => void
// }

export class HButton extends React.Component<IPropsInterface, any> {
    constructor(props: IPropsInterface);
    componentDidMount(): void;
    handleClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    render(): JSX.Element;
}