import React from 'react'
import styles from '../Styles/Components/HeaderFooter.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      
    <div className={styles.mainContainer}>
            <a className="active" href="#">Login</a>
            <a href="/signup">Sign-Up </a>
            <a href="/about">About </a>
            <div className={styles.right}><a href="#"><img className="right"src="/imgs/logo.png" height="60" width="60"></img></a></div>
    </div>
    </div>
  )
}
// const styles = StyleSheet.create({
//   bold: {fontWeight: 'bold'},
//   italic: {fontStyle: 'italic'},
//   underline: {textDecorationLine: 'underline'}
// });