import React from 'react';

class Store extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStores();
    }

    render() {
        return null;
    }
}

export default Store;