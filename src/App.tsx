import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App