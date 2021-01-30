import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

const Container = styled.div``;

const PlayItem = styled.li`
    width: 400px;
    display: inline-block;
    margin: 0 10px 10px 0;
`;

const opts = {
    height: "240",
    width: "420",
    playerVars: {
        autoplay: 0,
        rel: 0,
    },
};

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 420px);
    grid-gap: 25px;
    justify-content: center;
`;

const Video = ({ result }) => (
    <Container>
        <Grid>
            {console.log(result)}
            {result &&
                result.length > 0 &&
                result.map((v) => (
                    <PlayItem key={v.id}>
                        <YouTube videoId={v.key} opts={opts} />
                    </PlayItem>
                ))}
        </Grid>
    </Container>
);

export default Video;
