import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    winter: {
        text: 'Burr, It is chilly',
        iconName: 'massive snowflake icon'
    },
    summer: {
        text: 'Lets hit the beach',
        iconName: 'massive sun icon'
    },
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    return lat > 0 ? 'winter' : 'summer';

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName}`} />
            <h1>
                {text}
            </h1>
            <i className={`icon-right ${iconName}`} />
        </div>
    );
}

export default SeasonDisplay;