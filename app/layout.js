export const metadata = {
  title: 'Элитная Мебель | Премиум качество для вашего дома',
  description: 'Эксклюзивная дизайнерская мебель премиум-класса. Итальянское качество, современный дизайн, индивидуальный подход.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
