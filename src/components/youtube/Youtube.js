import React from 'react'
import PropTypes from 'prop-types'

import styles from './Youtube.module.css'

const Youtube = ({embedId}) => {

  return (
    <div className={styles['container']}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title={`Embedded youtubeId-${embedId}`}
        muted
      />
    </div>
  )
}

export default Youtube

Youtube.propTypes = {
    embedId: PropTypes.string.isRequired
  };