import React from "react"

class Roll2 extends React.Component{
    constructor(){
        super();
        this.state = {
            width: 100,
            height: 100,
            background: 'red',
            borderRadius: 100,
            position: 'absolute',
            left: 0,
            top:0
        }
    }

    render(){
        return(
            <div style={{width:this.state.width,height:this.state.height,
                background:this.state.background,borderRadius:this.state.borderRadius,
                position:this.state.position,left:this.state.left,top:this.state.top
            }}>
            </div>
        )
    }

    componentWillMount(){

    }
}


export default Roll2
