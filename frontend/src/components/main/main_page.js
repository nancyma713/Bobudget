import React from 'react';
// import SignUpFormContainer from '../session/signup_form_container';
import '../../assets/stylesheets/splash.scss';
import { Link, Redirect } from 'react-router-dom';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: ''
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    } 
    
    // handleSubmit(e) {
    //     e.preventDefault();
    //     return <Link to="/signup" />
    // }
    
    render() {
        return (
            <>
                <main className='main-body'>
                    <section className="main-left">

                    </section>

                    <section className="main-right">
                        <h2>Get started</h2>
                        <form className="session-form">
                            <label>first name
                                <input 
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.update("firstName")}
                                    placeholder="first name"
                                />
                            </label>

                            <label>last name
                                <input
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.update("lastName")}
                                    placeholder="last name"
                                />
                            </label>
                            
                            <label>username
                                <input
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update("username")}
                                    placeholder="username"
                                />
                            </label>

                            <Link className="center" username={this.state.username} to="/signup"><button>Continue</button></Link>
                            <p className="margin-auto">Already have an account? <Link to="/login">Sign in</Link></p>
                        </form>
                    </section>
                </main>
                {/* <footer>
                    Copyright &copy; 2020 Bobudget
                </footer> */}
            </>
        )
    }
}

export default MainPage;