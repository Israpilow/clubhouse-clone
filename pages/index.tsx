import { FC, useState } from 'react';

import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep/index';
import { EnterNameStep } from '../components/steps/EnterNameStep/index';
import { WelcomeStep } from '../components/steps/WelcomeStep/index';

const stepsComponents = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: ChooseAvatarStep,
};

export default function Home() {
  const [step, setStep] = useState<number>(2);

  const Step = stepsComponents[step];

  return (
    <div>
      <Step />
    </div>
  );
}
