import React, { Component } from "react";
import api from '../services/api';

class StoreDetails extends Component {
    state = {
        details: [],
    }; // Creating somewhere to put the state

    async componentDidMount() {  // This is called every time the component mounts
        const response = await api.get(`stores/${this.props.match.params.id}`);
        // "response" stores the requisition response

        // console.log(response); // debug

        this.setState({ details: response.data });
        // changes details state according to requisition data
    }

    render() {
        const { details } = this.state;
        return (
            <section id='store-details'>
                <h1>{details.name}</h1>
                <p>{details.takeback}</p>
                <p>{details.rating}</p>
                <a href={details.url}> link </a>
                <img src={details.image_blob} alt="storefront" />
                
                {/* Don't understand why I cannot map details.category. Will revisit later. */}

                {/* {details.map((category) =>
                    <p>{category}</p>
                )} */}
            </section>
        );
    }
}

export default StoreDetails;