import React, { Component } from 'react'

export default class CandyList extends Component {
    render () {
        return (
            <section className="CandyList">
            <h1>Candy List</h1>
            {
                this.props.candyTypes.map(candytype =>
                    <div key={`candy-${candytype.id}`}>
                    {candytype.name}
                     Candies: {
                         this.props.candies
                        .filter(candy => candy.typeId === candytype.id)
                        .map(c => c.name).join(", ")
                    }
                    </div>
                    )
                }
                </section>
                )
            }
}



