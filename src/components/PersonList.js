import React from "react";
import axios from "axios";

 class PersonList extends React.Component {
    
    
    state = {
        disk: [],
        cpuD:[]
    }

    componentDidMount() {
        

        axios.get(`http://localhost:3030/disk`)
            .then(res => {
                this.setState({ disk: res.data })
            });

            axios.get(`http://localhost:3030/cpu`)
            .then(res => {
                this.setState({ cpuD: res.data });
                console.log(this.state);
            })
        }

        
     
    render() {

       const  dados = this.state.cpuD.speed
        
        return (
            <div>
                <ul>
                    {this.state.disk.map(disk => <li>{disk.name} | {disk.vendor}</li>)}
                    
                </ul>
                <ul >
                    <li>{dados}</li>
                    <li>{this.state.cpuD.brand}</li>
                </ul>              
            </div>
        )
    }
}


export default PersonList