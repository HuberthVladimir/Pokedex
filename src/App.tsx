import Routes from './routes';
import { AppProvider } from './hooks/context'

export function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export default App;

