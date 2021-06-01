import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';

const Profile = ({src, name, tag, location, followers, views, likes}) => (
    <div class="profile">
    <div class="description">
        <img
        src={src}
        alt="Аватар пользователя"
        class="avatar"
        />
            <p class="name">{name}</p>
            <p class="tag">{tag}</p>
            <p class="location">{location}</p>
        </div>

        <Stats
            followers={followers}
            views={views}
            likes={likes}
        />
    </div>
);

Profile.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired, 
};

export default Profile;