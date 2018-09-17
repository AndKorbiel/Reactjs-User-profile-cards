import React, { Component } from 'react'; 
import ProfileCard from './ProfileCard';
import NewProfileCard from './newprofilecard';
import './cardlist.css';


class Cardlist extends Component {
	Callback=(x) => {

	}

	render() {
		return (

			<div className="cardlist">

				<ProfileCard
				profileImg="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c3/c35031740bf06663cc17dc8210fa51109353ede2_full.jpg" 
				coverImg="https://loremflickr.com/500/200/dog"
				userName="And"
				job="Student"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor ex et mauris molestie, ut placerat neque luctus. Mauris ut tempor lacus. Donec fringilla urna ut arcu lacinia congue. Nullam vehicula vestibulum tortor, et pretium nunc interdum eu. Pellentesque metus risus, suscipit ut maximus sit amet, aliquam nec urna." 
				/>
				<ProfileCard 
				profileImg="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/06/0623fffcdce1528525a85102371bd7a85006a693_full.jpg"
				coverImg="https://loremflickr.com/500/200/sun"
				userName="Boby"
				job="Teacher"
				desc="In hendrerit at orci tincidunt consectetur. Vestibulum lacus ipsum, dictum elementum ipsum a, commodo blandit justo. Aliquam eu nulla arcu. Duis vulputate lectus at magna imperdiet, eget mollis sapien tristique. Duis non risus libero. "
				/>
				<NewProfileCard  />

			</div>
			);
	}
}

export default Cardlist;
