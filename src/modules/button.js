import React, { Component } from 'react';
// CSS module import
import color from './Color.module.css';
// Regular css import
import'./button.css';

class Button extends Component {
    render() {
        return <input type="button" className={color.success} value="Error Button" />;
    }
}

export default Button;