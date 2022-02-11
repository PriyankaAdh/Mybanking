import React, { Component } from "react";

class Login extends Component {
    state = {        
        clientid: '',
        clientname: ''     
    }
    nameChangeHandler = (evt) => {
        this.setState({
            clientname: evt.target.value
        })
    }
    idChangeHandler = (evt) => {
        this.setState({
            clientid: evt.target.value
        })
    }    
   
    submitClick() {
        fetch("https://localhost:44309/api/Account?clientId=${encodeURIComponent(this.state.clientid)}&clientName=${encodeURIComponent(this.state.clientname)}", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json()).then((result) => {
                this.props.history.push('/client/');;
            }, (error) => { console.log(error);})
    }
    submitHandler = (evt) => {
        evt.preventDefault();
        if (this.state.clientname === '' && this.state.clientid === 0) {
            this.setState({
                clientNameError: 'Fill in your name.',
                clientIdError: ' Fill in a Id of your choice.'                
            })
        } 
        }   
    render() {
        return <div>
            <form action="#" onSubmit={this.submitHandler}>                
            <br />         
                <div className="mb-3">
                    <label htmlFor="cid" className="form-label">Client ID : </label>
                    <input name="clientid" required  onChange={this.idChangeHandler} type="text" className="form-control" id="cid" value={this.state.clientid}  />
                    <div className="text-danger">{this.state.clientIdError}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cname" className="form-label">Client Name : </label>
                    <input name="clientname" required  onChange={this.nameChangeHandler} type="text" className="form-control" id="cname" value={this.state.clientname} />
                    <div className="text-danger">{this.state.clientNameError}</div>
                </div>
                <button type="submit" className="btn btn-primary"  onClick={() => this.submitClick()}>Submit</button>              
            </form> 
        </div>
    }
}
export default Login;