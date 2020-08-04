import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) =>
    loading ? (
        <Loader />
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="현재 상영중">
                    {nowPlaying.map((movie) => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            isMovie={true}
                            year={
                                movie.release_date &&
                                movie.release_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title="개봉 예정">
                    {upcoming.map((movie) => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            isMovie={true}
                            year={
                                movie.release_date &&
                                movie.release_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title="인기 영화">
                    {popular.map((movie) => (
                        <Poster
                            key={movie.id}
                            id={movie.id}
                            imageUrl={movie.poster_path}
                            title={movie.original_title}
                            rating={movie.vote_average}
                            isMovie={true}
                            year={
                                movie.release_date &&
                                movie.release_date.substring(0, 4)
                            }
                        />
                    ))}
                </Section>
            )}
            {error && <Message color="#e74c3c" text={error} />}
        </Container>
    );

HomePresenter.prototype = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
