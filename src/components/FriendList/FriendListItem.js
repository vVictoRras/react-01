import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ name, avatar, isOnline }) {
    return (
        <div className={s.item}>
            <span className={isOnline ? s.isOnline : s.isOfline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </div>
    );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};