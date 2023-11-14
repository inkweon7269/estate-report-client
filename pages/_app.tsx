import { store } from '@/store';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { colors } from '@/styles/variables';
import MobileWrap from '@/components/atoms/MobileWrap';

const theme: any = {
    token: {
        // colorPrimary: "#00b96b",
    },
};

export default function App({ Component, pageProps }: AppProps) {
    const GlobalStyle = createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      a {
        text-decoration: none;
      }
      
      ul {
        list-style: none;
      }

      /*
      .custom-input {
        &.error {
          border-color: ${colors.red} !important;
        }
      }
      */
    `;

    return (
        <Provider store={store}>
            <ConfigProvider theme={theme}>
                <GlobalStyle />
                <MobileWrap>
                    <Component {...pageProps} />
                </MobileWrap>
            </ConfigProvider>
        </Provider>
    );
}
