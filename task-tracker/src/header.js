import Button from "./Button";

const Header = prop => {
	return (
		<header className="header">
			<h1>Task Tracker</h1>
			<Button
				color={prop.showAdd ? "red" : "skyblue"}
				text={prop.showAdd ? "Close" : "Add"}
				onClick={prop.onAdd}
			/>
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

export default Header;
