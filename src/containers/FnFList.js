import React from 'react';
import {connect} from 'react-redux'
import FnFCard from '../components/FnFCard';
import ReviewForm from '../components/ReviewForm/ReviewForm';
import AddConnection from '../components/AddConnection/AddConnection';

const FnFList = (props) => {
	let friends = props.connections.filter(
		(connection) => connection.accepted === true
	);
	let pending = props.connections.filter(
		(connection) => connection.accepted === false
	);
	return (
		<div className="fnf-list">
			<h3>Family</h3>
			{friends
				.filter((connect) => connect.relationship === "family")
				.map((connection, index) => (
					<FnFCard key={index} person={connection} />
				))}
			<h3>Friends</h3>
			{friends
				.filter((connect) => connect.relationship === "friend")
				.map((connection, index) => (
					<FnFCard key={index} person={connection} />
				))}
			<h3>Pending Requests</h3>
			{pending.map((connection, index) => (
				<FnFCard key={index} pending={true} person={connection} />
			))}
			<hr></hr>
			<button>Add Friend</button>
		</div>
	);
};

const msp = (state) => {
	return {
		connections: state.connections,
	};
};

export default connect(msp)(FnFList);
