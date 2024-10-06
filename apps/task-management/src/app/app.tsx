import NxWelcome from './nx-welcome';
import { GlobalLayout } from '@hcu-test-monorepo/shared-ui';
export function App() {
  return (
    <GlobalLayout>
      <NxWelcome title="task-management" />
    </GlobalLayout>
  );
}

export default App;
