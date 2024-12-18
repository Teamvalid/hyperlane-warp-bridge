import { Card } from '../../components/layout/Card';
import { TransferTokenForm } from './TransferTokenForm';

export function TransferTokenCard() {
  return (
    <Card className="w-[95%] sm:w-[31rem] mx-auto">
      <TransferTokenForm />
    </Card>
  );
}
