import Mock from 'mockjs'

import homeApi from './mockServe/home'

Mock.mock('/api/home/getData', homeApi.getStatisticalData)