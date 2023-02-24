import {FC} from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';

import {pngUrl} from "../../configs";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {IImagePreview} from "../../interfaces";

import scss from './ImagePreview.module.scss'

const ImagePreview: FC<IImagePreview> = ({url, genre_ids, alt, type}) => {
    return (
        <div className={scss.poster}>
            <LazyLoadImage
                src={url ? pngUrl + url
                    : 'https://www.kindpng.com/picc/m/783-7831792_image-not-available-png-download-graphic-design-transparent.png'}
                alt={alt}/>
            <div className={scss.poster__badges}>
                <GenreBadge genresIds={genre_ids} type={type}/>
            </div>
        </div>
    );
};

export {ImagePreview};
