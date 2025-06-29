import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
    return (
        <Card className="college-card">
            <div className="card-header-section">
                <div className="rank-badge">#{college.rank}</div>
                <div className="d-flex justify-content-center">
                    <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="college-logo"
                    />
                </div>
            </div>

            <h3 className="college-name">{college.name}</h3>

            <div className="card-content">
                <div className="college-info-grid">
                    <div className="info-item">
                        <span className="label">Course</span>
                        <span className="value highlight">
                            {college.course}
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="label">Duration</span>
                        <span className="value">{college.duration}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Fee</span>
                        <span className="value">{college.fee}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Avg. Salary</span>
                        <span className="value highlight">
                            {college.avgSalary}
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="label">Avg. GMAT</span>
                        <span className="value">{college.avgGMAT}</span>
                    </div>

                    <div className="info-item">
                        <span className="label">Fee Waiver</span>
                        <span className="value">
                            {college.feeWaiverAvailable ? (
                                <Badge bg="success" className="waiver-badge">
                                    Available
                                </Badge>
                            ) : (
                                <Badge bg="secondary" className="waiver-badge">
                                    Not Available
                                </Badge>
                            )}
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="label">Country</span>
                        <span className="value">{college.country}</span>
                    </div>
                </div>

                <div className="application-deadline">
                    <Badge bg="light" text="dark">
                        Application Deadline
                    </Badge>
                    <span>{college.applicationDeadline}</span>
                </div>
            </div>

            <Link to={`/College-Tracker/college/${college.id}`} className="w-100">
                <Button className="view-details">View Details</Button>
            </Link>
        </Card>
    );
};

export default CollegeCard;
