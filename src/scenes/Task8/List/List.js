import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import styled from "styled-components";
import { routes } from '../App';

const List = ({match}) => {
    return (
        <p></p>
    );
};

List.propTypes = {

};




const TodoInput = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03); 
  box-sizing: border-box;
  font-size: 15px;
`;


const TodoUl = styled.ul`
  padding: 0;
  margin: 0;  
  list-style-type: none;
  max-height: 300px;
  overflow: auto;
`;

const TodoLength = styled.li`
  position: absolute;
  top: 0;
  left: 20px;
`;

export default List;