import React, { Component } from "react";
import api from "../services/api";
import "./Feed.css";
import {Link} from 'react-router-dom';

class Feed extends Component {
    state = {
        feed: [],
    }; // Creating somewhere to put the state

    async componentDidMount() {  // This is called every time the component mounts
        const response = await api.get('stores');
        // "response" stores the requisition response

        console.log(response);

        this.setState({ feed: response.data });
        // changes feed state according to requisition data
    }

    render() {
        const { feed } = this.state;
        return (
            <section id='store-list'>

                {/* lists data. 1 article per store */}
                {feed.map((data) =>
                    <article className='p-2'>
                        <img src={data.image_blob} alt="storefront" />
                        <div className='details'>
                            <ul>
                                <li>
                                    <strong> {data.name} </strong>
                                </li>
                                <li>
                                    <span>Takeback: {data.takeback.toFixed(2)}%</span>
                                </li>
                                <li>
                                    <Link to={`/stores/${data.id}`}>
                                        <button className='btn btn-primary mt-1'>Ver detalhes</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </article>
                )}

            </section>
        );
    }
}

export default Feed;