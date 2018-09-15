import Typography from "typography"
import bootstrapTheme from 'typography-theme-bootstrap'

bootstrapTheme.baseFontSize = '16px',
bootstrapTheme.headerWeight = 400,
bootstrapTheme.baseLineHeight = 1.5,
bootstrapTheme.scaleRatio = 2.5

const typography = new Typography(bootstrapTheme)

export default typography
