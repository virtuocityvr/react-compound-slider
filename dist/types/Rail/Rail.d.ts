import React, { Component } from 'react';
import { RailProps, RailEventHandlers } from './types';
export declare class Rail<T extends RailEventHandlers> extends Component<RailProps> {
    getRailProps: (props?: Partial<T> | undefined) => (Partial<T> & {
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (e: React.TouchEvent<Element>) => void;
    }) | {
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (e: React.TouchEvent<Element>) => void;
    };
    render(): any;
}
