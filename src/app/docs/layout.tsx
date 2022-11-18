import DocsContents from '../../components/DocsContents'
import Drawer from '../../components/Drawer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Drawer><DocsContents /></Drawer>{children}
    </>
  )
}
