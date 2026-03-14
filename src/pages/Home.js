import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import collegesData from "../data/college.json";
import CollegeCard from "../components/CollegeCard";

const Home = () => {
    const [colleges, setColleges] = useState([]);
    const [countryFilter, setCountryFilter] = useState("All");

    useEffect(() => {
        let colleges = collegesData.colleges;
        if (countryFilter !== "All") {
            colleges = colleges.filter(
                (college) => college.country === countryFilter
            );
        }
        colleges.sort((a, b) => a.rank - b.rank);
        setColleges(colleges);
    }, [countryFilter]);

    const countries = [
        "All",
        "United States",
        "Canada",
        "Germany",
        "Singapore",
    ];

    return (
        <Container>
            <div className="country-filter">
                {countries.map((country) => (
                    <div
                        className={`${
                            countryFilter === country
                                ? "country-active"
                                : "country"
                        }`}
                        onClick={() => setCountryFilter(country)}
                    >
                        {country}
                    </div>
                ))}
            </div>
            <div className="stat">
                <span className="stat-number">
                    {colleges.length}
                </span>
                <span className="stat-label">Schools</span>
            </div>
            <Row className="college-grid">
                {colleges.map((college) => (
                    <Col
                        key={college.id}
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        className="mb-4"
                    >
                        <CollegeCard college={college} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Home;
