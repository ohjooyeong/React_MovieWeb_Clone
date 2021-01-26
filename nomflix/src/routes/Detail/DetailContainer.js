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
            isMovie: pathname.includes("/movie/"),
        };
    }

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
        try {
            if (isMovie) {
                const request = await movieApi.movieDetail(numberId);
                result = request.data;
            } else {
                const request = await tvApi.tvDetail(numberId);
                result = request.data;
            }
        } catch {
            this.setState({ error: "Can't find anything" });
        } finally {
            this.setState({ loading: false, result });
        }
    }

    render() {
        const { result, error, loading } = this.state;
        console.log(this.state);
        return <DetailPresenter result={result} error={error} loading={loading} />;
    }
}
