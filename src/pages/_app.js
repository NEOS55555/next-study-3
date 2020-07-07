import React from 'react'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css';
import '@/styles/style.scss';
import store from '@/store'

export default function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
  			{/*这里可以加公共头信息*/}
			<Component {...pageProps} />
		</Provider>
}