import React from 'react';
import { withRouter } from 'react-router-dom';
export let SearchHeaderRef;
class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.isMount = true;
        SearchHeaderRef = this;
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