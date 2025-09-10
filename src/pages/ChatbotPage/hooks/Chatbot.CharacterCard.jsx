import React from 'react';

function CharacterCard({ member, isSelected, onSelect }) {
    return (
        <div 
            className={`character-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(member.id)}
        >
            <div className="character-avatar">
                <img src={member.image} alt={member.name} className="character-img" />
            </div>
            <div className="character-name">{member.name}</div>
            <div className="character-role">{member.role}</div>
        </div>
    );
}

export default CharacterCard;