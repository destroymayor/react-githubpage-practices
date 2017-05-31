import React, { Component, PropTypes } from 'react';
import CommentApp from './CommentApp';
import Bar from './Bar'

export default class Main extends Component {

    render() {
        return (
            <div style={ { backgroundColor: '#fff' } }>
              <Bar />
              <CommentApp />
            </div>
        )
    }
}