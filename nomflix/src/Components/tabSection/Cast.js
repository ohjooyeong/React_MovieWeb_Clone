import React from "react";
import styled from "styled-components";
import noPoster from "../../assets/noPosterSmall.png";

const Container = styled.div``;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 180px);
    grid-gap: 25px;
    justify-content: center;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.div`
    background-image: url(${(props) => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.2s linear;
    margin-bottom: 5px;
`;

const Name = styled.span`
    font-size: 14px;
    margin-bottom: 5px;
`;

const Character = styled.span`
    font-size: 12px;
    color: rgba(190, 190, 190);
`;

const Cast = ({ crew }) => (
    <Container>
        {console.log(crew.cast)}
        <Grid>
            {crew.cast &&
                crew.cast.length > 0 &&
                crew.cast.map((cast) => (
                    <Item>
                        <Image
                            bgUrl={
                                cast.profile_path
                                    ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                                    : `${noPoster}`
                            }
                        />
                        <Name>{cast.name}</Name>
                        <Character>{cast.character}</Character>
                    </Item>
                ))}
        </Grid>
    </Container>
);

export default Cast;
