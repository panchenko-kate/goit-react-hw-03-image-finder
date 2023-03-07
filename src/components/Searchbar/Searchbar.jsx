import { Component } from "react";
import { Div, Form, Btn, Input } from './Searchbar.styled';

export default class SearchBar extends Component {
    state = {
        tag: '',
    }

    hangleTagChange = e => {
        this.setState({ tag: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.tag);

        this.setState({ tag: ''});
    };


    render() {
        return (
            <Div className="searchbar">
            <Form onSubmit={this.handleSubmit}>
                <Btn type="submit">
                <span>Search</span>
                </Btn>
                {/* <Label> */}
                <Input
                type="text"
                // autocomplete="off"
                // autofocus
                placeholder="Search images and photos"
                value={this.state.tag}
                onChange={this.hangleTagChange}
                />
                {/* </Label> */}
            </Form>
            </Div>
        );
    };
};




