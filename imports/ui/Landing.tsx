import React, { useState } from 'react';

export const Landing = () => {
    return (
        <div className="landing">
            <h2>Buy and sell in-game items for in-game currency.*</h2>
            <i>*Exchanges happen in the persistent universe; user discretion is advised.</i>
            <br />
            <br />
            <br />
            <br />
            <div className="landing-buttons">
                <button>Buy</button><button>Sell</button>
            </div>
        </div>
    );
};
