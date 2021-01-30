import React from "react";
import PropTypes from "prop-types";
import Video from "./tabSection/Video";
import Cast from "./tabSection/Cast";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 20px;
    height: 69%;
`;

const TabList = styled.ul`
    display: flex;
    align-items: center;
`;

const Tab = styled.li`
    height: 50px;
    width: 100px;
    font-size: 16px;
    font-weight: 600;
    background-color: rgb(20, 20, 20);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-right: 10px;
    cursor: pointer;
    background-color: ${(props) => (props.current ? "#FFFFFF" : "#141414")};
    color: ${(props) => (props.current ? "#141414" : "#FFFFFF")};
`;

const Item = styled.div`
    height: 100%;
    overflow: auto;
    background-color: rgb(20, 20, 20);
    padding: 10px 0px;
    border-radius: 5px;
`;

const Tabs = ({ activeId, onClickHandler, result, crew }) => {
    const tabObj = {
        0: {
            title: "Video",
            comp: result.videos && result.videos.results && result.videos.results.length > 0 && (
                <Video result={result.videos.results} />
            ),
        },
        1: { title: "Cast", comp: <Cast crew={crew} /> },
    };

    return (
        <Container>
            <TabList>
                <Tab onClick={() => onClickHandler(0)} current={activeId === 0}>
                    {tabObj[0].title}
                </Tab>
                <Tab onClick={() => onClickHandler(1)} current={activeId === 1}>
                    {tabObj[1].title}
                </Tab>
            </TabList>
            <Item>{tabObj[activeId].comp}</Item>
        </Container>
    );
};

Tabs.propTypes = {
    result: PropTypes.object,
    activeId: PropTypes.number.isRequired,
    onClickHandler: PropTypes.func.isRequired,
};

export default Tabs;
