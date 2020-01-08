import React, { Component } from 'react';
import { HandlesProps, HandleEventHandlers as HE } from './types';
export declare class Handles<T extends HE = HE> extends Component<HandlesProps> {
    autofocus: (e: React.MouseEvent<Element, MouseEvent>) => void;
    getHandleProps: (id: string, props?: Partial<T> | undefined) => (Partial<T> & {
        onKeyDown: (e: React.KeyboardEvent<Element>) => void;
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (e: React.TouchEvent<Element>) => void;
    }) | {
        onKeyDown: (e: React.KeyboardEvent<Element>) => void;
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (e: React.TouchEvent<Element>) => void;
    };
    render(): string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactPortal | null | undefined;
}
