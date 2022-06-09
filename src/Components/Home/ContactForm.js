import React from "react";
import { useForm } from "@formspree/react";
import { MdOutgoingMail } from "react-icons/md";
import feedback from "../../Assets/FeatureImages/feedback.png";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgedqyov");
  if (state.succeeded) {
    return <p className="text-xl font-semiBold text-center text-primary m-3">Thanks for your Feedback!</p>;
  }

  return (
    <div className="md:flex">
      <img src={feedback} class="max-w-xm mx-auto my-auto" alt="feedback"/>
      <div class="card mt-4 mb-4 mx-auto my-auto max-w-xs bg-neutral text-primary shadow-xl">
        <form onSubmit={handleSubmit} className="md:m-6 m-2">
          <h2 class="md:text-2xl text-xl font-semiBold text-center text-primary m-3">
            FEEDBACK
          </h2>
          <div className="mx-auto">
            <label htmlFor="name">User Name</label>
            <input
              id="name"
              type="text"
              name="name"
              class="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
          <div className="mx-auto">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              class="input input-bordered input-accent w-full max-w-xs"
            />
          </div>
          <div className="mx-auto mt-2">
            <textarea
              id="message"
              name="message"
              placeholder="Your feedback!"
              class="textarea w-full max-w-xs textarea-success"
            />
          </div>
          <button
            type="submit"
            class="btn mt-2 btn-outline btn-primary md:btn-wide"
            disabled={state.submitting}
          >
            SEND
            <MdOutgoingMail className="w-5 h-5 ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
