import React from "react";
import classes from "./TourCard.module.css";
import tourImg from "../../assets/background.webp";
import { Link } from "react-router-dom";
import { Timer, Watch } from "@material-ui/icons";
import HoverRating from "../Rating/Rating";

const TourCard = (props) => {
  const {TourImage,TourTitle,NumDays,NumNights,TourDescription } = props
  return (
    <div className={classes.tour_card_wrapper}>
      <div className={classes.tour_card_header}>
        <Link to={`/tours/uganda/${TourTitle.replaceAll(' ','-')}`}>
        <img src={TourImage} alt="Tour" />
        <span className={classes.tour__discount}>
          20% off
        </span>
        </Link>
      </div>
      <div className={classes.tour_card_body}>
        <div className={classes.tour_title}>
          <h4 title={`View ${TourTitle}`}>
          <Link to={`/tours/uganda/${TourTitle.replaceAll(' ','-')}`}>{TourTitle} </Link>
          </h4>
        </div>
        <span className={classes.tour__date}>
          <Timer/> {NumDays} DAYS - {NumNights} NIGHTS
        </span>
        <div className={classes.tour__description}>
          <p>{TourDescription} </p>
        </div>
      </div>
      <div className={classes.tour__footer}>
        <div className={classes.tour_ratings}>
            <HoverRating/>
        </div>
        <div className={classes.tour__read_more}>
            <a href="#">Book Tour</a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;