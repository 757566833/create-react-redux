import React from 'react';
import { withRouter } from 'react-router-dom';
class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.isMount = true;
    }
    componentWillUnmount = () => {
        this.isMount = false;
    }
    render() {
        return (
            <div>
                SearchHeader
            </div>
        );
    }
}
export default withRouter(SearchHeader);