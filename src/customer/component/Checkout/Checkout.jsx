import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';
import { useLocation } from 'react-router-dom'; // Import useLocation
import DeliveryAddress from  './DeliveryAddress'
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Add your Address', 'Order Details', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step"), 10) || 0;
  const [activeStep, setActiveStep] = React.useState(step);

  return (
    <div className=' px-10 lg:px-20 pt-32 '>
      <div className='p-6 shadow-lg rounded-s-md border '>
      <Stepper activeStep={activeStep} sx={{ width: '100%' }}>
        {steps.map((step, index) => (
          <Step
            key={step}
            indicator={
              <StepIndicator
                variant={activeStep <= index ? 'soft' : 'solid'}
                color={activeStep < index ? 'neutral' : 'primary'}
              >
                {activeStep <= index ? index + 1 : <Check />}
              </StepIndicator>
            }
            sx={{
              '&::after': {
                ...(activeStep > index &&
                  index !== 2 && { bgcolor: 'primary.solidBg' }),
              },
            }}
          >
            <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
          </Step>
        ))}
      </Stepper>
      </div>
          <div>
     {step==2?<DeliveryAddress/>:<OrderSummary/>}
      </div>
    </div>
  );
}
