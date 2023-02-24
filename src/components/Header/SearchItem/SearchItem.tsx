import {FC} from "react";
import {UseFormReset} from "react-hook-form";
import {Link} from "react-router-dom";

import {pngUrl} from "../../../configs";
import {ISearched} from "../../../interfaces";
import {useAppDispatch} from "../../../hooks";
import {searchAction} from "../../../redux";

import scss from '../HeaderSearch/HeaderSearch.module.scss'


export interface ISearchItemProps {
    band: ISearched,
    reset: UseFormReset<{ search: string }>
}


const SearchItem: FC<ISearchItemProps> = ({band, reset}) => {

    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(searchAction.resetHeaderSearch())
        reset()
    }

    return (
        <Link onClick={onClick} to={`/movie/${band.id}`}
              className={scss.search_list_item}>
            <div className={scss.search_item_thumbnail}>

                <img
                    src={band.poster_path ? `${pngUrl}${band.poster_path}` : 'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'}
                    alt={band.name}/>
            </div>
            <div className={scss.search_item_info}>
                <h2>{band.name}{band.title}</h2>
            </div>
        </Link>
    );
};

export {SearchItem};
