import React from 'react'
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import {Card, CardContent, Typography, Grid} from "@material-ui/core";

import { GiHastyGrave } from "react-icons/gi";
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";

const Cards: React.FC = () => {
  const data = useSelector(selectData);
  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="container"></Grid>
    </div>
  )
}

export default Cards

