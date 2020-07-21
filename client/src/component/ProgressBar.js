import React from "react";

const calculatePercentage = (player, wordsLength) => {
    if (player.currentWordIndex !== 0) {
        return ((player.currentWordIndex / wordsLength) * 100).toFixed(2) + "%";
    }
    return 0;
};

export const ProgressBar = ({player, players, wordsLength}) => {
    const percentage = calculatePercentage(player, wordsLength);
    return (
        <div>
            {
                <>
                    <h5 className="text-left">{player.userName} (you)</h5>
                    <div className="progress my-1" key={player._id}>
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{width: percentage}}
                        >
                            {percentage}
                        </div>
                    </div>
                </>
            }
            {players.map((playerObj) => {
                const percentage = calculatePercentage(playerObj, wordsLength);
                return playerObj._id !== player._id ? (
                    <>
                        <h5 className="text-left">{playerObj.userName}</h5>
                        <div className="progress my-1" key={playerObj._id}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{width: percentage}}
                            >
                                {percentage}
                            </div>
                        </div>
                    </>
                ) : null;
            })}
        </div>
    );
};
