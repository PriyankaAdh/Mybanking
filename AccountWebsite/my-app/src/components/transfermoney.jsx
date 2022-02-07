import React, { Component } from 'react';

export class TransferMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TransferTo: "",
            TransferFrom: "",
            TransferAmount: 0
        }
    }

    transferMoneyClick(acc) {
        this.setState({
            modalTitle: "Transfer Amount",
            TransferTo: "",
            TrasnferFrom: "",
            TransferAmount: 0
        });
    }

    changeTransferTo = (e) => {
        this.setState({ TransferTo: e.target.value });
    }

    changeTransferFrom = (e) => {
        this.setState({ TransferFrom: e.target.value });
    }

    changeTransferAmount = (e) => {
        this.setState({ TransferMoney: e.target.value });
    }

    transferAmountUpdate() {
        fetch("https://localhost:44309/api/Account", {
            method: 'TransferAmount',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                modalTitle: "Transfer Amount",
                TransferTo: this.state.TransferTo,
                TrasnferFrom: this.state.TrasnferFrom,
                TransferAmount: this.state.TransferAmount
            })
        })
            .then(res => res.json()).then((result) => {
                alert(result);
                this.refreshList();
            }, (error) => {
                this.refreshList();
            })
    }
    render() {
        const {
            TransferTo
        } = this.state;
        return (
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
                                        <span className="input-group-text">Transfer To</span>
                                        <input type="text" className="form-control"
                                            value={this.TransferTo}
                                            onChange={this.changeTransferTo} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Transfer From</span>
                                        <input type="text" className="form-control"
                                            value={this.TransferFrom}
                                            onChange={this.changeTransferFrom} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Transfer Amount</span>
                                        <input type="number" className="form-control"
                                            value={this.TransferAmount}
                                            onChange={this.changeTransferAmount} />
                                    </div>
                                </div>
                                {TransferTo !== "" ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.transferMoneyClick()}
                                    >Update</button>
                                    : null}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TransferMoney;

