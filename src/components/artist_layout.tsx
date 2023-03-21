
import Header from "./header/artist"

export default function Layout({ children }) {
  return (
    <>
    <Header />
     
      <main>{children}</main>
    
    </>
  )
}