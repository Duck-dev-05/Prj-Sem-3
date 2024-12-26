import React from "react";
import '../css/FAQs.css';

function FAQ() {
    return (
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            <ul>
            <li>How to become a member of this site? <p>Register on the Login/Register page.</p></li>
            <li>Will there be any subscription charges? <p>Yes, $10/month or $100/year.</p></li>
            <li>Can I participate in contests without being a member? <p>Yes, participation is open to all.</p></li>
            </ul>
        </div>
    );
}

export default FAQ;