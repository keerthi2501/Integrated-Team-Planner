import React from 'react';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as MdIcon from "react-icons/md";
import * as ImIcon from "react-icons/im";
export const HamburgerMenuItems =[
    {
        title : 'Home',
        path : '/homescreen',
        icon : <ImIcon.ImHome />,
        cName : 'nav-text'
    },
    {
        title : 'View Holidays',
        path : '/holidayList',
        icon : <MdIcon.MdOutlineHolidayVillage />,
        cName : 'nav-text'
    },
    {
        title : 'View Schedule',
        path : '/schedule',
        icon : <AiIcon.AiFillSchedule />,
        cName : 'nav-text'
    },
    {
        title : 'Manage leave plans',
        path : '/leavePlan',
        icon : <FaIcon.FaTelegramPlane />,
        cName : 'nav-text'
    },
    // {
    //     title : 'My schedule',
    //     path : '/mySchedule',
    //     icon : <MdIcon.MdSchedule />,
    //     cName : 'nav-text'
    // },
    // {
    //     title : '',
    //     path : '',
    //     icon : '',
    //     cName : 'nav-text'
    // },
    // {
    //     title : '',
    //     path : '',
    //     icon : '',
    //     cName : 'nav-text'
    // },
    {
        title : 'Logout',
        path : '/',
        icon : <MdIcon.MdLogout />,
        cName : 'nav-text'
    }
]