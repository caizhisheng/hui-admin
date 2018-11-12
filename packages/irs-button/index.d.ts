import * as React from "react";
import { IPropsInterface } from "./src/button/module";

export default class IrsButton extends React.Component<IPropsInterface, any> {
    constructor(props: IPropsInterface);
    componentDidMount(): void;
    handleClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    render(): JSX.Element;
}