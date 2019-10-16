// how to make react-loadbable 
import React, { Component } from 'react'

const Loabable = ({
    loader,
    loading : Loading
}) => {
    return class LoadableComponent extends Component {
        state = {
            LoadedComponent: null
        }

        componentDidMount(){
            loader()
                .then(resp => {
                    this.setState({
                        LoadedComponent: resp.default
                    })
                })
        }

        render() {
            return (
                this.state.LoadedComponent
                ?
                <this.state.LoadedComponent />
                :
                <Loading />
            )
        }
    }
}

export default Loabable