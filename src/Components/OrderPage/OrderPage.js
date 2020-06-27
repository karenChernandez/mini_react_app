import React, { Component } from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';




class OrderPage extends Component{
    constructor(props){
        super(props);

        this.state={
        
            itemOrder:'',
            quantity: '',
            clientOrder: []
            
        }
    }

    componentDidMount(){
        axios.get('/api/clientOrders')
            .then(res => this.setState({ clientOrder:res.data}))
    }

    handleOrder=item=>{
        this.setState({itemOrder:item})
    }
    handleQuantity=amount=>{
        this.setState({quantity:amount})
    }
    handleSubmitOrder=()=>{
        axios.post('/api/clientOrders', {
            itemOrder:this.state.itemOrder,
            quantity:this.state.quantity
        }).then(res=>{
            console.log('What is RES?', res.data)
            this.setState({clientOrder:res.data})
        })
        
    }
    // handleUpdate = (jelly) => {
    //     axios.put(`/api/clientOrders/${jelly}`, {

    //         itemOrder:this.state.itemOrder,
    //         quantity:this.state.quantity

    // }).then(res=>{
    //     console.log('What is res.data?', res.data)
    //     this.setState({clientOrder:res.data})
    // })
    // }

    handleUpdate=(id)=>{
        axios.put(`/api/clientOrders/${id}`, {
            itemOrder:this.state.itemOrder,
            quantity:this.state.quantity
        }).then(res=>{
            this.setState({clientOrder:res.data})
        })
    }

   


    handleDelete=(id)=>{
        axios.delete(`/api/clientOrders/${id}`, {
            itemOrder:this.state.itemOrder,
            quantity:this.state.quantity

        }).then(res=>this.setState({clientOrder:res.data}))
    }
   



   


    render(){
        console.log('whats on this.STATE', this.state)
        console.log('what is in the array?', this.state.clientOrder)
        console.log('what is Props?', this.props)
            
        
        

        return(
            <div>
                <h1>What would you like to order?</h1>
                <input placeholder="Yummy!" value={this.state.orderItem}onChange={event=>this.handleOrder(event.target.value)}/>
                <input placeholder="Amount" value={this.state.quantity} onChange={event=>this.handleQuantity(event.target.value)}/>
                {/* <button onClick={()=>this.handleSubmitOrder()}>Submit</button>
                 */}
                {/* <button onClick={() => this.handleUpdate(this.props.match.params.id)}>Update</button> */}
                {/* {this.props.match.path === '/Update/:id' ? 
                    <button onClick={() => this.handleUpdate(this.props.match.params.id)}>Update</button> :
                <button onClick={()=>this.handleSubmitOrder()}>Submit!</button>} */}
                {this.props.match.path === '/Update/:id' ?
                <button onClick={()=>this.handleUpdate(this.props.match.params.id)}>Update!</button> :
                <button onClick={()=>this.handleSubmitOrder()}>Submit</button>
                }

                
                <Link to='/ConfirmationPage'>Confirm Order!</Link>
            </div>
        )
    }
}

export default withRouter(OrderPage);