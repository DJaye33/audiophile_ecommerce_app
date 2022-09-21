interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => (
  <div>{children}</div>
);

export default Container;
