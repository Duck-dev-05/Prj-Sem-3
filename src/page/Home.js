import React from 'react';
import '../css/Homepage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Welcome to James Thew's Kitchen</h1>
            </header>
            <main>
                <section className="about">
                    <h2>About James Thew</h2>
                    <p>
                        James Thew is a renowned chef with years of experience working in top-tier hotels. Known for his innovative recipes and engaging cooking classes, he has captivated food enthusiasts worldwide.
                    </p>
                </section>

                <section className="features">
                    <h2>Explore Our Features</h2>
                    <ul>
                        <li>Access Free Recipes</li>
                        <li>Join Exciting Cooking Contests</li>
                        <li>Stay Updated with Announcements</li>
                        <li>Share Your Feedback</li>
                        <li>Browse FAQs</li>
                    </ul>
                </section>

                <section className="subscription">
                    <h2>Become a Member</h2>
                    <p>Enjoy exclusive content and premium recipes by subscribing:</p>
                    <ul>
                        <li>Monthly Subscription: $10</li>
                        <li>Yearly Subscription: $100</li>
                    </ul>
                    <button onClick={() => alert('Redirecting to subscription page...')}>Subscribe Now</button>
                </section>

                <section className="contact">
                    <h2>Contact Us</h2>
                    <p>Have questions or feedback? Feel free to reach out!</p>
                </section>
            </main>
            <footer className="homepage-footer">
                <p>&copy; {new Date().getFullYear()} James Thew's Kitchen. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
