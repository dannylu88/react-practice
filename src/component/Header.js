import React from "react";
import Title from './Header/Title';


class Header extends React.Component {
	handleChange(e){
		console.log('handleChange', this);
		//e.target.value grab value in the input , see everything we change
		//we fire the handleChange function
		const title = e.target.value;
		this.props.changeTitle(title);
	}
	render(){
		return (
			<div>
				<Title title = {this.props.title} />
				<input onChange = {this.handleChange.bind(this)}/>
			</div>
			);
	}
}

export default Header;