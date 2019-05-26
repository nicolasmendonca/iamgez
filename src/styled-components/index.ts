// import original module declarations
import 'styled-components';
import { ThemeInterface } from 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface ThemeInterface {
    dropzoneBgColor: string;
    dropzoneBorderColor: string;
    dropzoneColor: string;
  }
}

export const defaultTheme: ThemeInterface = {
  dropzoneBgColor: '#d1a5ff',
  dropzoneBorderColor: '#0000003d',
  dropzoneColor: 'white'
};
