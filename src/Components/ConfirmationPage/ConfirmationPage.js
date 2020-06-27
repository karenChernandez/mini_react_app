import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ConfirmationPage extends Component{
    constructor(props){
        super(props);

        this.state={
            updatedList:[]
        }
    }
componentDidMount(){
    axios.get('/api/clientOrders').then(res=>
        this.setState({updatedList:res.data})
    )
}
handleDelete=(id)=>{

    axios.delete(`/api/clientOrders/${id}`)
    .then(res=>this.setState({updatedList:res.data}))
}










render(){
    console.log('Confirmation Page Props!', this.props)

    const mappedOrders=this.state.updatedList.map(objectOrder=>{

        return <div key={objectOrder.id}>

                <h1>Item: {objectOrder.itemorder}</h1>
                <h1>How many? {objectOrder.quantity}</h1>
                <button onClick={()=>this.handleDelete(objectOrder.id)}>Delete</button>
            

             

            <Link to={`/Update/${objectOrder.id}`}>Update</Link>
            
        </div>
    })
    return(
        <div>
            <h1>THIS IS THE ConfirmationPage!</h1>
            {mappedOrders}
        </div>
    )
    }
}
export default ConfirmationPage;

