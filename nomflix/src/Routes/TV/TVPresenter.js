import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {topRated && topRated.length > 0 && (
                <Section title="최고 평점 TV컨텐츠">
                    {topRated.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={
                                show.first_air_date &&
                                show.first_air_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="인기 TV컨텐츠">
                    {popular.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={
                                show.first_air_date &&
                                show.first_air_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title="오늘 방송">
                    {topRated.map((show) => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={
                                show.first_air_date &&
                                show.first_air_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
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
