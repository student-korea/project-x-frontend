import React from 'react';
import { Link } from 'react-router-dom';

function CTASection({ selectedMemberId }) {
    return (
        <div className="cta-section">
            <div className="cta-text">함께 대화하고 싶은 멤버를 골라 주세요!</div>
            <Link to={selectedMemberId ? `/ChatApp/${selectedMemberId}` : '#'}>
                <button 
                    className="next-btn"
                    disabled={!selectedMemberId}
                >
                    다음 ➤
                </button>
            </Link>
        </div>
    );
}

export default CTASection;