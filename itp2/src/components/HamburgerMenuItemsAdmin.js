import React from 'react';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as MdIcon from "react-icons/md";
import * as SlIcon from "react-icons/sl";
import * as ImIcon from "react-icons/im";
 const HamburgerMenuItemsAdmin =[
    {
        title : 'Home',
        path : '/admin/homescreen',
        icon : <ImIcon.ImHome />,
        cName : 'nav-text'
    },
    {
        title : 'Manage Associates',
        path : '/admin/manageAssociates',
        icon : <IoIcon.IoIosPeople />,
        cName : 'nav-text'
    },
    {
        title : 'Manage leave plans',
        path : '/admin/viewleavePlan',
        icon : <FaIcon.FaTelegramPlane />,
        cName : 'nav-text'
    },
    {
        title : 'Manage Holidays',
        path : '/admin/manageholidays',
        icon : <MdIcon.MdOutlineHolidayVillage />,
        cName : 'nav-text'
    },
    {
        title : 'Prepare Schedule',
        path : '/admin/prepareSchedule',
        icon : <AiIcon.AiOutlineSchedule />,
        cName : 'nav-text'
    },
    {
        title : 'View Schedule',
        path : '/admin/viewSchedule',
        icon : <AiIcon.AiFillSchedule />,
        cName : 'nav-text'
    },

    // {
    //     title : 'My leave plan',
    //     path : '/admin/myleavePlan',
    //     icon : <SlIcon.SlPlane />,
    //     cName : 'nav-text'
    // },
    // {
    //     title : 'My schedule',
    //     path : '/admin/mySchedule',
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
];

export default HamburgerMenuItemsAdmin;