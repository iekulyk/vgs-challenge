import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

class HeaderComponentView  extends React.Component {

    render () {
        return (
            <div className="header-view">
                <Row between="xs" middle="sm">
                        <Col xs={3}>
                            <div>vsg-chalange-dashboard</div>
                        </Col>
                </Row>
            </div>
        )};
}

export default HeaderComponentView;