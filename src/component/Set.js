import React from "react"

class Set extends React.Component {
    render(props) {
        return (
            <div>
                {this.props.num1}
                <ul>
                    {
                        this.props.arr.map((val, i) => {
                            return <li key={i}>{val.Country}---{val.capital}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Set
