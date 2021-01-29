import React, { Component } from "react";
import { movieApi, tvApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default class SearchContainer extends Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: true,
        error: null,
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== "") {
            this.searchByTerm();
        }
    };

    updateTerm = (event) => {
        const {
            target: { value },
        } = event;
        this.setState({
            searchTerm: value,
        });
    };

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        try {
            const {
                data: { results: movieResults },
            } = await movieApi.search(searchTerm);
            const {
                data: { results: tvResults },
            } = await tvApi.search(searchTerm);
            // console.log(movieResults, tvResults);
            this.setState({ movieResults, tvResults });
        } catch {
            this.setState({ error: "Can't find results" });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { movieResults, tvResults, searchTerm, loading, error, updateTerm } = this.state;
        console.log(this.state);
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}
