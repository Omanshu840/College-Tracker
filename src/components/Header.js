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
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
