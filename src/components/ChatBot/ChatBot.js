// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { getIsAuthenticated } from '../../redux/selectors/authSelectors';

// const Chat = () => {
//   const isAuthenticated = useSelector(getIsAuthenticated);
//   // const [script, setScript] = useState();

//   useEffect(() => {
//     if (isAuthenticated) {
//       (function (d, m) {
//         var kommunicateSettings = {
//           appId: '3073be601a99694b8f670771db9db0eb3',
//           popupWidget: true,
//           automaticChatOpenOnNavigation: true,
//           onInit: function () {
//             var css = `#mck-sidebox-launcher{opacity: 0.5;}
//              #mck-sidebox-launcher:hover{opacity: 1;}
//               @media (max-device-width: 768px)
//               {#mck-sidebox-launcher
//                 {display:none}}`;
//             window.Kommunicate.customizeWidgetCss(css);
//           },
//         };
//         var s = document.createElement('script');
//         s.type = 'text/javascript';
//         s.async = true;
//         s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
//         // setScript(s);
//         var h = document.getElementsByTagName('head')[0];
//         h.appendChild(s);
//         window.kommunicate = m;
//         m._globals = kommunicateSettings;
//       })(document, window.kommunicate || {});
//     } else if (window.Kommunicate) {
//       window.Kommunicate.logout();
//       // if (script) {
//       //   script.remove();
//       //   setScript(undefined);
//       // }
//     }
//   }, [isAuthenticated]);

//   return <div></div>;
// };

// export default Chat;

// setTimeout(() => {

// }, 1000);

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/selectors/authSelectors';

const Chat = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [timeoutIndex, setTimeoutIndex] = useState();

  useEffect(() => {
    timeoutIndex && clearTimeout(timeoutIndex);
    if (isAuthenticated) {
      setTimeoutIndex(
        setTimeout(() => {
          (function (d, m) {
            var kommunicateSettings = {
              appId: '3073be601a99694b8f670771db9db0eb3',
              popupWidget: true,
              automaticChatOpenOnNavigation: true,
              onInit: function () {
                var css = `#mck-sidebox-launcher{opacity: 0.5;}
             #mck-sidebox-launcher:hover{opacity: 1;}
              @media screen and (max-device-width: 768px)
              {#mck-sidebox-launcher
                {display:none}}`;
                window.Kommunicate.customizeWidgetCss(css);
              },
            };
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
            var h = document.getElementsByTagName('head')[0];
            h.appendChild(s);
            window.kommunicate = m;
            m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        }, 2000),
      );
    } else if (window.Kommunicate) {
      window.Kommunicate.logout();
    }
  }, [isAuthenticated]);

  return <div></div>;
};

export default Chat;
