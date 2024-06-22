import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import { AddForm, ProfileCard } from './components';

class Cardlist extends Component {
  state = {
    newName: '',
    newJob: '',
    newProfileImg:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c3/c35031740bf06663cc17dc8210fa51109353ede2_full.jpg',
    newCoverImg: 'https://loremflickr.com/500/200/bike',
    newDesc: '',
    visible: false,
    cardList: [],
  };

  setNewValue = (e) => {
    let visible = false;

    if (
      this.state.newName != '' ||
      this.state.newJob != '' ||
      this.state.newDesc != ''
    ) {
      visible = true;
    } else {
      visible = false;
    }
    this.setState({
      [e.target.name]: e.target.value,
      visible: visible,
    });
  };

  addNewCard = () => {
    let newCard = {
      name: this.state.newName,
      job: this.state.newJob,
      desc: this.state.newDesc,
      coverPhoto: this.state.newCoverImg,
      profilePhoto: this.state.newProfileImg,
    };

    this.setState({
      cardList: [...this.state.cardList, newCard],
    });
  };

  render() {
    const {
      newName,
      newJob,
      newCoverImg,
      newDesc,
      visible,
      cardList,
      newProfileImg,
    } = this.state;
    return (
      <div className="App">
        <AddForm
          newName={newName}
          newJob={newJob}
          newProfileImg={newProfileImg}
          newCoverImg={newCoverImg}
          newDesc={newDesc}
          visible={visible}
          setNewValue={(e) => this.setNewValue(e)}
          addNewCard={this.addNewCard}
        />

        <div className="container">
          <div className="cardlist">
            <div className="row">
              <div className="col-sm-12">
                {cardList.map((card, index) => (
                  <ProfileCard
                    profileImg={card.profilePhoto}
                    userName={card.name}
                    job={card.job}
                    coverImg={card.coverPhoto}
                    desc={card.desc}
                    key={index}
                  />
                ))}

                <ProfileCard
                  profileImg="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c3/c35031740bf06663cc17dc8210fa51109353ede2_full.jpg"
                  coverImg="https://loremflickr.com/500/200/dog"
                  userName="And"
                  job="Student"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor ex et mauris molestie, ut placerat neque luctus. Mauris ut tempor lacus. Donec fringilla urna ut arcu lacinia congue. Nullam vehicula vestibulum tortor, et pretium nunc interdum eu."
                />

                <ProfileCard
                  profileImg="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/06/0623fffcdce1528525a85102371bd7a85006a693_full.jpg"
                  coverImg="https://loremflickr.com/500/200/sun"
                  userName="Boby"
                  job="Teacher"
                  desc="In hendrerit at orci tincidunt consectetur. Vestibulum lacus ipsum, dictum elementum ipsum a, commodo blandit justo. Aliquam eu nulla arcu. Duis vulputate lectus at magna imperdiet, eget mollis sapien tristique. Duis non risus libero. "
                />

                <ProfileCard
                  profileImg="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/06/0623fffcdce1528525a85102371bd7a85006a693_full.jpg"
                  coverImg="https://loremflickr.com/500/200/sea"
                  userName="Alice"
                  job="Dentist"
                  desc="In hendrerit at orci tincidunt consectetur. Vestibulum lacus ipsum, dictum elementum ipsum a, commodo blandit justo. Aliquam eu nulla arcu. Duis vulputate lectus at magna imperdiet, eget mollis sapien tristique. Duis non risus libero. "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardlist;
