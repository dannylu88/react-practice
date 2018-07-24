import React from "react";
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
	constructor(){
		super();
		console.log('constructor', this);
		//this will make original title = welcome
		this.state = {title:'Welcome!'};
	}

    changeTitle(title){
    	console.log('changeTitle', this)
    	//set the title to new var title
    	this.setState({title: title})
    }


	render(){
		
		return (
			<div>
			 {this.state.name}

				<Header changeTitle = {this.changeTitle.bind(this)} title = {this.state.title} />
				
				<Footer />
			</div>
			);
	}
}

export default Layout;