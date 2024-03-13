import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './sidebar.module.scss';
import { Calendar01Icon, Calendar04Icon, Compass01Icon, DashboardCircleSettingsIcon, DeliveredSentIcon, Navigation04Icon, Search01Icon, Setting06Icon, SettingDone01Icon, Settings01Icon, TruckDeliveryIcon, UserGroupIcon, UserSquareIcon, ZoomInAreaIcon } from 'hugeicons-react';
import ProjectDropdown from '../ProjectDropdown/ProjectDropdown';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('Settings', 'sub1', <Settings01Icon size={20} />, [
      getItem('Project information', 'g1', null),
      getItem('Resources', 'g2', null),
      getItem('Gates & Zones', 'g3', null),
      getItem('General documents', 'g4', null),
      getItem('Plans', 'g5', null),
    ]),
  
    getItem('Calendar', 'sub2', <Calendar04Icon size={20} />, []),
    getItem('Deliveries', 'sub3', <DeliveredSentIcon size={20} />, []),
    getItem('Deviations', 'sub4', <Navigation04Icon size={20} />, []),
    getItem('Reports', 'sub5', <ZoomInAreaIcon size={20} />, []),
    getItem('Users', 'sub6', <UserGroupIcon size={20} />, []),
  ];

export default function Sidebar() {

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
      };

      const [project, setProject] = useState(false);
  return (

    <aside className="bg-[#012169]">
    <div className="flex gap-[7px] items-center px-4 pt-[15px] mb-[39px]">
                <div className="w-8 h-8 rounded-full bg-[#71D99C]">
                    { project ? <img src="" /> : <div className="w-full h-full flex justify-center items-center font-semibold text-white relative top-[1px]">L</div> }
                    
                </div>
                <ProjectDropdown />
            </div>


            <Menu
      onClick={onClick}
      style={{ width: 300 }}
     
      mode="inline"
      items={items}
      className={styles.customSidebar}
    />

    </aside>
    
  )
}
