import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Button from "@material-ui/core/Button";
import Group from "@material-ui/icons/Group";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";
import './RatingCard.css';


const styles = theme => ({
  card: {
    display: "flex",
    width: 100,
    dispaly:"inline-block"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: 30
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 50,
    height: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  rootIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  },
  adjust: {
    marginTop: -50,
    marginLeft: 140
  },
  width:{
    height:900
  }
});


const RatingCard = (props)=>{
    return(
        <div>
           <div className="col-lg-3 col-6">
      <Card style={styles.card} style={{ background: "#E0E0E0" }} className="Wide">
        <div style={styles.details}>
          <CardContent style={styles.content}>
            <Typography variant="headline">Rating Details</Typography>

            <Typography variant="subheading" color="textSecondary">
              0000
            </Typography>
            <div style={styles.rootIcon}>
              <div style={styles.adjust}>
                <Icon style={styles.icon} style={{ fontSize: 50 }} className="Margin">
                  group
                </Icon>
              </div>
            </div>
          </CardContent>

          <Button size="small" className="Shift">Learn More</Button>
        </div>
      </Card>
      </div>
    </div>

    
    );
}

export default RatingCard;

