import { useEffect } from 'react'
import useApiHandler from './hooks/useApiHandler'
import { ProblemsService } from './services/problems.service'
import Typography from './components/Typography'
import styles from './App.module.scss'

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
    <div className={styles.container}>
      <Typography variant="body1" color="red-500" weight="bold">
        Hello World
      </Typography>
    </div>
  )
}

export default App
