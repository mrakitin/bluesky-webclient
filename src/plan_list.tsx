import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IPlan, IPlanObject } from './queueserver';
import { RouteComponentProps } from 'react-router-dom';
import { Box, Card, CardContent, Container, Paper, Typography } from '@material-ui/core';

type Plans = {
  plans: IPlanObject[];
}


export class CurrentPlan_Old extends React.Component<Plans>{

  handlePlay(uid: string) {
    alert(uid)
  }

  handlePause(uid: string) {
    alert(uid)
  }

  handleDelete(uid: string) {
    alert(uid)
  }

  render() {
    return (<List>
                  <ListItem divider={true} button={true} key={this.props.plans[0].plan_uid}>
                      <ListItemIcon>
                        <AccountCircleIcon fontSize='large' />
                      </ListItemIcon>
                      <ListItemText
                        primary={this.props.plans[0].name}
                        secondary={this.props.plans[0].plan_uid.substr(0,8)}/>
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => this.handlePlay(this.props.plans[0].plan_uid)} edge="end" aria-label="comments">
                          <PlayCircleOutlineIcon />
                        </IconButton>
                        <IconButton onClick={() => this.handlePause(this.props.plans[0].plan_uid)} edge="end" aria-label="comments">
                          <PauseCircleOutlineIcon />
                        </IconButton>
                        <IconButton onClick={() => this.handleDelete(this.props.plans[0].plan_uid)} edge="end" aria-label="comments">
                          <DeleteForeverIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                  </ListItem>
          </List>
         );}
}



export class PlanList extends React.Component<Plans>{

  handleDelete(uid: string) {
    alert(uid)
  }

  handleMoveForward(uid: string) {
    alert(uid)
  }

  handleMoveBackward(uid: string) {
    alert(uid)
  }

  render() {
    return (
          <Box> 
            <Card>
              <CardContent>
                <Typography align="center" variant="h5" component="h1" gutterBottom>
                  Bluesky Queue
                </Typography>
              </CardContent>
            </Card>
            <Box height="2vh"></Box>
            <Paper style={{width:"40vw", overflow: 'auto', margin: "auto"}}>
              <List>
                {this.props.plans.map((planObject: IPlanObject) => (
                    <ListItem divider={true} button={true} key={planObject.plan_uid}>
                        <ListItemIcon>
                          <AccountCircleIcon fontSize='large' />
                        </ListItemIcon>
                        <ListItemText
                          primary={planObject.name}
                          secondary={planObject.plan_uid.substr(0,8)}/>
                        <ListItemSecondaryAction>
                          <IconButton onClick={() => this.handleMoveForward(planObject.plan_uid)} edge="end" aria-label="comments">
                            <KeyboardArrowUpIcon />
                          </IconButton>
                          <IconButton onClick={() => this.handleMoveBackward(planObject.plan_uid)} edge="end" aria-label="comments">
                            <KeyboardArrowDownIcon />
                          </IconButton>
                          <IconButton onClick={() => this.handleDelete(planObject.plan_uid)} edge="end" aria-label="comments">
                            <DeleteForeverIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            </Paper>
          </Box>
         );}
}