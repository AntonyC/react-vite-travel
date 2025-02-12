import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './App.module.css'
import {Layout, Typography, Input} from 'antd'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Layout.Header>
          <img src={viteLogo} alt=''/>
          <Typography.Title level={3}>React 旅游网</Typography.Title>
          <Input.Search placeholder={'请输入旅游目的地，主题或关键字'} />
        </Layout.Header>
      </div>





      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles['card']}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
