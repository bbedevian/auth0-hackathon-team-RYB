import React, { useState } from "react";
import Backdrop from "./Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
	return (
		<React.Fragment>
			<Backdrop clicked={props.closeModal} show={props.modalShow} />
			<div
				className={classes.Modal}
				style={{
					transform: props.modalShow
						? "translateY(0)"
						: "translateY(-100vh)",
					opacity: props.modalShow ? "1" : "0",
				}}
			>
				{props.children}
			</div>
		</React.Fragment>
	);
};

export default Modal;
