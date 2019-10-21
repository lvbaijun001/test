import React from "react"

class Sta extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            num:0
        }
    }

    render(){
        return(
            <div>
                {this.state.num} <br/>
                {this.state.date.toLocaleString()}
            </div>
        )
    }

    componentWillMount(){
        setInterval(()=>{
            this.tick()
        },1000)
    }

    tick(){
        this.setState({
            num:++this.state.num,
            date:new Date()
        })
    }

}



export default Sta