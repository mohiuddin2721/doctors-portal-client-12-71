import React from 'react';

const InfoCard = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;