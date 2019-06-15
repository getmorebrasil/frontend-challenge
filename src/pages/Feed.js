import React, { Component } from "react";
import api from "../services/api";
import "./Feed.css";

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
                    <article>
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
                                    <a href={"/stores/" + data.id} >Ver detalhes</a>
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