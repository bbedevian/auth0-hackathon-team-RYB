import React, { useEffect } from "react";
import classes from "./ReviewForm.module.css";

const ReviewForm = () => {
	useEffect(() => {
		console.log("CALLING THE HOOK");
		const range = document.getElementById("range"),
			rangeV = document.getElementById("rangeV"),
			setValue = () => {
				console.log(range.value);
				if (range.value === "1")
					rangeV.style.transform = "translateX(-60px)";
				if (range.value === "2")
					rangeV.style.transform = "translateX(-30px)";
				if (range.value === "3")
					rangeV.style.transform = "translateX(-0px)";
				if (range.value === "4")
					rangeV.style.transform = "translateX(30px)";
				if (range.value === "5")
					rangeV.style.transform = "translateX(60px)";
				rangeV.innerHTML = `<span>${
					range.value ? range.value : range.defaultValue
				}</span>`;
			};
		setValue();
		range.addEventListener("input", setValue);
	});

	return (
		<div>
			<form>
				<p>Please rate your most recent experience at WHOLE FOODS</p>
				<label>On a scale of 1 to 5 how crowded was it? </label>
				<div className={classes.Bubble} id="rangeV"></div>
				<input
					id="range"
					type="range"
					name="crowded"
					min="1"
					max="5"
					defaultValue="3"
				/>
				<div>
					<p>Were employees wearing masks?</p>
					<div className={classes.Checkbox}>
						<label for="employeesYes">Yes</label>
						<input
							type="checkbox"
							id="employeesYes"
							name="employeesYes"
							value={true}
						/>
					</div>
					<label for="employeesNo">No</label>
					<input
						type="checkbox"
						id="employeesNo"
						name="employeesNo"
						value={false}
					/>
				</div>
				<div>
					<p>Were customers wearing masks?</p>
					<div className={classes.Checkbox}>
						<label for="customersYes">Yes</label>
						<input
							type="checkbox"
							id="customersYes"
							name="customersYes"
							value={true}
						/>
					</div>
					<label for="customersNo">No</label>
					<input
						type="checkbox"
						id="customersNo"
						name="customersNo"
						value={false}
					/>
				</div>
				<div>
					<p>
						Is there anything else you would like people to know about
						WHOLE FOODS?
					</p>
					<textarea name="additionalComments" rows="5" cols="50" />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
export default ReviewForm;
