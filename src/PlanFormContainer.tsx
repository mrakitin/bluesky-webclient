import React from 'react';
import { IAllowedPlans, ISumbitPlanObject } from './queueserver';
import { GenericPlanForm } from './GenericPlanForm';
import { Card, CardContent, CardHeader, Paper, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

type IProps = {
  name: string;
  allowedPlans: IAllowedPlans;
  submitPlan: (selectedPlan: ISumbitPlanObject) => void;
}

interface IState {
  media: any;
  avatar: any;
}

export class PlanFormContainer extends React.Component<IProps, IState> {

  private getPlanForm() {
   const planFormDict : Record<string, JSX.Element> = {
                                'xafs': <GenericPlanForm submitPlan={this.props.submitPlan} 
                                                    name={this.props.name} 
                                                    allowedPlans={this.props.allowedPlans}/>,
                                'default': <GenericPlanForm submitPlan={this.props.submitPlan} 
                                                    name={this.props.name} 
                                                    allowedPlans={this.props.allowedPlans}/>,
                                '': <Card raised={true}>
                                      <CardHeader
                                        avatar={
                                          <AccountCircleIcon fontSize='large' />
                                        }
                                        titleTypographyProps={{variant:'h6' }}
                                        title={"Select a plan."}
                                      />
                                      <CardContent>
                                        <Typography>
                                            Select a plan from the available plans list.
                                        </Typography>
                                      </CardContent>
                                    </Card>}
      if (this.props.allowedPlans && this.props.name){
        return planFormDict[this.props.name] ? planFormDict[this.props.name] : planFormDict['default']
      } else {
        return planFormDict[''];
      }
      
    }

  render(){
    return (
      <Paper style={{height: "83vh", overflow: 'auto', margin: "auto"}}>
          {this.getPlanForm()}
      </Paper>)
  }
}