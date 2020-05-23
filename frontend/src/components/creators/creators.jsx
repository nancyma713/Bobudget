import React from "react";
import "../../assets/stylesheets/creators.scss";

class Creators extends React.Component {
  render() {
    return (
      <div id="members">
        <div className="member darkmilktea">
          <h1>Nancy Ma</h1>
          <h2>Team Lead</h2>
          <h3>Lychee Green Tea<i className="fas fa-heart" /></h3>
          <div className="member-straw" />
          <div className="clearfix" />
          <div className="member-img odd">
            <img src="https://bobudget-seeds.s3.amazonaws.com/images/nancy.jpg" alt="Nancy Ma" />
          </div>

          <div className="member-boba github">
            <a title="Nancy's Github" target="_blank" rel="noopener noreferrer" href="https://github.com/nancyma713"><i className="fab fa-github"></i></a>
          </div>

          <div className="member-boba linkedin">
            <a title="Nancy's LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nancy-ma-68357275/"><i className="fab fa-linkedin"></i></a>
          </div>

          <div className="member-boba angellist">
            <a title="Nancy's AngelList" target="_blank" rel="noopener noreferrer" href="https://angel.co/u/nancy-ma"><i className="fab fa-angellist"></i> </a>
          </div>
        </div>

        <div className="member passion">
          <h1>Kara Liu</h1>
          <h2>Front-end Developer</h2>
          <h3>Oolong Milk Tea<i className="fas fa-heart" /></h3>
          <div className="member-straw" />
          <div className="clearfix" />
          <div className="member-img even">
            <img src="https://bobudget-seeds.s3.amazonaws.com/images/kara.jpg" alt="Kara Liu" />
          </div>

          <div className="member-boba github">
            <a title="Kara's Github" target="_blank" rel="noopener noreferrer" href="https://github.com/karapliu"><i className="fab fa-github"></i></a>
          </div>

          <div className="member-boba linkedin">
            <a title="Kara's LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/karaliu/"><i className="fab fa-linkedin"></i></a>
          </div>

          <div className="member-boba angellist">
            <a title="Kara's AngelList" target="_blank" rel="noopener noreferrer" href="https://angel.co/u/karaliu"><i className="fab fa-angellist"></i> </a>
          </div>
        </div>

        <div className="member milktea">
          <h1>Scott Lee</h1>
          <h2>Back-end Developer</h2>
          <h3>Brown Sugar Milk Tea<i className="fas fa-heart" /></h3>
          <div className="member-straw" />
          <div className="clearfix" />
          <div className="member-img odd">
            <img src="https://bobudget-seeds.s3.amazonaws.com/images/scott.jpg" alt="Scott Lee" />
          </div>

          <div className="member-boba github">
            <a title="Scott's Github" target="_blank" rel="noopener noreferrer" href="https://github.com/gnom2"><i className="fab fa-github"></i></a>
          </div>

          <div className="member-boba linkedin">
            <a title="Scott's LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jun-hyeok-scott-lee-18a62851/"><i className="fab fa-linkedin"></i></a>
          </div>

          <div className="member-boba angellist">
            <a title="Scott's AngelList" target="_blank" rel="noopener noreferrer" href="https://angel.co/u/jun-hyeok-lee-1"><i className="fab fa-angellist"></i> </a>
          </div>
        </div>

        <div className="member grapefruit">
          <h1>David Hong</h1>
          <h2>Flex/Back-end Developer</h2>
          <h3>Super Fruit Oolong Tea<i className="fas fa-heart" /></h3>
          <div className="member-straw" />
          <div className="clearfix" />
          <div className="member-img even">
            <img src="https://bobudget-seeds.s3.amazonaws.com/images/david.jpg" alt="David Hong" />
          </div>

          <div className="member-boba github">
            <a title="David's Github" target="_blank" rel="noopener noreferrer" href="https://github.com/dhong89"><i className="fab fa-github"></i></a>
          </div>

          <div className="member-boba linkedin">
            <a title="David's LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/david-hong-53a8b768/"><i className="fab fa-linkedin"></i></a>
          </div>

          <div className="member-boba angellist">
            <a title="David's AngelList" target="_blank" rel="noopener noreferrer" href="https://angel.co/u/david-hong-32"><i className="fab fa-angellist"></i> </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Creators;