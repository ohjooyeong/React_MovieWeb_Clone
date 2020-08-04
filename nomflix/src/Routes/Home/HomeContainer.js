import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        loading: true,
        error: null,
    };

    // 전체 api 요청을 여기서 할 수 있다. (따로 함수를 만들어서 요청을 할 수도 있음)
    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying },
            } = await moviesApi.nowPlaying();
            const {
                data: { results: upcoming },
            } = await moviesApi.upcoming();
            const {
                data: { results: popular },
            } = await moviesApi.popular();
            this.setState({ nowPlaying, upcoming, popular });
        } catch {
            this.setState({
                error: "영화 정보를 찾을 수 없습니다.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                loading={loading}
                error={error}
            />
        );
    }
}