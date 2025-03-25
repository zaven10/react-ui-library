export interface INotificationContextProps {
  showNotification: () => void
  hideNotification: () => void
  setBgColor: React.Dispatch<React.SetStateAction<string>>
  setContent: React.Dispatch<React.SetStateAction<React.ReactNode>>
}
