import React from "react";
import { connect } from "react-redux";
import FnFCard from "../components/FnFCard";

const FnFList = (props) => {
	return (
		<div>
			<h1>Family</h1>
			{props.connections
				.filter((connect) => connect.relationship === "family")
				.map((connection) => (
					<FnFCard person={connection} />
				))}
			<h1>Friends</h1>
			{props.connections
				.filter((connect) => connect.relationship === "friend")
				.map((connection) => (
					<FnFCard person={connection} />
				))}
		</div>
	);
};

const msp = (state) => {
	return {
		connections: state.connections,
	};
};

export default connect(msp)(FnFList);
