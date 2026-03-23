import { Introduction } from './components/Introduction'
import { Timeline } from './components/Timeline'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { CustomCursor } from './components/CustomCursor'
import { PixelSnow } from './components/PixelSnow'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <>
      <PixelSnow />
      <CustomCursor />
      <ScrollToTop />
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
