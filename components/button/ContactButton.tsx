import Link from 'next/link';

import Button from './Button';

const ContactButton: React.SFC = ({ children }) => (
  <Link href="/contact">
    <Button>
      <b>
        {children || 'GET IN CONTACT'}
      </b>
    </Button>
  </Link>
);

export default ContactButton;
