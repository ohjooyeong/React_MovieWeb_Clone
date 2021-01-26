import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "../../api";

export default class HomeContainer extends Component {
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying },
            } = await movieApi.nowPlaying();
            // console.log(nowPlaying);

            const {
                data: { results: upComing },
            } = await movieApi.upComing();

            const {
                data: { results: popular },
            } = await movieApi.popular();

            // 객체 프로퍼티를 사용해서 변수명이 같으면 축약함.
            this.setState({
                nowPlaying,
                upComing,
                popular,
            });
        } catch {
            this.setState({
                error: "Can't find movies information.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { nowPlaying, upComing, popular, error, loading } = this.state;
        console.log(this.state);
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upComing={upComing}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}
