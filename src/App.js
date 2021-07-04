import React, { useEffect, useState } from "react"
import web3 from "./web3"
import lottery from "./lottery"
import "./App.css"

function App() {
  const [manager, setManager] = useState("")

  useEffect(() => {
    getManager()

    async function getManager() {
      const manager = await lottery.methods.manager.call()

      setManager(
        manager["_ethAccounts"]["_requestManager"]["provider"][
          "selectedAddress"
        ]
      )
    }

    return () => {}
  }, [])

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}</p>
    </div>
  )
}

export default App
