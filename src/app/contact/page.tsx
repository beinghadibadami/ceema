import type { Metadata } from 'next';
import { Form } from '@/components/forms';
import { Icon } from '@/components/icons';
export const metadata: Metadata = { title: 'Let’s talk' };
export default function Contact() { return <section className="section contact-page"><div><Icon name="coconut" size={52}/><h1>Good conversations<br/>start here.</h1><p>A question about your bottle, your order, or something else? Leave us a note.</p><div className="company-details"><h3>Ceem Healthcare Private Limited</h3><p>The team behind Ceema Coconut Hair Oil.</p><p className="quiet-note">Support email, phone, registered address and business hours will be published after verification.</p></div><p className="preview-note">Preview form: delivery is not yet connected.</p></div><Form kind="contact"/></section>; }
