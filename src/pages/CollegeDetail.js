import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import collegeData from "../data/college.json";

const CollegeDetail = () => {
    const { id } = useParams();
    const [college, setCollege] = useState(null);

    useEffect(() => {
        const foundCollege = collegeData.colleges.find(
            (col) => col.id === parseInt(id)
        );
        if (foundCollege) {
            setCollege(foundCollege);
        }
    }, [id]);

    if (!college) {
        return (
            <Container className="not-found-container">
                <div className="text-center">
                    <h2>College Not Found</h2>
                    <p>The college you are looking for does not exist.</p>
                    <Link to="/College-Tracker">
                        <Button className="back-button mt-4">
                            Back to Shortlist
                        </Button>
                    </Link>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="college-detail">
        
                <div className="college-header">
                    <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="college-logo"
                    />
                    <div className="college-title">
                        <h1>{college.name}</h1>
                        <p>{college.course}</p>
                    </div>
                </div>

                <Row>
                    <Col md={12}>
                        <div className="college-stats">
                            <div className="stat-item">
                                <div className="stat-label">Duration</div>
                                <div className="stat-value">
                                    {college.duration}
                                </div>
                            </div>

                            <div className="stat-item">
                                <div className="stat-label">Course Fee</div>
                                <div className="stat-value">{college.fee}</div>
                            </div>

                            <div className="stat-item">
                                <div className="stat-label">Average Salary</div>
                                <div className="stat-value">
                                    {college.avgSalary}
                                </div>
                            </div>

                            <div className="stat-item">
                                <div className="stat-label">Average GMAT</div>
                                <div className="stat-value">
                                    {college.avgGMAT}
                                </div>
                            </div>

                            <div className="stat-item">
                                <div className="stat-label">
                                    Application Deadline
                                </div>
                                <div className="stat-value">
                                    <Badge
                                        bg="danger"
                                        className="deadline-badge"
                                    >
                                        {college.applicationDeadline}
                                    </Badge>
                                </div>
                            </div>

                            <div className="stat-item">
                                <div className="stat-label">
                                    IELTS Requirement
                                </div>
                                <div className="stat-value">
                                    Minimum {college.ieltsRequirement} band
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md={6}>
                        <h3 className="section-title">
                            Application Requirements
                        </h3>
                        <ul className="requirements-list">
                            {college.applicationRequirements.map(
                                (req, index) => (
                                    <li key={index}>{req}</li>
                                )
                            )}
                        </ul>
                    </Col>

                    <Col md={6}>
                        <h3 className="section-title">
                            Scholarship Opportunities
                        </h3>
                        <ul className="scholarships-list">
                            {college.scholarshipOpportunities.map(
                                (scholarship, index) => (
                                    <li key={index}>{scholarship}</li>
                                )
                            )}
                        </ul>
                    </Col>
                </Row>

                <h3 className="section-title">Upcoming Events</h3>
                <div className="events-list">
                    {college.upcomingEvents.length > 0 ? (
                        college.upcomingEvents.map((event, index) => (
                            <div key={index} className="event-item">
                                <div className="event-name">{event.name}</div>
                                <div className="event-date">{event.date}</div>
                                <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="event-link"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>No upcoming events.</p>
                    )}
                </div>

                <div className="text-center mt-5">
                    <Link to="/College-Tracker">
                        <Button className="back-button">
                            Back to Shortlist
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default CollegeDetail;
