import React from 'react'

import { ReactComponent as Waves } from '../../assets/img/waves.svg'
import { ReactComponent as Blob } from '../../assets/img/blob.svg'
import band from '../../assets/img/gt-landing-transparent.png'

import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <>
      <div id='home' className={styles['container']}>
        <div className={styles['content']}>
          <h1>Doświadcz <span className={styles['text--gradient']}>niezapomnianych</span> wrażeń dzięki naszej muzyce tworzonej <span className={styles['text--gradient']}>na żywo</span> z pasją i talentem.</h1>

          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>

        <div className={styles['image__container']}>
          <div className={styles['image__frame']}>
            <img className={styles['image']} src={band} alt="gramyto" />
          </div>
          {/* <Blob width={"100%"} height={"100%"} fill={"black"} /> */}
        </div>

      </div>

      <div className={styles['waves']}>
        <Waves width={"100%"} height={"100%"} />
      </div>
    </>
  )
}

export default LandingPage

