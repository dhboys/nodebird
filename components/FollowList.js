import React, { useMemo } from 'react';
import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons/lib/icons';
import PropTypes from 'prop-types';

const FollowList = ({ header, data }) => {
    const style = useMemo(() => ({marginBottom: 20}), []);
    const gridStyle = useMemo(() => ({ gutter: 4, xs: 2, md: 3 }), []);
    const loadMoreStyle = useMemo(() => ({textAlign: 'center', margin: '10px 0'}), []);
    const itemStyle = useMemo(() => ({ marginTop: 20 }), []);
    
    return (
        <List 
            style={style}
            grid={gridStyle}
            size="small"
            header={<div>{header}</div>}
            loadMore={<div style={loadMoreStyle}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <List.Item style={itemStyle}>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};

export default FollowList;