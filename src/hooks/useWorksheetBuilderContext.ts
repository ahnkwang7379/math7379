import { createContext, useContext } from 'react'
import type { WorksheetBuilder } from '../models/worksheetBuilder'

export const WorksheetBuilderContext = createContext<
  WorksheetBuilder | undefined
>(undefined)

export default function useWorksheetBuilderContext() {
  const context = useContext(WorksheetBuilderContext)

  if (!context) {
    throw new Error(
      'useWorksheetBuilderContext must be used within a WorksheetBuilderProvider',
    )
  }
  return context
}
