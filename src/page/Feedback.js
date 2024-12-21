import React from "react";
import '../css/Feedback.css';

function Feedback() {
    return(
        <div className="feedback">
            <h2>Feedback</h2>
            <form>
                <label>Your Feedback:</label>
                <textarea placeholder="Share your thoughts..." required></textarea>
                <button type="submit">Sumbit Feedback</button>
            </form>
        </div>
    );
}

export default Feedback;