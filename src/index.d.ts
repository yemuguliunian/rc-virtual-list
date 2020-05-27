import React from 'react';
export interface VirtualListProps {
    height: number;
    rowCount: number;
    rowHeight: number;
    rowRenderer: Function;
}
export interface VirtualListState {
    visibleRows: Array<any>;
}
declare class VirtualList extends React.Component<VirtualListProps, VirtualListState> {
    private visibleCount;
    private startIndex;
    private endIndex;
    private cache;
    constructor(props: VirtualListProps);
    componentDidMount(): void;
    _calculateCache(): void;
    _updatevisibleRows(): void;
    _updateBoundaryIndex(scrollTop: number): void;
    handleScroll(): void;
    getRef: (name: string) => any;
    saveRef: (name: string) => (node: HTMLDivElement) => void;
    render(): JSX.Element;
}
export default VirtualList;
