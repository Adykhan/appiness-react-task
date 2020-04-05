import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadEmployees } from "../../store/actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadEmployees();
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <h5 style={{ textAlign: "center" }}>DASHBOARD</h5>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone No.</th>
            </tr>
          </thead>

          <tbody>
            {this.props.users.map((data, index) => {
              return (
                <tr key={data.id}>
                  <th>{data.id}</th>
                  <th>{data.name}</th>
                  <th>{data.age}</th>
                  <th>{data.gender}</th>
                  <th>{data.email}</th>
                  <th>{data.phoneNo}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadEmployees: bindActionCreators(loadEmployees, dispatch),
  };
};

Dashboard.defaultProps = {
  users: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
