interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => (
  <div className="container">{children}</div>
);

export default Container;
