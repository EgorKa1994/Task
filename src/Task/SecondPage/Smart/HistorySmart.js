import React, { Component } from 'react';

export class History extends Component {
  state = {
    history: null,
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await fetch(`http://localhost:3005/historyData`);
      const history = await response.json();
      this.setState({ history: history });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return this.props.children(this.state);
  }
}
