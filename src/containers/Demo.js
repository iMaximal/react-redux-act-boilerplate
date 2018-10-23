import React, { Component } from 'react';

class Demo extends Component {
    goBack = () => {
        this.props.history.goBack();
    };

    render() {

        return (
            <div>
                <h1>Demo page</h1>
                <button
                    onClick={ this.goBack }
                >
                    Go back
                </button>
            </div>
        );
    }
}

export default Demo;
