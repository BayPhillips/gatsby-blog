import React, { Component } from 'react';
// import CSS from 'uikit/dist/css/uikit.css';
import styled, { ThemeProvider } from 'styled-components';
import { themeVariables } from '../theme/themeVariables';

export const Wrapper = styled.div`
    .uk-section-primary {
        background: ${props => props.theme.primaryColor};
    }
    
    .uk-tile-primary {
        background: ${props => props.theme.primaryColor};
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