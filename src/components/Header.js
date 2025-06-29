import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import collegesData from "../data/college.json";

const Header = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="app-header">
                        <div className="header-left">
                            <Link to ="/College-Tracker" style={{ textDecoration: 'none' }}>
                                <h1>College Shortlist</h1>
                            </Link>
                        </div>
                        <div className="header-right">
                            <div className="header-stats">
                                <div className="stat">
                                    <span className="stat-number">{collegesData.colleges.length}</span>
                                    <span className="stat-label">Schools</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
