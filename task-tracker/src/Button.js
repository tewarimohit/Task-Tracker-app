const Button = props => {
	return (
		<div>
			<button
				onClick={props.onClick}
				style={{ backgroundColor: props.color }}
				className="btn"
			>
				{props.text}
			</button>
		</div>
	);
};

export default Button;
