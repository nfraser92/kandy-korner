import React, { Component } from "react"



export default class StoreList extends Component {
    render () {
        return(
            <article className="locations">
            <h1>Locations</h1>
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                    {store.name} {store.address}
                    </div>
                )
            }
    </article>
            )
    }
}
