import React from 'react';
import SignUpFormContainer from '../session/signup_form_container';
import '../../assets/stylesheets/splash.scss';

class MainPage extends React.Component {
    
    // will need logic for not showing the sign up form when logged in

    render() {
        return (
            <div className='main-page'>
                <h1>Bobudget</h1>
                <main className='main-body'>
                    <ul>
                        <li>Jasmine Milk Tea</li>
                        <li>Bubble Milk Tea</li>
                        <li>Taro Milk Tea</li>
                        <li>Lychee Green Tea</li>
                        <li>Passion Fruit Green Tea</li>
                        <li>Matcha Latte</li>
                    </ul>
                    <section>
                        <SignUpFormContainer />
                    </section>
                </main>
                <footer>
                    Copyright &copy; 2020 Bobudget
                </footer>
            </div>
        )
    }
}

export default MainPage;