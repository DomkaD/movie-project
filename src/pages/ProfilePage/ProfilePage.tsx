import {FC, useEffect, useState} from "react";

import {IAccountDetail} from "../../interfaces";
import {accountService} from "../../services";
import {useAppSelector} from "../../hooks";
import {pngUrl} from "../../configs";

import scss from './ProfilePage.module.scss'

const ProfilePage: FC = () => {

    const {session_id} = useAppSelector(state => state.authReducer)

    const [user, setUser] = useState<IAccountDetail>()

    useEffect(() => {
        accountService.getDetails(session_id).then(({data}) => {
            setUser(data)
        })



    }, [])

    const avatarImg = user?.avatar?.tmdb.avatar_path ? pngUrl + user.avatar.tmdb.avatar_path
        : 'https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'

    return (

        <div className={scss.profile}>
            <div className={scss.profile__info}>
                <img src={avatarImg} alt={user?.name}/>
                <div className={scss.profile__info_data}>
                    {user?.name && <h1>name:{user?.name}</h1>}
                    <h2>User Name: {user?.username}</h2>
                    <p>Country: {user?.iso_3166_1}</p>
                    <p>Language: {user?.iso_639_1}</p>
                </div>
            </div>
        </div>

    );
};

export {ProfilePage};
