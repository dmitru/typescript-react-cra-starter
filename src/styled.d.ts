// import original module declarations
// https://styled-components.com/docs/api#typescript
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      primary: string
      secondary: string
    }
  }
}
