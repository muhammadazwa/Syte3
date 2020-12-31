import React from 'react'
import styles from './Twitter.module.css'

type Props = {
    username: string
    photos: TwitterPicture[] | null
}

const Photos = ({ username, photos }: Props) => {
    if (!photos || photos.length === 0) {
        return null
    }
    return (
        <>
            <h3>Recent Photos</h3>
            <ul className={styles.photos}>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <a href={`https://twitter.com/${username}/status/${photo.tweetID}`}>
                            <span style={{ backgroundImage: `url(${photo.url})` }} />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Photos
