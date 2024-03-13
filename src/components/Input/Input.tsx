import { Input as AntdInput, Space } from 'antd'
import React from 'react'
import styles from './input.module.scss'

export default function Input({ id, placeholder }) {
  return (
    <>
      <AntdInput className={styles.AntdInput} id={id} placeholder={placeholder} />
    </>
  )
}
