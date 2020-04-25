import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function Detail({ toDo, deleteToDo }) {
  return (
    <>
      <h1>Content: {toDo?.text}</h1>
      <h2>ID: {toDo?.id}</h2>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    toDo: state.find((toDo) => toDo.id === parseInt(id)),
  };
}

export default connect(mapStateToProps)(Detail);
