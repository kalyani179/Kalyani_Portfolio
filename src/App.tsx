import { Introduction } from './components/Introduction'
import { Timeline } from './components/Timeline'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { CustomCursor } from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Introduction />
        <Timeline />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  )
}

export default App
