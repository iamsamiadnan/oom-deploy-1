import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import styles from './dropdown.module.scss';
import { ArrowDown01Icon } from 'hugeicons-react';
const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Project 1
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Project 2
        </a>
      ),
    },
    
  ];

export default function ProjectDropdown() {
  return (
    <Dropdown menu={{ items }} className={styles.customDropdown}>
    <a onClick={(e) => e.preventDefault()}>
      <div className="flex gap-[6px]">
        Life City
        <ArrowDown01Icon />
      </div>
    </a>
  </Dropdown>
  )
}
