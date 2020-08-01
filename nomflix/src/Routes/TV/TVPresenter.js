import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="최고 평점 TV컨텐츠">
                    {topRated.map((show) => show.name)}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="인기 TV컨텐츠">
                    {popular.map((show) => show.name)}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title="오늘 방송">
                    {topRated.map((show) => show.name)}
                </Section>
            )}
        </Container>
    );

TVPresenter.prototype = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
