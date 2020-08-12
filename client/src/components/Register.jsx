import React, { Component } from 'react';
// import classnames from 'classnames';
import { connect } from 'react-redux';
// create an auth action for this
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Form, Card, Button } from 'react-bootstrap';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {},
            clickedHome: false
        }
        // this.handleChange = this.handleChange.bind(this);
        
    }

    render() { 
        return (  
            <div>
                Register
            </div>
        );
    }
}
 
export default Register;