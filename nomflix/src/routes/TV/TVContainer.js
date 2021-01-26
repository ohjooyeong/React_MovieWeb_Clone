import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class TVContainer extends Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null,
    };

    async componentDidMount() {
        try {
            // 비구조화 할당
            // 데이터 객체안에 리터럴이나 배열로 이뤄진 데이터를 unpack 하고 변수명을 정할 수 있음.
            const {
                data: { results: topRated },
            } = await tvApi.topRated();
            // console.log(nowPlaying);

            const {
                data: { results: popular },
            } = await tvApi.popular();

            const {
                data: { results: airingToday },
            } = await tvApi.airingToday();

            // 객체 프로퍼티
            // 를 사용해서 변수명이 같으면 축약함.
            this.setState({
                topRated,
                popular,
                airingToday,
            });
        } catch {
            this.setState({
                error: "Can't find TV information.",
            });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { topRated, popular, airingToday, loading, error } = this.state;
        console.log(this.state);
        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}
