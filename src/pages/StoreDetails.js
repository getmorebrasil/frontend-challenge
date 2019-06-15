import React, { Component } from "react";
import api from '../services/api';
import './StoreDetails.css';

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
                <div className='box'>
                    <img src={details.image_blob} alt="storefront" />
                    <ul>
                        <li>
                            <strong>{details.name}</strong>
                        </li>
                        <span>Takeback: {details.takeback}%</span>
                        <li>
                            <span>Rating: {details.rating}</span>
                        </li>
                        <p>Site: <a href={details.url}> {details.url} </a></p>

                        {/* Don't understand why I cannot map details.category. Will revisit later. */}
                        {/* {details.map((category) =>
                        <p>{category}</p>
                        )} */}
                        <p>
                            <a href='/'> Back to home</a>
                        </p>
                    </ul>
                </div>
            </section>
        );
    }
}

export default StoreDetails;