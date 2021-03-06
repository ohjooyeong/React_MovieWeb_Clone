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
            // 비구조화 할당
            // 데이터 객체안에 리터럴이나 배열로 이뤄진 데이터를 unpack 하고 변수명을 정할 수 있음.
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

            // 객체 프로퍼티
            // 를 사용해서 변수명이 같으면 축약함.
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
