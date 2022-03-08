import React from 'react'
import './ErrorModal.css'
export default class ErrorModal extends React.Component {
    render() {
    return (
        <div className='backdrop' onClick={this.props.onConfirm}>ErrorModal
            <header className='header'>
                <h2>
                    {this.props.title}
                </h2>
                <div className='content'>
                    {this.props.message}
                </div>
                <footer className='action'>
                    <button onClick={this.props.onConfirm}>Okay!</button>
                </footer>
            </header>
        </div>
    )
}
}
