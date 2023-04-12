import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo))
  }
  const logout = async () => {
    await localStorage.removeItem('codeburger:userData')
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clienteInfo = await localStorage.getItem('codeburger:userData')

      if (clienteInfo) {
        setUserData(JSON.parse(clienteInfo))
      }
    }
    loadUserData()
  }, [])

  return (
    <UserContext.Provider value={{ putUserData, userData, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be use with UserContext ')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
