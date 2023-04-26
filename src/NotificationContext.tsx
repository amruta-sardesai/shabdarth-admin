import React, { createContext, FC, useContext } from "react";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";

type NotificationType = "success" | "info" | "warning" | "error";

interface NotificationContextProps {
  showNotification: (
    type: NotificationType,
    message: string,
    description: string,
    placement: NotificationPlacement
  ) => void;
}

const NotificationContext = createContext<NotificationContextProps>({
  showNotification: (
    type: NotificationType,
    message: string,
    description: string,
    placement: NotificationPlacement
  ) => {
    notification[type]({
      message,
      description,
      placement,
    });
  },
});

interface Props {
  children: React.ReactNode;
}

export const NotificationProvider: FC<Props> = ({ children }) => {
  const showNotification = (
    type: NotificationType,
    message: string,
    description: string,
    placement: NotificationPlacement
  ) => {
    notification[type]({
      message,
      description,
      placement,
    });
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
