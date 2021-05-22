import React, { useState } from 'react';
import { Menu, Image } from 'antd'

const MenuBar = () => {
    const [current, setCurrent ] = useState("home");

    const handleClick = (e) => {
        setCurrent(e.key)
    }

    return (
        <Menu mode="horizontal" onClick={handleClick} selectedKeys={current}>
        <Image src="/images/logo-nik.png" />
        <Menu.Item key={"home"}>Home</Menu.Item>
        <Menu.Item key={"programs"}> 
            Programs
        </Menu.Item>
        <Menu.Item key={"apply"}> 
        Apply Now</Menu.Item>
        <Menu.Item key={"prospect"}>Prospectus</Menu.Item>
        <Menu.Item key={"instruct"}>Instructions</Menu.Item>
        </Menu>
    )
}

export default MenuBar
