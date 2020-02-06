/*
 * @Description:
 * @Author: jinlei1@leju.com
 * @Date: 2020-01-26 14:55:48
 * @LastEditTime : 2020-02-06 21:56:24
 * @LastEditors  : jinlei1@leju.com
 * @FilePath: /electron-react-boilerplate-master/app/components/Home.js
 */
// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

export default function() {
  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <Link to={routes.COUNTER}>to Counter</Link>
    </div>
  );
}
