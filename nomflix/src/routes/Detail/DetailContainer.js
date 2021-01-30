import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class DetailContainer extends Component {
    constructor(props) {
        super(props);
        // console.log("constructor:", props);
        const {
            location: { pathname },
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            activeId: 0,
            crew: null,
            isMovie: pathname.includes("/movie/"),
        };
    }

    onClickHandler = (id) => {
        this.setState({ activeId: id });
    };

    async componentDidMount() {
        const {
            match: {
                params: { id },
            },
            history: { push },
        } = this.props;
        const { isMovie } = this.state;
        // console.log("componentDidmount", this.props);
        const numberId = Number(id);
        if (isNaN(numberId)) {
            return push("/");
        }
        let result = null;
        let crew = null;
        try {
            if (isMovie) {
                const request = await movieApi.movieDetail(numberId);
                const request2 = await movieApi.movieCrew(numberId);
                result = request.data;
                crew = request2.data;
            } else {
                const request = await tvApi.tvDetail(numberId);
                const request2 = await tvApi.tvCrew(numberId);
                result = request.data;
                crew = request2.data;
            }
        } catch {
            this.setState({ error: "Can't find anything" });
        } finally {
            this.setState({ loading: false, result, crew });
        }
    }

    render() {
        const { result, error, loading, activeId, crew } = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
                activeId={activeId}
                crew={crew}
                onClickHandler={this.onClickHandler}
            />
        );
    }
}
