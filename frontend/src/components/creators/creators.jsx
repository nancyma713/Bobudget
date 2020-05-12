import React from 'react';
import '../../assets/stylesheets/creators.scss';

class Creator extends React.Component {
    
    render() {
        return (
            <div className='center flex-row creators'>
                <h1 id='team'>TEAM MEMBERS</h1>
                <div className='members'>
                    <div className="member">
                        <h3>Nancy Ma</h3>
                        <h6>Team Lead</h6>
                        <li><a href="https://github.com/nancyma713"><i className="fab fa-github"></i> GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/nancy-ma-68357275/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="https://angel.co/u/nancy-ma"><i className="fab fa-angellist"></i> Angellist</a></li>
                    </div>
                    <div className="member">
                        <h3>Kara Liu</h3>
                        <h6>Front-End Developer</h6>
                        <li><a href="https://github.com/karapliu"><i className="fab fa-github"></i> GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/karaliu/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="https://angel.co/u/karaliu"><i className="fab fa-angellist"></i> Angellist</a></li>
                    </div>
                    <div className="member">
                        <h3>Scott Lee</h3>
                        <h6>Back-End Developer</h6>
                        <li><a href="https://github.com/gnom2"><i className="fab fa-github"></i> GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/jun-hyeok-scott-lee-18a62851/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="https://angel.co/u/jun-hyeok-lee-1"><i className="fab fa-angellist"></i> Angellist</a></li>
                    </div>
                    <div className="member">
                        <h3>David Hong</h3>
                        <h6>Flex / Back-End Developer</h6>
                        <li><a href="https://github.com/dhong89"><i className="fab fa-github"></i> GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/david-hong-53a8b768/"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="https://angel.co/u/david-hong-32"><i className="fab fa-angellist"></i> Angellist</a></li>
                    </div>
                </div>
            </div>

        )
    }
}

export default Creator;