import { Introduction } from './components/Introduction'
import { Timeline } from './components/Timeline'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { CustomCursor } from './components/CustomCursor'
import { PixelSnow } from './components/PixelSnow'

function App() {
  return (
    <>
      <PixelSnow />
      <CustomCursor />
        <Navbar />
        <Introduction />
      <main>
        <Timeline />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  )
}

export default App
