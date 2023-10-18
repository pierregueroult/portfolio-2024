interface LayoutProps {
  modal: React.ReactNode;
  children: React.ReactNode;
}

export default async function Layout(props: LayoutProps) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
