/**
 * @desc 预览场景展示
 * @author filway
 */

import { previewPropsType, imagePropsType } from '@/defaultProps'

export const previewPropsArr: previewPropsType[] = [
  {
    url: require('../assets/img/cj/show1.png'),
    w: 175,
    h: 90,
    x: 48,
    y: 55,
    r: 0,
  },
  {
    url: require('../assets/img/cj/show2.png'),
    w: 140,
    h: 117,
    x: 78,
    y: 35,
    r: -2,
  },
  {
    url: require('../assets/img/cj/show3.png'),
    w: 302,
    h: 100,
    x: 5,
    y: 14,
    r: 0,
  },
  {
    url: require('../assets/img/cj/show4.png'),
    w: 55,
    h: 30,
    x: 195,
    y: 105,
    r: 25,
  },
  // {
  //   url: require("../assets/img/cj/show5.png"),
  //   w: 110,
  //   h: 110,
  //   x: 182,
  //   y: 40,
  //   r: 1,
  // },
]

export const imgNameArr: imagePropsType[] = [
  {
    w: '90vw',
    h: '55.333vw',
    r: 'rotate(0deg)',
    mt: '-7vw',
    mr: '0vw',
  },
  {
    w: '45vw',
    h: '55.333vw',
    r: 'rotate(0deg)',
    mt: '-7vw',
    mr: '0vw',
  },
  {
    w: '45vw',
    h: '27.333vw',
    r: 'rotate(0deg)',
    mt: '-7vw',
    mr: '0vw',
  },
  {
    w: '45vw',
    h: '27.333vw',
    r: 'rotate(0deg)',
    mt: '-7vw',
    mr: '0vw',
  },
  {
    w: '90vw',
    h: '55.333vw',
    r: 'rotate(-8deg)',
    mt: '-25vw',
    mr: '0vw',
  },
  {
    w: '70vw',
    h: '30vw',
    r: 'rotate(0deg)',
    mt: '-22vw',
    mr: '10vw',
  },
  {
    w: '56vw',
    h: '40vw',
    r: 'perspective(1400px) rotateY( -35deg) skew( 0deg, -18deg) rotateX( 0deg)',
    mt: '-8vw',
    mr: '25vw',
  },
  {
    w: '70vw',
    h: '54vw',
    r: 'rotateX( 0deg) rotateY( 24deg) rotateZ( 8deg) skewX( 10deg)',
    mt: '0vw',
    mr: '20vw',
  },
]


/**
 * <option value="417565">极简风女士卫衣背部</option>
              <!-- <option value="395158">户外夜晚墙壁发光灯牌</option> -->
              <option value="405125">极简双色马克杯</option>
              <option value="417400">极简科技感名片</option>
              <option value="402739">双色手提袋纸袋打包袋</option>
              <option value="402543">双色搪瓷杯马克杯</option>
              <option value="400789">咖啡杯纸杯</option>
              <option value="403021">家庭办公室桌面</option>
              <option value="400618">城市户外指路牌路标</option>
              <option value="419186">室内展厅发布会演讲</option>
              <option value="373614">社交媒体点赞喜欢样机</option>
              <option value="400808">日历logo</option>
              <option value="400457">保温瓶水瓶</option>
              <option value="399295">日历</option>
              <option value="398259">餐饮店一次性餐具筷子</option>
              <option value="417422">圣诞节壁画</option>
              <option value="395559">宠物猫狗牵引绳袋子</option>
              <option value="415305">圣诞树圣诞球</option>
              <option value="412898">团队标语牌手拿气泡卡片</option>
 */
export const imgNameArrNew: any[] = [
  {
    'id': '417565',
    'name': '极简风女士卫衣背部',
    // svgWrapper的aspectRatio
    'aspectRatio': '400/400',
    // viewBox
    'viewBox': '0 0 400 400',
    // 横版排版的 g标签的 transform 属性
    'gTransform0': 'matrix(1, 0, 0, 1, 100, 176) scale(0.55)',
    // 竖版排版的 g标签的 transform 属性
    'gTransform1': 'matrix(1, 0, 0, 1, 100, 176) scale(0.55)',
  },
  {
    'id': '405125',
    'name': '极简双色马克杯',
    'aspectRatio': '375/250',
    'viewBox': '0 0 375 250',
    'gTransform0': 'matrix(1, 0.3, 0, 1, 104, 87) scale(0.2)',
    'gTransform1': 'matrix(1, 0.3, 0, 1, 104, 87) scale(0.2)',
  },
  {
    'id': '417400',
    'name': '极简科技感名片',
    'aspectRatio': '375/250',
    'viewBox': '0 0 375 250',
    'gTransform0': 'matrix(1, 0.3, 0, 1, 104, 87) scale(0.2)',
    'gTransform1': 'matrix(1, 0.3, 0, 1, 104, 87) scale(0.2)',
  }
]

export const planNameArr: string[] = [
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
]
