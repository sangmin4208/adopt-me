import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    // typically you would log this to something like TrackJS or NewRelic
    console.error('🐛 ErrorBoundary caught an error', error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. Try again later.
          <Link to="/">Click here</Link> to go back to the home page or wait
        </h1>
      )
    }
    return this.props.children
  }
}
