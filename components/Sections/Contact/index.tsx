import { HighlightedHeading } from "@components/Headings";
import { Section } from "../Section";
import { DuplicateIcon, MailIcon } from "@heroicons/react/outline";
import { Field, Form, Formik, FormikProps } from "formik";
import { contactFormSchema } from "./validation";

const ContactMe = () => {
  const email = "reubendrummond@gmail.com";
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("copied to clipboard!");
  };

  return (
    <Section className="flex flex-col items-center">
      <HighlightedHeading>Contact</HighlightedHeading>
      <div className="flex flex-col items-center">
        {/* Email */}
        <div className="flex gap-x-2 items-center">
          <p className="font-medium">{email}</p>
          <DuplicateIcon
            className="w-8 hover:cursor-pointer stroke-gray-800 dark:stroke-gray-200"
            onClick={copyEmailToClipboard}
          />
        </div>
        <Contacts email={email} />
      </div>
      <div className="min-w-[300px] w-full max-w-md">
        <ContactForm />
      </div>
    </Section>
  );
};

const Contacts = ({ email }: { email: string }) => {
  return (
    <div className="flex gap-x-3 py-3">
      <a href={`mailto:${email}`}>
        <MailIcon className="w-12 transition-opacity duration-200 hover:opacity-80 stroke-gray-800 dark:stroke-gray-200" />
      </a>
      <a
        href="https://www.linkedin.com/in/reuben-drummond-13a375190/"
        target="_blank"
        rel="noreferrer"
        className="w-12 transition-opacity duration-200 hover:opacity-80 fill-gray-800 dark:fill-gray-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 32 32"
        >
          <g>
            <path d="M17.303,14.365c0.012-0.015,0.023-0.031,0.031-0.048v0.048H17.303z M32,0v32H0V0H32L32,0z M9.925,12.285H5.153v14.354   h4.772V12.285z M10.237,7.847c-0.03-1.41-1.035-2.482-2.668-2.482c-1.631,0-2.698,1.072-2.698,2.482   c0,1.375,1.035,2.479,2.636,2.479h0.031C9.202,10.326,10.237,9.222,10.237,7.847z M27.129,18.408c0-4.408-2.355-6.459-5.494-6.459   c-2.531,0-3.664,1.391-4.301,2.368v-2.032h-4.77c0.061,1.346,0,14.354,0,14.354h4.77v-8.016c0-0.434,0.031-0.855,0.157-1.164   c0.346-0.854,1.132-1.746,2.448-1.746c1.729,0,2.418,1.314,2.418,3.246v7.68h4.771L27.129,18.408L27.129,18.408z" />
          </g>
        </svg>
      </a>
      <a
        href="https://github.com/reubendrummond"
        target="_blank"
        rel="noreferrer"
        className="w-12 transition-opacity duration-200 hover:opacity-80 fill-gray-800 dark:fill-gray-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
        </svg>
      </a>
    </div>
  );
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        phoneNumber: "",
        message: "",
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values) => {
        console.log(values);
        alert("This form does currently does nothing!");
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email"></Field>
            <label htmlFor="phoneNumber">Phone number</label>
            <Field name="phoneNumber" type="phone"></Field>
            <label htmlFor="message">Message</label>
            <Field name="message" as="textarea"></Field>
            <button type="submit">Submit</button>
            <pre>{JSON.stringify(props.errors, null, 4)}</pre>
            <pre>{JSON.stringify(props.values, null, 4)}</pre>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactMe;
