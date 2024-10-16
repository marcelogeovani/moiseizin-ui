import * as Styles from './styles';

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <Styles.Container>
      <Styles.Label>Passo {currentStep} de {size}</Styles.Label>
      <Styles.Steps css={{  '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Styles.Step key={step} active={ currentStep >= step }  />
        ))}
      </Styles.Steps>
    </Styles.Container>
  )
}

MultiStep.displayName = 'MultiStep'
