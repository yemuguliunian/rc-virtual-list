import React from 'react';
import throttle from 'lodash/throttle';

export interface VirtualListProps {
    height: number;
    rowCount: number;
    rowHeight: number;
    rowRenderer: Function;
}

export interface VirtualListState {
    visibleRows: Array<any>;
}

// 缓冲值
const bufferSize = 5;

class VirtualList extends React.Component<VirtualListProps, VirtualListState> {
    private visibleCount: number;

    private startIndex: number;

    private endIndex: number;

    private cache: Array<any> = [];

    constructor(props: VirtualListProps) {
        super(props);

        this.state = {
            visibleRows: [],
        };

        this.visibleCount = 0;
        this.startIndex = 0;
        this.endIndex = 0;

        this.handleScroll = this.handleScroll.bind(this);
        this._updateBoundaryIndex = this._updateBoundaryIndex.bind(this);
    }

    componentDidMount() {
        const { height, rowHeight } = this.props;
        // 计算可渲染的元素个数
        this.visibleCount = Math.ceil(height / rowHeight) + bufferSize;
        this.endIndex = this.startIndex + this.visibleCount;

        this._calculateCache();
        this._updatevisibleRows();
    }

    _calculateCache() {
        const { rowCount, rowHeight } = this.props;
        for (let i = 0; i < rowCount; i++) {
            const top = i * rowHeight;
            this.cache.push({
                index: i,
                top,
                bottom: top + rowHeight,
                style: {
                    position: 'absolute',
                    top,
                    width: '100%',
                },
            });
        }
    }

    _updatevisibleRows() {
        const { cache, startIndex, endIndex } = this;
        const visibleRows = cache.slice(startIndex, endIndex);
        this.setState({
            visibleRows,
        });
    }

    // 计算 startIndex 和 endIndex
    _updateBoundaryIndex(scrollTop: number) {
        const { rowHeight } = this.props;
        const startIndex = Math.floor(scrollTop / rowHeight);
        this.startIndex = startIndex;
        this.endIndex = startIndex + this.visibleCount;
    }

    handleScroll() {
        const { scrollTop } = this.getRef('wrapper');
        this._updateBoundaryIndex(scrollTop);
        this._updatevisibleRows();
    }

    getRef = (name: string) => {
        return this[name];
    };

    saveRef = (name: string) => {
        return (node: HTMLDivElement) => {
            if (node) {
                this[name] = node;
            }
        };
    };

    render() {
        const { height, rowCount, rowHeight, rowRenderer } = this.props;
        const { visibleRows } = this.state;

        const wrapperStyle: React.CSSProperties = {
            height,
            overflow: 'auto',
            position: 'relative',
        };

        const innerWrapperStyle: React.CSSProperties = {
            height: rowCount * rowHeight,
        };
        return (
            <div
                ref={this.saveRef('wrapper')}
                className="wrapper"
                style={wrapperStyle}
                onScroll={throttle(this.handleScroll, 50)}
            >
                <div style={innerWrapperStyle}>{visibleRows.map((item) => rowRenderer(item))}</div>
            </div>
        );
    }
}

export default VirtualList;
