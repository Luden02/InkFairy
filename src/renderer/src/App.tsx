import Versions from './components/Versions'

function App(): React.JSX.Element {
  return (
    <>
      <div className="text">InkFairy</div>
      <p className="tip">Sideload your books on your e-book reader, drag and drop.</p>
      <Versions></Versions>
    </>
  )
}

export default App
