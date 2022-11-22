import { CheckoutButtonWrapper } from "./styles";

type Props = React.ComponentProps<typeof CheckoutButtonWrapper>;

const CheckoutButton = (props: Props) => {
  return <CheckoutButtonWrapper {...props} />;
};

export default CheckoutButton;
