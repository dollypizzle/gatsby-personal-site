import React from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [size, setSize] = React.useState(null)
  const [isSidebarOpen, setSidebar] = React.useState(false)

  React.useEffect(() => {
    if (window) {
      setSize(window.innerWidth)
      window.addEventListener("resize", () => {
        setSize(window.innerWidth)
      })
    }

    return () => {
      window.removeEventListener("resize", () => {})
    }
  }, [])
  const handleOpenSidebar = () => {
    setSidebar(true)
  }
  const handleCloseSidebar = () => {
    setSidebar(false)
  }
  return (
    <AppContext.Provider
      value={{
        size,
        handleCloseSidebar,
        handleOpenSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
