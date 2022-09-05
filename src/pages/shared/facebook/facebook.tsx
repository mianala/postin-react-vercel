import React, { useEffect, useState } from "react"
// @ts-ignore
import useFacebook from "use-facebook"

const options = {
  appId: process.env.FACEBOOK_APP_ID,
  version: "v14.0",
  lang: "fr_FR",
}

export default function Facebook() {
  const [loggedIn, setLogged] = useState<boolean>(false)
  const { isFacebookSDKReady } = useFacebook(options)
  useEffect(() => {
    console.log("ready? ", isFacebookSDKReady)
  }, [isFacebookSDKReady])

  const getLoginStatus = () =>
    FB.getLoginStatus(function (response: any) {
      console.log(response)
    })
  useEffect(() => {
    getLoginStatus()
  }, [])

  // user login
  const login = () => {
    FB.login()
    FB.login(function (response: any) {
      console.log(response)
      if (response.authResponse) {
        console.log("Welcome!  Fetching your information.... ")
        FB.api("/me", function (me: any) {
          console.log("Good to see you, " + me.name + ".")
        })
      } else {
        console.log("User cancelled login or did not fully authorize.")
      }
    })
  }

  const logout = () => {
    FB.logout((response: any) => {
      console.log("logout ", response)
    })
  }
  return (
    <div>
      <button onClick={login}>FB Login</button>
      <br />
      <button onClick={logout}>FB logout</button>
    </div>
  )
}
