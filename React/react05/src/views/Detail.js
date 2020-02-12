import React, { Component } from 'react';
import queryString from 'query-string'
class Detail extends Component {
    render() {
        return (
            <div>
                详情
            </div>
        );
    }
    //   React Native Tools插件  快捷键cdm
    componentDidMount() {
        console.log(this.props.match.params)
    }
    
}

export default Detail;