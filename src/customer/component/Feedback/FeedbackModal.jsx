import React, { useState } from 'react';
import './FeedbackModal.css';
import Rating from '@mui/material/Rating'; // Import MUI Rating component

export const FeedbackModal = ({ isOpen, onClose }) => {
    const [emoji, setEmoji] = useState(null);
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleSubmit = async () => {
        if (emoji && rating) {
            const feedbackData = { emoji, rating, comments };

            try {
                const response = await fetch('http://localhost:3100/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(feedbackData),
                });

                if (response.ok) {
                    alert('Thank you for your feedback!');
                    onClose();
                } else {
                    alert('There was a problem submitting your feedback.');
                }
            } catch (error) {
                console.error('Error submitting feedback:', error);
                alert('There was an error submitting your feedback.');
            }
        } else {
            alert('Please select an emoji and a rating.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <h2>We'd love some feedback</h2>
                
                <div className="emoji-section">
                    <p>Will You Come Back?</p>
                    <div className="emoji-options">
                        <span onClick={() => setEmoji('😡')} className={emoji === '😡' ? 'selected' : ''}>😡</span>
                        <span onClick={() => setEmoji('😟')} className={emoji === '😟' ? 'selected' : ''}>😟</span>
                        <span onClick={() => setEmoji('😐')} className={emoji === '😐' ? 'selected' : ''}>😐</span>
                        <span onClick={() => setEmoji('🙂')} className={emoji === '🙂' ? 'selected' : ''}>🙂</span>
                        <span onClick={() => setEmoji('😃')} className={emoji === '😃' ? 'selected' : ''}>😃</span>
                    </div>
                </div>

                <div className="rating-section">
                    <p>How Would You Rate Our Service?</p>
                    <Rating
                        name="service-rating"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                        size="large"
                    />
                </div>

                <textarea
                    placeholder="Additional comments..."
                    rows="4"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />

                <button onClick={handleSubmit} className="submit-btn">Submit</button>
                <button onClick={onClose} className="close-btn">Close</button>
            </div>
        </div>
    );
};

export default FeedbackModal;
