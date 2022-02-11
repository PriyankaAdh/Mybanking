import React, { Component } from 'react';
import { TransferMoney } from './transfermoney'; 

export class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            ClientId: "",
            ClientName: "",
            AccountBalance: 0,
            TransferFrom ="",
            TransferTo ="",
            TransferAmount =0
        }
    }
    refreshList() {
        fetch("https://localhost:44309/api/Account")
            .then(response => response.json())
            .then(data => {
                this.setState({ clients: data });
            });
    }
    componentDidMount() {
        this.refreshList();
    }

    changeAccountbalance = (e) => {
        this.setState({ AccountBalance: e.target.value });
    }

    changeTransferTo = (e) => {
        this.setState({ TransferTo: e.target.value });
    }

    changeAccountbalance = (e) => {
        this.setState({ AccountBalance: e.target.value });
    }

    editClick(acc) {
        this.setState({
            modalTitle: "Edit Client",
            ClientId: acc.ClientId,
            ClientName: acc.ClientName,
            AccountBalance: acc.AccountBalance
        });
    }  
    
    updateClick() {
        fetch("https://localhost:44309/api/Account", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ClientId: this.state.ClientId,
                ClientName: this.state.ClientName,
                AccountBalance: this.state.AccountBalance
            })
        })
            .then(res => res.json()).then((result) => {
                alert(result); this.refreshList();
            }, (error) => { this.refreshList();})
    }
    transferClick() {
        fetch("https://localhost:44309/api/Account", {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                TransferFrom: this.state.ClientId,
                TransferTo: this.state.ClientName,
                TransferAmount: this.state.AccountBalance
            })
        })
            .then(res => res.json()).then((result) => {
                alert(result); this.refreshList();
            }, (error) => { this.refreshList();})
    }
    render() {
        const {
            clients,
            ClientId
        } = this.state;
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                Client Id
                            </th>
                            <th>
                                Client Name
                            </th>
                            <th>
                                Account Balance
                            </th>
                            <th>
                                Click To TopUp
                            </th>
                            <th>
                                Transfer Money
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(acc =>
                            <tr key={acc.ClientId}>
                                <td>{acc.ClientId}</td>
                                <td>{acc.ClientName}</td>
                                <td>{acc.AccountBalance}</td>
                                <td>
                                    <button type="button" className="btn btn-light mr-1"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(acc)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button> </td>
                                <td>
                                    <button type="button" className="btn btn-light mr-1"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={() => this.transferClick(acc)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button> </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="d-flex flex-row bd-highlight mb-3">

                                    <div className="p-2 w-50 bd-highlight">

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Account Balance</span>
                                            <input type="number" className="form-control"
                                                value={this.AccountBalance}
                                                onChange={this.changeAccountbalance} />
                                        </div>
                                    </div>

                                    {ClientId !== "" ?
                                        <button type="button"
                                            className="btn btn-primary float-start"
                                            onClick={() => this.updateClick()}
                                        >Update</button>
                                        : null}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="d-flex flex-row bd-highlight mb-3">

                                    <div className="p-2 w-50 bd-highlight">

                                        <div className="input-group mb-3">
                                            <span className="input-group-text"> Transfer From</span>
                                            <input type="number" className="form-control"
                                                value={this.TransferFrom}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"> Transfer To</span>
                                            <input type="number" className="form-control"
                                                value={this.TransferFrom}
                                                onChange={this.changeTransferTo} />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text"> Transfer Amount</span>
                                            <input type="number" className="form-control"
                                                value={this.TransferAmount}
                                                onChange={this.changeTransferAmount} />
                                        </div>
                                    </div>
                                    {ClientId !== "" ?
                                        <button type="button"
                                            className="btn btn-primary float-start"
                                            onClick={() => this.transferClick()}
                                        >TransferMoney</button>
                                        : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Client;