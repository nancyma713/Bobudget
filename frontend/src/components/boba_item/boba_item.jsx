import React from 'react';

class BobaItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBobaItems();
    }

    render() {
        return null;
    }
}

export default BobaItem;