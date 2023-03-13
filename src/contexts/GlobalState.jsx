import { useEffect, useState } from 'react'

export default function GlobalState() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("cookenu-token")

    if(token) {
      setIsAuth(true)
    }

  })

  const context = {
    isAuth: isAuth,
    setIsAuth: setIsAuth
  };

  return {
    context
  }
}
