import styled from 'styled-components';

export const Btn = styled.button`
    display: block;
    margin: 16px auto;
    width: 200px;
    height: 48px;
    font-size: 20px;
    border: 0;
    opacity: 1;
    color: #f0eeee;
    background-color: rgb(63, 81, 181);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    :hover {
    opacity: 0.8;
    }
`;