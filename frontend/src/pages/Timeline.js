import React, { Component } from 'react';
import api from '../services/api';

import twitterLogo from '../twitter.svg';
import './Timeline.css';
import Tweet from '../components/Tweet';

export default class Timeline extends Component {
    state = {
        tweets: [],
        newTweet: '',
    };

    async componentDidMount() {
        const response = await api.get('/tweets');
        this.setState({ tweets: response.data });
    }

    handleInputChange = (e) => {
        this.setState({ newTweet: e.target.value });
    }

    handleNewTweet = async (e) => {
        if (e.keyCode !== 13) return;

        const content = this.state.newTweet;
        const author = localStorage.getItem('@twitter:username');

        await api.post('tweets', { content, author })

        this.setState({ newTweet: '' });

    }

    render() {
        return (
            <div className='timeline-wrapper'>
                <img height={24} src={twitterLogo} alt='Twuitter' />
                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder='O que está acontencendo?'
                    >
                    </textarea>
                </form>
                <ul className='tweet-list'>
                    {this.state.tweets.map(t => <Tweet key={t._id} tweet={t} />)}
                </ul>
            </div>

        );
    }
}
