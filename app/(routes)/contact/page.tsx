import { Socials, SubscriptionForm } from '@/components/_shared';
import { Locations } from './components/locations';
import { ContactForm } from './components/contact-form';

const ContactPage = () => {
  return (
    <div className='grid gap-4 py-4'>
      <ContactForm />
      <Locations />
      <Socials />
      <SubscriptionForm />
    </div>
  );
};

export default ContactPage;
