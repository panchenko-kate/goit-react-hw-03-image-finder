import { Component } from "react";
import { CgSearch } from "react-icons/cg"
import { Div, Form, Input, Btn } from './Searchbar.styled';

export default class SearchBar extends Component {
    state = {
        tag: '',
    }

    hangleTagChange = e => {
        this.setState({ tag: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.tag.trim() === '') {
            alert('Please enter an image keyword', );
            return;
        }
        this.props.onSubmit(this.state.tag);
        this.setState({ tag: ''});
    };


    render() {
        return (
            <Div className="searchbar">
            <Form onSubmit={this.handleSubmit}>
            <Btn type="submit">
                <CgSearch  />
            </Btn>
                {/* <Label> */}
                <Input
                type="text"
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




