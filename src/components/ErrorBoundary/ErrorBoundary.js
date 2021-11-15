import React, {Component} from 'react';
import ErrorComponent from "../ErrorComponent/ErrorComponent";

export default class ErrorBoundary extends Component {

    state = {
        error: false,
        errorInfo: null
    }

    componentDidCatch(_, errorInfo) {
        this.setState({
            error: true,
            errorInfo: errorInfo.componentStack
        })
    }

    render() {
        const {children} = this.props
        const {error, errorInfo} = this.state
        return error ? <ErrorComponent message={errorInfo}/> : children
    }
}