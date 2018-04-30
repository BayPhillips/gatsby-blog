import React, { Component } from 'react';
import CSS from 'uikit/dist/css/uikit.css';
import styled, { ThemeProvider } from 'styled-components';
import { themeVariables } from '../theme/themeVariables';

export const Wrapper = styled.div`
    .uk-section-primary {
        background: ${props => props.theme.primaryColor};
    }
    
    .uk-tile-primary {
        background: ${props => props.theme.primaryColor};
    }

    .uk-section {
        padding-top: 200px;
    }

    .uk-button-primary {
        background-color: ${props => props.theme.primaryColor};
        color: #fff;
        border: 1px solid transparent;
    }

    .uk-button-primary:hover,
    .uk-button-primary:focus {
        background-color: #8cada0;
        color: #fff;
    }

    .uk-input,
    .uk-select,
    .uk-textarea {
        border: 1px solid #333;
    }
`;

class LocalStyling extends Component {
    render() {
        return (
            <ThemeProvider theme={themeVariables}>
                <Wrapper>
                    {this.props.children}
                </Wrapper>
            </ThemeProvider>
        );
    }
}

export default LocalStyling;