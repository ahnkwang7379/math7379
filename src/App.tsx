import { useEffect } from 'react'
import useApiHandler from './hooks/useApiHandler'
import { ProblemsService } from './services/problems.service'

function App() {
  const { execute, data } = useApiHandler(ProblemsService.getProblems, {
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  useEffect(() => {
    execute()
  }, [])

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
