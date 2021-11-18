import React, { useRef } from 'react';
import styles from './serch_header.module.css'

const SerchHeader = ({ onSearch }) => {
  const inputRef = useRef()
  const handelSearch = () =>{
    const value = inputRef.current.value
    onSearch(value)
  }

  const onKeyPress = (event) => {
    if(event.key ==='Enter'){
      handelSearch()
    }
  }
  const onClick = () => {
    handelSearch()
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="Youtube_logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input ref={inputRef} className={styles.input} onKeyPress={onKeyPress} type="serch" placeholder="search..." />
      <button className={styles.button} onClick={onClick} type="submit">
        <img className={styles.buttonImg} src="/images/serch.png" alt="serch" />
      </button>
    </header>
  )
}

export default SerchHeader;