import React from "react"

class Roll extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div style={{width:this.state.width,height:this.state.height,
                background:this.state.background,borderRadius:this.state.borderRadius,
                position:this.state.position,left:this.state.left,top:this.state.top
            }}>
            </div>
        )
    }

    componentWillMount() {
        let tag = true;
        setInterval(() => {
           if(tag===true){
               this.state.left += 10;

               this.state.left>=500?tag=false:tag=true;
           }else{
               this.state.left -= 10;

               this.state.left<=0?tag=true:tag=false;
           }
            this.setState({
                left:this.state.left,

            })

        }, 40)
    }
}

export default Roll
