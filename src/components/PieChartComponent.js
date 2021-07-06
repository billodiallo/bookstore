import React from 'react';
import Proptypes from 'prop-types';

export default function PieChartComponent({percentage}) {
    const data = [
        {name: 'Group A', value: 100 - percentage},
        {name: 'Group B', value: percentage},
        
    ];
    const COLORS = ['#f5F6F7', '#379cf6'];
    
}