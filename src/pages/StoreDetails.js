import React, { Component } from "react";
import api from '../services/api';
import './StoreDetails.css';
import { Link } from 'react-router-dom';

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
        console.log(details.category);
        // details.category.map(c=>console.log(c));
        return (
            <section id='store-details'>
                <div className='box'>
                    <img src={details.image_blob} alt="storefront" />
                    <ul>
                        <li>
                            <strong>{details.name}</strong>
                        </li>
                        <li>
                            <span>Takeback: {details.takeback}%</span>
                        </li>
                        <li>
                            <span>Rating: {details.rating}</span>
                        </li>
                        <li>
                            <span>Categorias: </span>
                        </li>
                        <li>
                            {details.category && details.category.map((category) =>
                                <span>{category}, </span>
                            )}
                        </li>
                        <p>Site: <a href={details.url}> {details.url} </a></p>

                        <Link to='/'>
                            <span>Back to home </span>
                        </Link>
                    </ul>
                </div>
            </section>
        );
    }
}

export default StoreDetails;