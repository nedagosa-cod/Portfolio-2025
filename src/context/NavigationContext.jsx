"use client"

import { createContext, useContext, useState, ReactNode } from 'react'



const NavigationContext = createContext(undefined)

export function NavigationProvider({ children }) {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
