import React, { Component } from 'react';
import './modal.css';
import AddElementForm from './addform';

class MagicModal extends Component {
	constructor(props) {
    super(props);

    this.state = {
      popupVisible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
}

  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }
  
  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    
    this.handleClick(); 
  }

  render() {
    return (
    	<div>
	    	<button className="MyButton" onClick={this.handleClick}> + </button>

	        {this.state.popupVisible && (
	          <div className="popover-container" >
		          <div className="popover" ref={node => { this.node = node; }}>
		           <AddElementForm  
				uptadeName={this.setNewValue}
				updateProfile={this.setNewValue} 
				updateJob={this.setNewValue}
				updateDesc={this.setNewValue} />
		          </div>
	          </div>
	         )}
	      	
      	</div>
    );
  }
}

export default MagicModal;