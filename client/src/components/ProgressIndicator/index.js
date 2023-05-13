import React from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PersonIcon from '@material-ui/icons/Person';

const steps = [
  { label: 'Выберите тест центр', icon: LocationOnIcon },
  { label: 'Выберите дату', icon: ScheduleIcon },
  { label: 'Подтвердите данные', icon: PersonIcon },
];

const ProgressIndicator = ({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel StepIconComponent={step.icon}>
            {step.label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default ProgressIndicator;
