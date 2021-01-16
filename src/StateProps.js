import React, { Component } from "react";
import Operan from "./Operan.js";

export default class StateProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: "bakso",
    };
  }
  gantiMakanan(nama_baru) {
    this.setState({
      makanan: nama_baru,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button
          onClick={() => this.gantiMakanan("soto")}
          className="btn btn-primary"
        >
          Ganti Nama
        </button>
        <Operan makanan={this.state.makanan} />
      </div>
    );
  }
}
