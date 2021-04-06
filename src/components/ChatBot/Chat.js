import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/selectors/authSelectors';

const Chat = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  useEffect(() => {
    alert(isAuthenticated);
    if (isAuthenticated) {
      (function (d, m) {
        var kommunicateSettings = {
          appId: '3073be601a99694b8f670771db9db0eb3',
          popupWidget: true,
          automaticChatOpenOnNavigation: true,
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
    } else if (window.Kommunicate) {
      window.Kommunicate.logout();
    } else {
      setTimeout(() => {
        if (window.Kommunicate) {
          window.Kommunicate.logout();
        }
      }, 1000);
    }
  }, [isAuthenticated]);

  return <div></div>;
};

export default Chat;
